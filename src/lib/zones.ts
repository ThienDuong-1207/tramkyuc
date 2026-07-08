export type ZoneAction = {
  /** Baloo 2 label shown on the button */
  title: string;
  /** small caption under the title */
  subtitle: string;
  /**
   * Object path inside the Supabase "audio" storage bucket, e.g. "tru-mosaic/story.mp3".
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
    title: "Sự tích Con Nghê",
    subtitle:
      "Vì sao Nghê được đặt trước cổng để canh giữ niềm vui và xua đuổi điều xấu? Cùng nghe câu chuyện dân gian nhé!",
    durationLabel: "6 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sự tích Con Nghê · giọng kể",
      storagePath: "tru-mosaic/story.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc thiếu nhi",
      subtitle: "Bắc Kim Thang · bản phối nhẹ",
      storagePath: "tru-mosaic/music.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "khu-du-quay",
    eyebrow: "Khu đu quay · Khu vui chơi",
    art: "ngua-go",
    title: "Ngựa Gỗ Quay Vòng",
    subtitle:
      "Chú ngựa gỗ trên đu quay mang dáng dấp ngựa sắt của Thánh Gióng. Cùng nghe chuyện và nhún nhảy theo điệu dân ca nhé!",
    durationLabel: "5 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Sự tích Thánh Gióng · giọng kể",
      storagePath: "khu-du-quay/story.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc thiếu nhi",
      subtitle: "Rồng rắn lên mây · bản phối vui",
      storagePath: "khu-du-quay/music.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "khu-ve",
    eyebrow: "Góc vẽ · Khu vui chơi",
    art: "chu-teu",
    title: "Chú Tễu Và Hộp Màu",
    subtitle:
      "Chú Tễu tinh nghịch mời bé vừa tô màu vừa nghe chuyện. Bức tranh sẽ đẹp hơn khi có một câu chuyện đi cùng!",
    durationLabel: "7 phút",
    narratorLabel: "Giọng đọc thiếu nhi",
    primaryAction: {
      title: "Nghe truyện cổ tích",
      subtitle: "Chú Tễu và hộp màu nhiệm màu",
      storagePath: "khu-ve/story.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc nền nhẹ",
      subtitle: "Nhạc không lời cho bé tô màu",
      storagePath: "khu-ve/music.mp3",
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
    durationLabel: "20 phút",
    narratorLabel: "Không lời · thư giãn",
    primaryAction: {
      title: "Nghe nhạc thư giãn",
      subtitle: "Không lời · hòa tấu nhẹ nhàng",
      storagePath: "goc-nghi/story.mp3",
    },
    secondaryAction: {
      title: "Nghe nhạc ru dân ca",
      subtitle: "Ru con · giai điệu êm dịu",
      storagePath: "goc-nghi/music.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
  {
    slug: "cong-vao",
    eyebrow: "Cổng vào · Khu vui chơi",
    art: "cong-tam-quan",
    title: "Chào Mừng Đến Sân Chơi",
    subtitle:
      "Mỗi góc trong sân chơi đều có một mã QR riêng — quét mã dán trên hình vẽ để nghe truyện và nhạc dành cho bé.",
    durationLabel: "2 phút",
    narratorLabel: "Giọng dẫn phụ huynh",
    primaryAction: {
      title: "Nghe lời chào mừng",
      subtitle: "Giới thiệu sân chơi",
      storagePath: "cong-vao/story.mp3",
    },
    secondaryAction: {
      title: "Nghe hướng dẫn quét mã",
      subtitle: "Cách dùng QR trong sân chơi",
      storagePath: "cong-vao/music.mp3",
    },
    footerCredit: "Vó Ngựa · Góc kể chuyện dân gian",
  },
];

export function getZone(slug: string): Zone | undefined {
  return ZONES.find((zone) => zone.slug === slug);
}
