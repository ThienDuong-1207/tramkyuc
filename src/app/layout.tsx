import type { Metadata } from "next";
import { Be_Vietnam_Pro, Baloo_2 } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const baloo2 = Baloo_2({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trạm Ký Ức — Sân Chơi Bệnh Viện",
  description: "Quét mã QR để nghe truyện cổ tích và nhạc thiếu nhi tại sân chơi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${baloo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
