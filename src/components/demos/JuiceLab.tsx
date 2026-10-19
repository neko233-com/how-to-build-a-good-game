import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * 反馈感实验台。
 *
 * 同一个「点击命中」的动作，把视觉、听觉、触觉的反馈拆成独立开关。
 * 默认全开与全部关闭各点一次，差距比任何文字描述都直观。
 */

type EffectKey =
  | 'float'
  | 'scale'
  | 'flash'
  | 'particles'
  | 'shake'
  | 'hitstop'
  | 'sound'
  | 'haptic';

const EFFECTS: Array<{ key: EffectKey; label: string; group: '视觉' | '听觉' | '触觉' }> = [
  { key: 'float', label: '飘字', group: '视觉' },
  { key: 'scale', label: '缩放弹跳', group: '视觉' },
  { key: 'flash', label: '闪白', group: '视觉' },
  { key: 'particles', label: '粒子', group: '视觉' },
  { key: 'shake', label: '屏幕震动', group: '视觉' },
  { key: 'hitstop', label: '顿帧', group: '视觉' },
  { key: 'sound', label: '音效', group: '听觉' },
  { key: 'haptic', label: '震动反馈', group: '触觉' },
];

const ALL_ON: Record<EffectKey, boolean> = {
  float: true,
  scale: true,
  flash: true,
  particles: true,
  shake: true,
  hitstop: true,
  sound: true,
  haptic: true,
};

const ALL_OFF: Record<EffectKey, boolean> = {
  float: false,
  scale: false,
  flash: false,
  particles: false,
  shake: false,
  hitstop: false,
  sound: false,
  haptic: false,
};

interface FloatingNumber {
  id: number;
  x: number;
  value: number;
}

interface Particle {
  id: number;
  angle: number;
  distance: number;
}

