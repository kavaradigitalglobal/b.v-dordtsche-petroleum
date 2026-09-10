import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedStat({
  value,
  suffix = "",
  duration = 1200,
  className,
}: AnimatedStatProps) {
  const target = typeof value === "number" ? value : Number.parseFloat(value);
  const safeTarget = Number.isFinite(target) ? target : 0;
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplayValue(safeTarget);
      return;
    }

    let frameId: number | undefined;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasStarted) return;
        hasStarted = true;
        observer.disconnect();

        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(safeTarget * easedProgress));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, [duration, safeTarget]);

  return (
    <span ref={elementRef} className={className} aria-label={`${safeTarget}${suffix}`}>
      <span aria-hidden="true">
        {displayValue}
        {suffix}
      </span>
    </span>
  );
}

type AnimatedProgressProps = {
  value: number;
  className?: string;
};

export function AnimatedProgress({ value, className }: AnimatedProgressProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={progressRef}
      className={className}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{ width: visible ? `${value}%` : "0%" }}
    />
  );
}