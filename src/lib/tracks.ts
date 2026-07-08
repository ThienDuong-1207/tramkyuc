export type Track = {
  title: string;
  subtitle: string;
  kind: "story" | "music";
  /** Object path (filename) inside the Supabase "tramkyucmp3" storage bucket root. */
  storagePath: string;
  /** Fallback duration (seconds) shown before the browser loads real metadata. */
  fallbackDuration: number;
};

export const TRACKS: Track[] = [
  {
    title: "Thạch Sanh",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "thach-sanh.mp3",
    fallbackDuration: 508,
  },
  {
    title: "Thánh Gióng",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "thanh-giong.mp3",
    fallbackDuration: 874,
  },
  {
    title: "Cây Tre Trăm Đốt",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "cay-tre-tram-dot.mp3",
    fallbackDuration: 459,
  },
  {
    title: "Jack Và Cây Đậu Thần",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "jack-va-cay-dau-than.mp3",
    fallbackDuration: 652,
  },
  {
    title: "Sơn Tinh Thủy Tinh",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "son-tinh-thuy-tinh.mp3",
    fallbackDuration: 412,
  },
  {
    title: "Sói Độc Ác Và 3 Chú Thỏ",
    subtitle: "Truyện cổ tích · giọng kể",
    kind: "story",
    storagePath: "soi-doc-ac-va-3-chu-tho.mp3",
    fallbackDuration: 531,
  },
  {
    title: "Nhạc Thư Giãn",
    subtitle: "Nhạc thiếu nhi không lời",
    kind: "music",
    storagePath: "nhac-thu-gian.mp3",
    fallbackDuration: 1612,
  },
  {
    title: "Nhạc Vui Nhộn",
    subtitle: "Nhạc thiếu nhi không lời",
    kind: "music",
    storagePath: "nhac-vui-nhon.mp3",
    fallbackDuration: 1250,
  },
];
