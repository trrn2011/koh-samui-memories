import img5752 from "./assets/photos/IMG_5752.jpg";
import img5770 from "./assets/photos/IMG_5770.jpg";
import img5775 from "./assets/photos/IMG_5775.jpg";
import img5807 from "./assets/photos/IMG_5807.jpg";
import img5813 from "./assets/photos/IMG_5813.jpg";
import img5828 from "./assets/photos/IMG_5828.jpg";
import img5852 from "./assets/photos/IMG_5852.jpg";
import img5872 from "./assets/photos/IMG_5872.jpg";
import img5876 from "./assets/photos/IMG_5876.jpg";
import img5889 from "./assets/photos/IMG_5889.jpg";
import img5914 from "./assets/photos/IMG_5914.jpg";
import img5922 from "./assets/photos/IMG_5922.jpg";

export const photos = {
  p5752: img5752,
  p5770: img5770,
  p5775: img5775,
  p5807: img5807,
  p5813: img5813,
  p5828: img5828,
  p5852: img5852,
  p5872: img5872,
  p5876: img5876,
  p5889: img5889,
  p5914: img5914,
  p5922: img5922,
};

export type ProgramItem = { time: string; text: string };

export type StackPhoto = {
  src: string;
  caption: string;
  meta?: string;
  variant?: "wide" | "tall" | "default";
  rot?: "l" | "r" | "none";
  tape?: boolean;
  alt: string;
};

export type StackBlock = {
  kind: "stack";
  cols?: 1 | 2;
  items: StackPhoto[];
};

export type BleedBlock = {
  kind: "bleed";
  src: string;
  alt: string;
};

export type QuoteBlock = {
  kind: "quote";
  text: string;
};

export type ContentBlock = StackBlock | BleedBlock | QuoteBlock;

export type DayCover = {
  src: string;
  alt: string;
  badge: string;
  dateStamp: string;
  titleA: string;
  titleB: string;
  titleEm?: boolean;
  sub: string;
};

export type DayData = {
  id: string;
  chip: { code: string; date: string; label: string };
  alt?: boolean;
  cover?: DayCover;
  program?: { title: string; items: ProgramItem[] };
  blocks?: ContentBlock[];
  rest?: { icon: string; title: string; lines: string[]; tag: string };
};