export function JuiceLab({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState<Record<EffectKey, boolean>>(ALL_ON);
  const [hits, setHits] = useState(0);
  const [floats, setFloats] = useState<FloatingNumber[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [flashing, setFlashing] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [stopped, setStopped] = useState(false);

  const audioRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);
  const seedRef = useRef(0);

  useEffect(
    () => () => {
      for (const timer of timersRef.current) window.clearTimeout(timer);
      void audioRef.current?.close();
    },
    [],
  );

  const later = useCallback((fn: () => void, ms: number) => {
    const timer = window.setTimeout(fn, ms);
    timersRef.current.push(timer);
  }, []);

  const playSound = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new AudioContext();
      }
      const ctx = audioRef.current;
      void ctx.resume();
      const now = ctx.currentTime;
      // 两层：低频「咚」+ 高频「嗒」，音高带随机避免机械重复
      const thump = ctx.createOscillator();
      const thumpGain = ctx.createGain();
      thump.type = 'sine';
      thump.frequency.setValueAtTime(180 + Math.random() * 40, now);
      thump.frequency.exponentialRampToValueAtTime(60, now + 0.12);
      thumpGain.gain.setValueAtTime(0.25, now);
      thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      thump.connect(thumpGain).connect(ctx.destination);
      thump.start(now);
      thump.stop(now + 0.18);

      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = 'triangle';
      click.frequency.setValueAtTime(1200 + Math.random() * 300, now);
      click.frequency.exponentialRampToValueAtTime(500, now + 0.05);
      clickGain.gain.setValueAtTime(0.08, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      click.connect(clickGain).connect(ctx.destination);
      click.start(now);
      click.stop(now + 0.07);
    } catch {
      // 音频上下文被策略阻止时静默跳过，不影响其它反馈
    }
  }, []);

  const hit = () => {
    seedRef.current += 1;
    const seed = seedRef.current;
    setHits((prev) => prev + 1);

    if (enabled.float) {
      const value = 1 + Math.floor(Math.random() * 9);
      setFloats((prev) => [...prev, { id: seed, x: 40 + Math.random() * 120, value }]);
      later(() => setFloats((prev) => prev.filter((item) => item.id !== seed)), 800);
    }

    if (enabled.particles) {
      const burst = Array.from({ length: 10 }, (_, index) => ({
        id: seed * 100 + index,
        angle: (index / 10) * 360 + Math.random() * 18,
        distance: 26 + Math.random() * 26,
      }));
      setParticles((prev) => [...prev, ...burst]);
      later(
        () => setParticles((prev) => prev.filter((item) => !burst.some((b) => b.id === item.id))),
        520,
      );
    }

    if (enabled.flash) {
      setFlashing(true);
      later(() => setFlashing(false), 70);
    }

    if (enabled.shake) {
      setShaking(true);
      later(() => setShaking(false), 180);
    }

    if (enabled.hitstop) {
      setStopped(true);
      later(() => setStopped(false), 80);
    }

    if (enabled.sound) playSound();

    if (enabled.haptic && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(24);
    }
  };

  const groups: Array<'视觉' | '听觉' | '触觉'> = ['视觉', '听觉', '触觉'];

  return (
    <div className={cn('my-10 rounded-xl border p-5', className)}>
      <style>{`
        @keyframes juice-float-up {
          0% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -46px) scale(1.25); }
        }
        .juice-float { animation: juice-float-up 0.8s cubic-bezier(0.2, 0.8, 0.3, 1) forwards; }
        @keyframes juice-particle {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(0.2); }
        }
        .juice-particle { animation: juice-particle 0.5s ease-out forwards; }
        @keyframes juice-punch {
          0% { transform: scale(1); }
          35% { transform: scale(0.82); }
          70% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .juice-punch { animation: juice-punch 0.22s ease-out; }
        @keyframes juice-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .juice-spin { animation: juice-spin 2.4s linear infinite; }
        @keyframes juice-shake {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(3px, -2px); }
          60% { transform: translate(-2px, -1px); }
          80% { transform: translate(2px, 1px); }
        }
        .juice-shake { animation: juice-shake 0.18s linear; }
      `}</style>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setEnabled(ALL_ON)}
          className="hover:bg-accent rounded-md border px-2.5 py-1 text-xs"
        >
          全开
        </button>
        <button
          type="button"
          onClick={() => setEnabled(ALL_OFF)}
          className="hover:bg-accent rounded-md border px-2.5 py-1 text-xs"
        >
          全关
        </button>
        <span className="text-muted-foreground ml-auto font-mono text-xs tabular-nums">
          命中 {hits}
        </span>
      </div>

      <div
        className={cn(
          'bg-muted/50 relative flex h-56 items-center justify-center overflow-hidden rounded-lg border',
          shaking && 'juice-shake',
        )}
      >
        <div
          className={cn(
            'bg-primary/10 absolute size-32 rounded-full',
            stopped && '[animation-play-state:paused]',
          )}
          aria-hidden="true"
        >
          <div className="juice-spin bg-primary/40 absolute top-2 left-1/2 size-2 -translate-x-1/2 rounded-full" />
        </div>

        <button
          type="button"
          onClick={hit}
          className={cn(
            'bg-primary text-primary-foreground relative z-10 size-24 rounded-full font-semibold shadow-lg transition-transform active:scale-95',
            enabled.scale && 'juice-punch',
          )}
          key={enabled.scale ? hits : 'static'}
        >
          打一下
        </button>

        {enabled.float
          ? floats.map((item) => (
              <span
                key={item.id}
                className="juice-float text-primary pointer-events-none absolute top-1/3 left-1/2 z-20 text-xl font-bold"
                style={{ marginLeft: item.x }}
                aria-hidden="true"
              >
                +{item.value}
              </span>
            ))
          : null}

        {enabled.particles
          ? particles.map((item) => {
              const radians = (item.angle * Math.PI) / 180;
              return (
                <span
                  key={item.id}
                  className="juice-particle bg-primary pointer-events-none absolute size-1.5 rounded-full"
                  style={
                    {
                      '--dx': `${Math.cos(radians) * item.distance}px`,
                      '--dy': `${Math.sin(radians) * item.distance}px`,
                    } as React.CSSProperties
                  }
                  aria-hidden="true"
                />
              );
            })
          : null}

        {flashing ? (
          <span
            className="bg-foreground pointer-events-none absolute inset-0 z-30 opacity-25"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {groups.map((group) => (
          <div key={group} className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">{group}</span>
            {EFFECTS.filter((effect) => effect.group === group).map((effect) => (
              <label key={effect.key} className="flex items-center gap-1.5 text-xs">
                <input
                  type="checkbox"
                  checked={enabled[effect.key]}
                  onChange={(event) =>
                    setEnabled((prev) => ({ ...prev, [effect.key]: event.target.checked }))
                  }
                  className="accent-primary"
                />
                {effect.label}
              </label>
            ))}
          </div>
        ))}
      </div>

      <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
        「顿帧」让背景转动的光点暂停
        80ms——这就是打击感的来源之一。手机上勾选「震动反馈」会真的震动。
      </p>
    </div>
  );
}
