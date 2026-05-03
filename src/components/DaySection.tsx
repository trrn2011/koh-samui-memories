import { useEffect, useRef } from "react";
import type { DayData, StackPhoto } from "../data";
import DayCover from "./DayCover";
import Program from "./Program";
import Polaroid from "./Polaroid";
import Bleed from "./Bleed";
import Quote from "./Quote";
import RestCard from "./RestCard";
import VideoCard from "./VideoCard";

type Props = {
  data: DayData;
  onActiveChange: (id: string) => void;
  onOpenPhoto: (p: StackPhoto) => void;
};

export default function DaySection({
  data,
  onActiveChange,
  onOpenPhoto,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) onActiveChange(data.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [data.id, onActiveChange]);

  return (
    <section
      id={data.id}
      ref={ref}
      className={`day ${data.alt ? "alt" : ""}`}
    >
      {data.cover ? <DayCover data={data.cover} /> : null}
      {data.program ? (
        <Program title={data.program.title} items={data.program.items} />
      ) : null}

      {data.blocks?.map((block, bi) => {
        if (block.kind === "stack") {
          return (
            <div
              key={bi}
              className={`stack ${block.cols === 2 ? "cols-2" : ""}`}
            >
              {block.items.map((p, i) => (
                <Polaroid
                  key={i}
                  {...p}
                  index={i}
                  onOpen={() => onOpenPhoto(p)}
                />
              ))}
            </div>
          );
        }
        if (block.kind === "bleed") {
          return <Bleed key={bi} src={block.src} alt={block.alt} />;
        }
        if (block.kind === "quote") {
          return <Quote key={bi} text={block.text} />;
        }
        if (block.kind === "video") {
          return (
            <div key={bi} className="stack">
              <VideoCard
                src={block.src}
                poster={block.poster}
                caption={block.caption}
                meta={block.meta}
                rot={block.rot}
                tape={block.tape}
                variant={block.variant}
                index={0}
              />
            </div>
          );
        }
        return null;
      })}

      {data.rest ? (
        <RestCard
          icon={data.rest.icon}
          title={data.rest.title}
          lines={data.rest.lines}
          tag={data.rest.tag}
        />
      ) : null}
    </section>
  );
}
