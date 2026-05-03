import { useEffect, useRef } from "react";
import type { DayData } from "../data";

type Props = {
  days: DayData[];
  active: string | null;
};

export default function Chips({ days, active }: Props) {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !scroller.current) return;
    const container = scroller.current;
    const el = container.querySelector<HTMLElement>(
      `[data-chip="${active}"]`
    );
    if (!el) return;
    const targetLeft =
      el.offsetLeft - (container.clientWidth - el.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [active]);

  function jump(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }

  return (
    <nav className="chips" aria-label="day navigation">
      <div className="chips-scroll" ref={scroller}>
        {days.map((d) => (
          <button
            key={d.id}
            className={`chip ${active === d.id ? "active" : ""}`}
            data-chip={d.id}
            onClick={() => jump(d.id)}
          >
            <b>{d.chip.code}</b> {d.chip.date} · {d.chip.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
