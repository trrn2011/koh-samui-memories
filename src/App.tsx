import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Chips from "./components/Chips";
import DaySection from "./components/DaySection";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import Boot from "./components/Boot";
import { days, type StackPhoto } from "./data";

export default function App() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState<StackPhoto | null>(null);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="phone">
      <Boot show={booting} />
      <Hero />
      <Chips days={days} active={active} />

      {days.map((d, i) => (
        <div key={d.id}>
          <DaySection
            data={d}
            onActiveChange={setActive}
            onOpenPhoto={(p) => {
              setPhoto(p);
              setOpen(true);
            }}
          />
          {i < days.length - 1 ? <Divider /> : null}
        </div>
      ))}

      <Footer />

      <Lightbox
        open={open}
        src={photo?.src ?? null}
        alt={photo?.alt ?? ""}
        caption={
          photo
            ? `${photo.caption}${photo.meta ? " · " + photo.meta : ""}`
            : ""
        }
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
