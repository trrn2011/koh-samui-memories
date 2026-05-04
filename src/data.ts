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
import img3380 from "./assets/photos/IMG_3380.jpg";
import img6150 from "./assets/photos/IMG_6150.jpg";
import img0485 from "./assets/photos/IMG_0485.jpg";
import img6268 from "./assets/photos/IMG_6268.jpg";
import img5791 from "./assets/photos/IMG_5791.jpg";
import img5870 from "./assets/photos/IMG_5870.jpg";
import img5885 from "./assets/photos/IMG_5885.jpg";
import img0728 from "./assets/photos/IMG_0728.jpg";
import img5925 from "./assets/photos/IMG_5925.jpg";
import img5145 from "./assets/photos/IMG_5145.jpg";
import img5960 from "./assets/photos/IMG_5960.jpg";
import imgSunset from "./assets/photos/IMG_SUNSET.jpg";
import vid5773 from "./assets/videos/IMG_5773.mp4";
import vid5773Poster from "./assets/videos/IMG_5773_poster.jpg";

export const videos = {
  v5773: { src: vid5773, poster: vid5773Poster },
};

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
  p3380: img3380,
  p6150: img6150,
  p0485: img0485,
  p6268: img6268,
  p5791: img5791,
  p5870: img5870,
  p5885: img5885,
  p0728: img0728,
  p5925: img5925,
  p5145: img5145,
  p5960: img5960,
  pSunset: imgSunset,
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

export type VideoBlock = {
  kind: "video";
  src: string;
  poster: string;
  caption: string;
  meta?: string;
  variant?: "wide" | "tall" | "default";
  rot?: "l" | "r" | "none";
  tape?: boolean;
};

export type BleedBlock = {
  kind: "bleed";
  src: string;
  alt: string;
  caption?: string;
};

export type QuoteBlock = {
  kind: "quote";
  text: string;
};

export type ContentBlock = StackBlock | BleedBlock | QuoteBlock | VideoBlock;

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
      src: photos.p6150,
      alt: "Jungle Club group",
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
        cols: 2,
        items: [
          {
            src: photos.p5752,
            caption: "いってきます",
            meta: "NRT · DEPARTURE",
            variant: "tall",
            rot: "l",
            tape: true,
            alt: "出発前",
          },
          {
            src: photos.p3380,
            caption: "サムイ空港 着",
            meta: "07:30",
            variant: "tall",
            rot: "r",
            alt: "サムイ空港 Songkran",
          },
        ],
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p5770,
            caption: "山の上で乾杯",
            meta: "JUNGLE CLUB · 12:54",
            variant: "wide",
            tape: true,
            alt: "Jungle Club selfie",
          },
        ],
      },
      {
        kind: "video",
        src: videos.v5773.src,
        poster: videos.v5773.poster,
        caption: "Jungle Club からの眺め",
        meta: "JUNGLE CLUB · 13:00",
        rot: "r",
        tape: true,
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p5775,
            caption: "Walking Street で集合",
            meta: "FISHERMAN'S VILLAGE",
            rot: "l",
            alt: "Fisherman's Village",
          },
        ],
      },
      {
        kind: "stack",
        cols: 2,
        items: [
          {
            src: photos.p6268,
            caption: "Coco Tam's で乾杯",
            meta: "18:19",
            variant: "tall",
            rot: "l",
            alt: "Coco Tam's",
          },
          {
            src: photos.p0485,
            caption: "マッサージで〆",
            meta: "16:46",
            variant: "tall",
            rot: "r",
            alt: "フットマッサージ",
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
      sub: "ビーチ → Central Samui → 昼ごはん → Big Buddha 桟橋 → パンガン島",
    },
    program: {
      title: "Today's Program",
      items: [
        { time: "AM", text: "ビーチでブランコ" },
        { time: "11:00", text: "Central Samui · The White Lotus" },
        { time: "13:00", text: "昼ごはん" },
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
            src: photos.p5791,
            caption: "Central Samui · The White Lotus",
            meta: "11:00",
            variant: "wide",
            tape: true,
            alt: "Central Samui",
          },
        ],
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p5807,
            caption: "本日の昼ごはん",
            meta: "SAMUI · 13:13",
            variant: "wide",
            rot: "r",
            alt: "昼ごはん",
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
      {
        kind: "bleed",
        src: photos.pSunset,
        alt: "サンセットビーチ集合写真",
        caption: "Big Buddha 桟橋へ向かう前に。",
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p5870,
            caption: "フェイスペイント準備中",
            meta: "21:35 · GETTING READY",
            variant: "wide",
            rot: "l",
            tape: true,
            alt: "ペイント準備",
          },
        ],
      },
      { kind: "bleed", src: photos.p5872, alt: "Full Moon の街路" },
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
            src: photos.p5885,
            caption: "砂浜にて",
            meta: "23:30",
            variant: "tall",
            rot: "l",
            alt: "Full Moon の砂浜",
          },
        ],
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p0728,
            caption: "夜が更けて",
            meta: "05.02 · 03:26",
            variant: "wide",
            rot: "r",
            alt: "深夜のビーチ",
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
      sub: "ロングテール船貸切 → Pig Island → シュノーケリング",
    },
    program: {
      title: "Today's Program",
      items: [
        { time: "AM", text: "ロングテール船 出航" },
        { time: "10:00", text: "Pig Island（豚と泳ぐ）" },
        { time: "12:00", text: "シュノーケリング" },
        { time: "夕方", text: "ヴィラ戻り" },
      ],
    },
    blocks: [
      {
        kind: "stack",
        items: [
          {
            src: photos.p5925,
            caption: "crew of six ✋",
            meta: "PIG ISLAND · 09:47",
            variant: "wide",
            rot: "l",
            tape: true,
            alt: "クルー集合",
          },
        ],
      },
      {
        kind: "stack",
        cols: 2,
        items: [
          {
            src: photos.p5145,
            caption: "Pig Island で餌やり",
            meta: "10:19",
            variant: "tall",
            rot: "l",
            alt: "豚に餌やり",
          },
          {
            src: photos.p5960,
            caption: "海辺の友達",
            meta: "10:30",
            variant: "tall",
            rot: "r",
            alt: "海と犬",
          },
        ],
      },
      {
        kind: "stack",
        items: [
          {
            src: photos.p5922,
            caption: "船首から",
            meta: "LONG-TAIL",
            variant: "wide",
            rot: "r",
            alt: "船首",
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
