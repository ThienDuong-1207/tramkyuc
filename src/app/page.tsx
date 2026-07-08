import { headers } from "next/headers";
import Link from "next/link";
import QRCode from "qrcode";
import { TRACKS } from "@/lib/tracks";

async function getSiteOrigin() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const proto = host.startsWith("localhost") ? "http" : "https";
  return `${proto}://${host}`;
}

export default async function AdminPage() {
  const origin = await getSiteOrigin();
  const url = `${origin}/nghe`;

  const qrSvg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    width: 240,
    color: { dark: "#3A2A1A", light: "#FBF3DE" },
  });
  // Larger, higher-res PNG for printing — SVG display above is for on-screen preview only.
  const qrPngDataUrl = await QRCode.toDataURL(url, {
    type: "image/png",
    margin: 2,
    width: 1024,
    color: { dark: "#3A2A1A", light: "#FBF3DE" },
  });

  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-ink">
            Mã QR — Sân Chơi Bệnh Viện
          </h1>
          <p className="mt-2 max-w-prose text-sm text-ink/70">
            Chỉ dùng <strong>một mã QR duy nhất</strong> cho toàn bộ sân chơi —
            in nhiều thẻ giống nhau và dán ở cả 5 vị trí (trụ mosaic, đu quay,
            khu vẽ, góc nghỉ, cổng vào), ngang tầm mắt trẻ (60–90cm). Quét mã
            sẽ ra một danh sách để bé tự chọn truyện hoặc nhạc muốn nghe —
            không cần đăng nhập.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 rounded-2xl border border-ink/10 bg-white/40 p-8">
          <div
            className="shrink-0 rounded-lg bg-white p-3 [&_svg]:block"
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <p className="break-all text-center font-mono text-xs text-ink/70">
            {url}
          </p>
          <div className="flex gap-2">
            <a
              href={qrPngDataUrl}
              download="qr-nghe-truyen-va-nhac.png"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4.5 18.5v1a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tải ảnh QR
            </a>
            <Link
              href="/nghe"
              target="_blank"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-ink/20 px-4 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
            >
              Mở trang →
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-ink/10 bg-white/40 p-5">
          <p className="mb-3 text-sm font-medium text-ink">
            Danh sách {TRACKS.length} bài trong trang nghe
          </p>
          <ul className="divide-y divide-ink/10">
            {TRACKS.map((track) => (
              <li
                key={track.storagePath}
                className="flex items-center justify-between gap-3 py-2 text-sm"
              >
                <div className="min-w-0">
                  <p className="truncate text-ink">{track.title}</p>
                  <p className="truncate text-xs text-ink/50">
                    {track.subtitle}
                  </p>
                </div>
                <code className="shrink-0 rounded bg-ink/10 px-1.5 py-0.5 text-xs text-ink/70">
                  {track.storagePath}
                </code>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-ink/50">
          File audio (truyện & nhạc) được lưu trong Supabase Storage, bucket{" "}
          <code className="rounded bg-ink/10 px-1 py-0.5">tramkyucmp3</code>{" "}
          (tải thẳng vào gốc bucket, giữ nguyên tên file). Bài nào chưa có file
          sẽ hiện &quot;Chưa có file audio&quot;.
        </p>
      </div>
    </div>
  );
}
