import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * 手感调参器。
 *
 * 一个极小的横版跳跃沙盒：点画面或按空格起跳，方向键左右移动。
 * 滑块调的是第 12 章讲的那几个参数——同一套操作逻辑，
 * 只改参数就能得到完全不同的「手感流派」。
 */

interface Params {
  /** 重力加速度，px/s² */
  gravity: number;
  /** 起跳初速度，px/s（负数向上） */
  jumpVelocity: number;
  /** 水平最大速度，px/s */
  maxSpeed: number;
  /** 水平加速度，px/s² */
  accel: number;
  /** 松开方向后的摩擦减速，px/s² */
  friction: number;
  /** 土狼时间：离开地面后仍可起跳的宽限，毫秒 */
  coyoteMs: number;
  /** 输入缓冲：落地前提前按跳也会生效的窗口，毫秒 */
  bufferMs: number;
}

const PRESETS: Array<{ name: string; note: string; params: Params }> = [
  {
    name: '马里奥式（弹簧感）',
    note: '高初速 + 较弱重力，滞空长、手感轻快',
    params: {
      gravity: 2200,
      jumpVelocity: -860,
      maxSpeed: 380,
      accel: 3200,
      friction: 2600,
      coyoteMs: 110,
      bufferMs: 130,
    },
  },
  {
    name: '银河恶魔城式（精确）',
    note: '重力大、初速小，落点可预测',
    params: {
      gravity: 3100,
      jumpVelocity: -760,
      maxSpeed: 300,
      accel: 4200,
      friction: 3600,
      coyoteMs: 70,
      bufferMs: 60,
    },
  },
  {
    name: '魂系式（重量感）',
    note: '低初速 + 高重力，起落迟钝、动作有分量',
    params: {
      gravity: 3400,
      jumpVelocity: -620,
      maxSpeed: 210,
      accel: 1200,
      friction: 1600,
      coyoteMs: 40,
      bufferMs: 50,
    },
  },
  {
    name: '移动端轻触（宽容）',
    note: '宽缓冲 + 宽土狼时间，手指不精确也不容易失误',
    params: {
      gravity: 1500,
      jumpVelocity: -700,
      maxSpeed: 420,
      accel: 5200,
      friction: 3000,
      coyoteMs: 160,
      bufferMs: 200,
    },
  },
];

const SLIDERS: Array<{
  key: keyof Params;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
}> = [
  { key: 'gravity', label: '重力', min: 800, max: 4200, step: 100, unit: 'px/s²' },
  { key: 'jumpVelocity', label: '起跳初速', min: -1100, max: -400, step: 20, unit: 'px/s' },
  { key: 'maxSpeed', label: '水平最大速度', min: 120, max: 520, step: 20, unit: 'px/s' },
  { key: 'accel', label: '水平加速度', min: 600, max: 6000, step: 200, unit: 'px/s²' },
  { key: 'friction', label: '摩擦减速', min: 600, max: 4000, step: 200, unit: 'px/s²' },
  { key: 'coyoteMs', label: '土狼时间', min: 0, max: 250, step: 10, unit: 'ms' },
  { key: 'bufferMs', label: '输入缓冲', min: 0, max: 250, step: 10, unit: 'ms' },
];

const WIDTH = 560;
const HEIGHT = 220;
const GROUND = 176;
const CHARACTER = 22;

