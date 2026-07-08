export type ZoneAction = {
  /** Baloo 2 label shown on the button */
  title: string;
  /** small caption under the title */
  subtitle: string;
  /**
   * Object path (filename) inside the Supabase "tramkyuc_audio" storage bucket root.
   * Leave empty until the file is uploaded — the player shows a "chưa có" state instead.
   */
  storagePath: string;
};

export type Zone = {
  slug: string;
  /** small pill shown in the top-left corner of the banner */
  eyebrow: string;
  /** which illustration to render, see ZoneArt.tsx */
  art: "nghe" | "ngua-go" | "chu-teu" | "hoa-sen" | "cong-tam-quan";
  title: string;
  subtitle: string;
  durationLabel: string;
  narratorLabel: string;
  /** always rendered in the red slot */
  primaryAction: ZoneAction;
  /** always rendered in the green slot */
  secondaryAction: ZoneAction;
  footerCredit: string;
};

export const ZONES: Zone[] = [
  {
    slug: "tru-mosaic",
    eyebrow: "Trụ điêu khắc · Khu vui chơi",
    art: "nghe",
    title: "Sự Tích Thạch Sanh",
    subtitle:
      "Chàng trai nghèo dũng cảm diệt chằn tinh, cứu công chúa và trở thành người anh hùng được dân gian ngợi ca — người gác cổng của khu vui chơi cũng mạnh mẽ như thế!",
    durationLabel: "8 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sự tích Thạch Sanh · giọng kể",
      storagePath: "thach-sanh.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc thiếu nhi",
      subtitle: "Nhạc không lời · thư giãn",
      storagePath: "nhac-thu-gian.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "khu-du-quay",
    eyebrow: "Khu đu quay · Khu vui chơi",
    art: "ngua-go",
    title: "Ngựa Gỗ Quay Vòng",
    subtitle:
      "Chú ngựa gỗ trên đu quay mang dáng dấp ngựa sắt của Thánh Gióng. Cùng nghe chuyện và nhún nhảy theo điệu nhạc vui nhé!",
    durationLabel: "15 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sự tích Thánh Gióng · giọng kể",
      storagePath: "thanh-giong.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc thiếu nhi",
      subtitle: "Nhạc không lời · vui nhộn",
      storagePath: "nhac-vui-nhon.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "khu-ve",
    eyebrow: "Góc vẽ · Khu vui chơi",
    art: "chu-teu",
    title: "Cây Tre Trăm Đốt",
    subtitle:
      "Anh nông dân hiền lành được Bụt giúp phép thần kỳ nối trăm đốt tre thành một cây dài — một câu chuyện đầy phép màu cho góc vẽ thêm sống động!",
    durationLabel: "8 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Cây tre trăm đốt · giọng kể",
      storagePath: "cay-tre-tram-dot.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc nền nhẹ",
      subtitle: "Nhạc không lời cho bé tô màu",
      storagePath: "nhac-thu-gian.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "goc-nghi",
    eyebrow: "Góc nghỉ · Khu vui chơi",
    art: "hoa-sen",
    title: "Khoảng Lặng Trong Vườn",
    subtitle:
      "Một chút thư giãn cho ba mẹ trong lúc bé vui chơi — nhạc không lời nhẹ nhàng, dịu êm như hoa sen trong đầm.",
    durationLabel: "27 phút",
    narratorLabel: "Không lời · thư giãn",
    primaryAction: {
      title: "Nghe nhạc thư giãn",
      subtitle: "Không lời · hòa tấu nhẹ nhàng",
      storagePath: "nhac-thu-gian.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc vui nhộn",
      subtitle: "Đổi không khí · giai điệu rộn ràng",
      storagePath: "nhac-vui-nhon.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "cong-vao",
    eyebrow: "Cổng vào · Khu vui chơi",
    art: "cong-tam-quan",
    title: "Chào Mừng Đến Sân Chơi",
    subtitle:
      "Mỗi góc trong sân chơi đều có một mã QR riêng để nghe truyện và nhạc dành cho bé. Nghe thử hai câu chuyện mở đầu ngay tại cổng vào nhé!",
    durationLabel: "7 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sơn Tinh Thủy Tinh · giọng kể",
      storagePath: "son-tinh-thuy-tinh.mp3",
    },
    secondaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sói Độc Ác Và 3 Chú Thỏ · giọng kể",
      storagePath: "soi-doc-ac-va-3-chu-tho.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
];

export function getZone(slug: string): Zone | undefined {
  return ZONES.find((zone) => zone.slug === slug);
}
