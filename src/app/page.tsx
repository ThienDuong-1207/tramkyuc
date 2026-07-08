import { headers } from "next/headers";
import Link from "next/link";
import QRCode from "qrcode";
import { ZONES } from "@/lib/zones";

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

  const rows = await Promise.all(
    ZONES.map(async (zone) => {
      const url = `${origin}/qr/${zone.slug}`;
      const qrSvg = await QRCode.toString(url, {
        type: "svg",
        margin: 1,
        width: 168,
        color: { dark: "#3A2A1A", light: "#FBF3DE" },
      });
      // Larger, higher-res PNG for printing — SVG display above is for on-screen preview only.
      const qrPngDataUrl = await QRCode.toDataURL(url, {
        type: "image/png",
        margin: 2,
        width: 1024,
        color: { dark: "#3A2A1A", light: "#FBF3DE" },
      });
      return { zone, url, qrSvg, qrPngDataUrl };
    })
  );

  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-2xl font-semibold text-ink">
            Mã QR — Sân Chơi Bệnh Viện
          </h1>
          <p className="mt-2 max-w-prose text-sm text-ink/70">
            Trang nội bộ để in mã QR cho từng khu vực. In thẻ, dán ngang tầm
            mắt trẻ (60–90cm) tại vị trí tương ứng. Mỗi mã dẫn thẳng đến trang
            nội dung của khu đó — không cần đăng nhập.
          </p>
        </header>

        <ul className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white/40">
          {rows.map(({ zone, url, qrSvg, qrPngDataUrl }) => (
            <li
              key={zone.slug}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
            >
              <div
                className="shrink-0 rounded-lg bg-white p-2 [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-ink">{zone.title}</p>
                <p className="mt-0.5 text-xs text-ink/60">{zone.eyebrow}</p>
                <p className="mt-2 break-all font-mono text-xs text-ink/70">
                  {url}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <a
                  href={qrPngDataUrl}
                  download={`qr-${zone.slug}.png`}
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
                  href={`/qr/${zone.slug}`}
                  target="_blank"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-ink/20 px-4 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                >
                  Mở trang →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-ink/50">
          File audio (truyện & nhạc) được lưu trong Supabase Storage, bucket{" "}
          <code className="rounded bg-ink/10 px-1 py-0.5">tramkyuc_audio</code>, theo
          đường dẫn <code className="rounded bg-ink/10 px-1 py-0.5">
            ten-khu/story.mp3
          </code>{" "}
          và{" "}
          <code className="rounded bg-ink/10 px-1 py-0.5">
            ten-khu/music.mp3
          </code>
          . Trang sẽ hiện &quot;Chưa có file audio&quot; cho đến khi file được
          tải lên.
        </p>
      </div>
    </div>
  );
}