export function GameFeelPlayground({ className }: { className?: string }) {
  const [params, setParams] = useState<Params>(PRESETS[0].params);
  const [presetName, setPresetName] = useState(PRESETS[0].name);
  const [stats, setStats] = useState({ peak: 0, airtime: 0, jumps: 0 });

  const paramsRef = useRef(params);
  paramsRef.current = params;

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({
    x: 120,
    y: 0,
    vx: 0,
    vy: 0,
    onGround: true,
    coyote: 0,
    buffer: 0,
    left: false,
    right: false,
    jumpHeld: false,
    peak: 0,
    airStart: 0,
    airtime: 0,
  });

  const requestJump = useCallback(() => {
    stateRef.current.buffer = paramsRef.current.bufferMs;
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.code === 'Space' || event.code === 'ArrowUp' || event.code === 'KeyW') {
        event.preventDefault();
        requestJump();
      }
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') stateRef.current.left = true;
      if (event.code === 'ArrowRight' || event.code === 'KeyD') stateRef.current.right = true;
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft' || event.code === 'KeyA') stateRef.current.left = false;
      if (event.code === 'ArrowRight' || event.code === 'KeyD') stateRef.current.right = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [requestJump]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let statAccum = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const p = paramsRef.current;
      const s = stateRef.current;

      // 水平
      if (s.right) s.vx = Math.min(p.maxSpeed, s.vx + p.accel * dt);
      else if (s.left) s.vx = Math.max(-p.maxSpeed, s.vx - p.accel * dt);
      else {
        const drop = p.friction * dt;
        s.vx = Math.abs(s.vx) <= drop ? 0 : s.vx - Math.sign(s.vx) * drop;
      }
      s.x += s.vx * dt;
      s.x = Math.max(CHARACTER / 2, Math.min(WIDTH - CHARACTER / 2, s.x));

      // 垂直
      s.vy += p.gravity * dt;
      s.y -= s.vy * dt;

      const wasAirborne = !s.onGround;
      if (s.y <= 0) {
        s.y = 0;
        s.vy = 0;
        if (wasAirborne) {
          s.airtime = now - s.airStart;
          statAccum = 1;
        }
        s.onGround = true;
        s.coyote = p.coyoteMs;
      } else {
        s.onGround = false;
        s.coyote = Math.max(0, s.coyote - dt * 1000);
        if (!wasAirborne) s.airStart = now;
      }

      // 起跳（输入缓冲 + 土狼时间）
      if (s.buffer > 0 && (s.onGround || s.coyote > 0)) {
        s.vy = -Math.abs(p.jumpVelocity);
        s.y = Math.max(0.1, s.y);
        s.onGround = false;
        s.coyote = 0;
        s.buffer = 0;
        s.peak = 0;
        s.airStart = now;
        statAccum = 2;
      }
      s.buffer = Math.max(0, s.buffer - dt * 1000);

      s.peak = Math.max(s.peak, s.y);

      const body = bodyRef.current;
      if (body) {
        const squash = s.onGround && Math.abs(s.vy) < 1 ? 0.08 : 0;
        body.style.transform = `translate(${s.x - CHARACTER / 2}px, ${GROUND - CHARACTER - s.y}px) scale(${1 + squash}, ${1 - squash})`;
      }

      if (statAccum === 1) {
        setStats((prev) => ({
          peak: Math.round(s.peak),
          airtime: Math.round(s.airtime),
          jumps: prev.jumps + 1,
        }));
        statAccum = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const applyPreset = (preset: (typeof PRESETS)[number]) => {
    setParams(preset.params);
    setPresetName(preset.name);
  };

  const update = (key: keyof Params, value: number) => {
    setParams((prev) => ({ ...prev, [key]: value }));
    setPresetName('自定义');
  };

  return (
    <div className={cn('my-10 rounded-xl border p-5', className)}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.name}
            type="button"
            onClick={() => applyPreset(preset)}
            aria-pressed={presetName === preset.name}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              presetName === preset.name
                ? 'bg-primary text-primary-foreground border-primary'
                : 'hover:bg-accent',
            )}
          >
            {preset.name}
          </button>
        ))}
        <span className="text-muted-foreground ml-auto text-xs">{presetName}</span>
      </div>

      <div
        role="presentation"
        onPointerDown={() => requestJump()}
        className="bg-muted/60 relative overflow-hidden rounded-lg border select-none"
        style={{ height: HEIGHT }}
      >
        <div
          className="bg-border absolute right-0 left-0"
          style={{ top: GROUND, height: 2 }}
          aria-hidden="true"
        />
        <div
          ref={bodyRef}
          className="bg-primary absolute rounded-[4px]"
          style={{ width: CHARACTER, height: CHARACTER, top: 0, left: 0 }}
          aria-hidden="true"
        />
        <p className="text-muted-foreground pointer-events-none absolute top-3 left-3 text-xs">
          点这里或按空格起跳 · 方向键左右移动
        </p>
        <p className="text-muted-foreground pointer-events-none absolute right-3 bottom-3 font-mono text-xs tabular-nums">
          峰值 {stats.peak}px · 滞空 {stats.airtime}ms
        </p>
      </div>

      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
        {PRESETS.find((preset) => preset.name === presetName)?.note ??
          '自定义参数：改下面任意一项，注意落点预测与滞空感的即时变化。'}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {SLIDERS.map((slider) => (
          <label key={slider.key} className="block">
            <span className="text-muted-foreground mb-1 flex items-baseline justify-between text-xs">
              <span>{slider.label}</span>
              <span className="text-foreground font-mono tabular-nums">
                {params[slider.key]} {slider.unit}
              </span>
            </span>
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={params[slider.key]}
              onChange={(event) => update(slider.key, Number(event.target.value))}
              className="accent-primary w-full"
              aria-label={slider.label}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
