Trạm Ký Ức — mã QR cho sân chơi bệnh viện. Mỗi khu vực (trụ mosaic, đu quay,
khu vẽ, góc nghỉ, cổng vào) có một trang riêng phát truyện cổ tích và nhạc
thiếu nhi khi quét mã. Xem [PRODUCT.md](./PRODUCT.md) và
[DESIGN.md](./DESIGN.md) để biết định hướng sản phẩm và hệ thống thiết kế.

## Chạy dự án

```bash
npm install
cp .env.local.example .env.local   # điền thông tin Supabase của bạn
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang admin liệt kê
mã QR của 5 khu vực. Mỗi mã dẫn tới `/qr/<ten-khu>`.

## Cấu hình Supabase Storage (lưu file mp3)

1. Trong dashboard Supabase, vào **Storage** → tạo bucket tên `audio`, đặt
   **Public**.
2. Tải file mp3 lên theo đúng đường dẫn quy ước trong
   [`src/lib/zones.ts`](./src/lib/zones.ts) — mỗi khu có 2 file:
   `<ten-khu>/story.mp3` (truyện) và `<ten-khu>/music.mp3` (nhạc). Ví dụ:
   `tru-mosaic/story.mp3`, `tru-mosaic/music.mp3`.
3. Copy **Project URL** và **anon public key** (Project Settings → API) vào
   `.env.local` (xem `.env.local.example`).

Cho đến khi file được tải lên, trang sẽ hiện "Chưa có file audio" thay vì
lỗi — không cần sửa code khi thêm nội dung, chỉ cần tải file lên đúng
đường dẫn.

## Triển khai lên Vercel

Push repo lên GitHub rồi import vào Vercel, thêm 2 biến môi trường
`NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` trong project
settings (và tuỳ chọn `NEXT_PUBLIC_SITE_URL` để mã QR trên trang admin trỏ
đúng domain production).