export const days: DayData[] = [
  {
    id: "d1",
    chip: { code: "D1", date: "04.30", label: "ARRIVAL" },
    cover: {
      src: photos.p5770,
      alt: "Jungle Club",
      badge: "day one",
      dateStamp: "04 · 30 · THU",
      titleA: "Arrival,",
      titleB: "& Jungle Club",
      titleEm: true,
      sub: "サムイ着 → Bo Putのヴィラ → 山頂テラス → Fisherman's Village",
    },
    program: {
      title: "Today's Program",
      items: [
        { time: "07:30", text: "サムイ空港 着" },
        { time: "08:00", text: "ヴィラ チェックイン" },
        { time: "12:00", text: "Jungle Club（車30分）" },
        { time: "17:00", text: "Fisherman's Village" },
        { time: "19:00", text: "Coco Tam's で夕食" },
        { time: "22:00", text: "マッサージで〆" },
      ],
    },
    blocks: [
      {
        kind: "stack",
        items: [
          {
            src: photos.p5752,
            caption: "いってきます",
            meta: "NRT · DEPARTURE",
            variant: "wide",
            rot: "l",
            tape: true,
            alt: "出発前",
          },
          {
            src: photos.p5775,
            caption: "Walking Street で集合",
            meta: "FISHERMAN'S VILLAGE",
            rot: "r",
            alt: "Fisherman's Village",
          },
        ],
      },
      { kind: "quote", text: "山の上の風と、はじめてのトムヤム。旅がはじまる。" },
    ],
  },
  {
    id: "d2",
    chip: { code: "D2", date: "05.01", label: "FULL MOON" },
    alt: true,
    cover: {
      src: photos.p5852,
      alt: "MOONRISE",
      badge: "day two",
      dateStamp: "05 · 01 · FRI",
      titleA: "Beach &",
      titleB: "Full Moon",
      titleEm: true,
      sub: "ビーチ → Central Samui → 仮眠 → Big Buddha 桟橋 → パンガン島",
    },
    program: {
      title: "Today's Program",
      items: [
        { time: "AM", text: "ビーチでブランコ" },
        { time: "12:00", text: "Central Samui でチームランチ" },
        { time: "15:00", text: "ヴィラ戻って仮眠" },
        { time: "17:00", text: "Big Buddha 桟橋 → パンガン島" },
        { time: "20:00", text: "Full Moon Party @ Haad Rin" },
        { time: "深夜", text: "Moonrise / Phangan Mantra" },
      ],
    },
    blocks: [
      {
        kind: "stack",
        items: [
          {
            src: photos.p5807,
            caption: "本日のチームランチ",
            meta: "SAMUI · 13:13",
            variant: "wide",
            tape: true,
            alt: "チームランチ",
          },
        ],
      },
      {
        kind: "stack",
        cols: 2,
        items: [
          {
            src: photos.p5813,
            caption: "砂浜で",
            meta: "BEACH · 14:07",
            variant: "tall",
            rot: "l",
            alt: "ビーチ",
          },
          {
            src: photos.p5828,
            caption: "パンガン上陸",
            meta: "18:37",
            variant: "tall",
            rot: "r",
            alt: "パンガン島",
          },
        ],
      },
      { kind: "bleed", src: photos.p5872, alt: "Full Moon" },
      {
        kind: "stack",
        cols: 2,
        items: [
          {
            src: photos.p5876,
            caption: "girls night",
            meta: "23:26",
            variant: "tall",
            rot: "r",
            alt: "フェイスペイント",
          },
          {
            src: photos.p5889,
            caption: "夜が更けて",
            meta: "05.02 · 01:40",
            variant: "tall",
            rot: "l",
            alt: "深夜",
          },
        ],
      },
      { kind: "quote", text: "朝方ヴィラに帰ると、空はもう白んでいた。" },
    ],
  },
  {
    id: "d3",
    chip: { code: "D3", date: "05.02", label: "DAY OFF" },
    rest: {
      icon: "zzz...",
      title: "A Day to Do Nothing",
      lines: [
        "朝方ヴィラに着いて就寝。",
        "起きてはプール、食べては昼寝。",
        "写真も撮らない、それもまた贅沢。",
      ],
      tag: "— 05 · 02 · SAT —",
    },
  },
  {
    id: "d4",
    chip: { code: "D4", date: "05.03", label: "CRUISE" },
    alt: true,
    cover: {
      src: photos.p5914,
      alt: "クルーズ",
      badge: "day four",
      dateStamp: "05 · 03 · SUN",
      titleA: "Private",
      titleB: "Long-tail",
      titleEm: true,
      sub: "ロングテール船貸切 → Pig Island → シュノーケリング → 花かご & シャンパン",
    },
    program: {
      title: "Today's Program",
      items: [
        { time: "AM", text: "ロングテール船 出航" },
        { time: "10:00", text: "Pig Island（豚と泳ぐ）" },
        { time: "12:00", text: "シュノーケリング" },
        { time: "14:00", text: "花かご · シャンパン on the boat" },
        { time: "夕方", text: "ヴィラ戻り" },
      ],
    },
    blocks: [
      {
        kind: "stack",
        items: [
          {
            src: photos.p5922,
            caption: "crew of six",
            meta: "PIG ISLAND · 09:47",
            variant: "wide",
            rot: "l",
            tape: true,
            alt: "クルー集合",
          },
        ],
      },
      { kind: "quote", text: "海も空も貸切。今回いちばんの空の青。" },
    ],
  },
  {
    id: "d5",
    chip: { code: "D5", date: "05.04", label: "GO HOME" },
    rest: {
      icon: "bye 🌴",
      title: "Going Home",
      lines: ["ヴィラ チェックアウト", "サムイ空港（車10分）→ 帰国便"],
      tag: "— 05 · 04 · MON —",
    },
  },
];
