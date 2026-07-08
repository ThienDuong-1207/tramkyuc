import type { Metadata } from "next";
import { TrackList } from "@/components/TrackList";

export const metadata: Metadata = {
  title: "Nghe Truyện & Nhạc — Sân Chơi Bệnh Viện",
  description: "Chọn một câu chuyện hoặc bản nhạc thiếu nhi để nghe",
};

export default function NghePage() {
  return <TrackList />;
}
