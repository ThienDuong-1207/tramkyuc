Trạm Ký Ức — một mã QR duy nhất cho sân chơi bệnh viện, dán lặp lại ở 5 vị trí
(trụ mosaic, đu quay, khu vẽ, góc nghỉ, cổng vào). Quét mã mở trang `/nghe`:
một danh sách truyện cổ tích và nhạc thiếu nhi để bé tự chọn, có thanh tua và
nút tua nhanh/lùi 10 giây. Xem [PRODUCT.md](./PRODUCT.md) và
[DESIGN.md](./DESIGN.md) để biết định hướng sản phẩm và hệ thống thiết kế.

## Chạy dự án

```bash
npm install
cp .env.local.example .env.local   # điền thông tin Supabase của bạn
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang admin — mã QR
duy nhất để in, cộng danh sách file audio cần có. Trang nghe thật nằm ở
`/nghe`.

## Cấu hình Supabase Storage (lưu file mp3)

1. Trong dashboard Supabase, vào **Storage** → tạo bucket tên `tramkyucmp3`,
   đặt **Public**.
2. Tải file mp3 lên **thẳng vào gốc bucket** (không cần tạo thư mục con).
   Supabase Storage **không chấp nhận tên file có dấu tiếng Việt** (báo lỗi
   "File name is invalid") — đặt tên file bằng chữ không dấu, không khoảng
   trắng (vd: `thach-sanh.mp3`) rồi khớp với `storagePath` tương ứng trong
   [`src/lib/tracks.ts`](./src/lib/tracks.ts). Thêm/đổi bài nào thì sửa danh
   sách `TRACKS` trong file đó.
3. Copy **Project URL** (Project Settings → Integrations → Data API) và
   **publishable key** (Project Settings → API Keys) vào `.env.local` (xem
   `.env.local.example`).

Cho đến khi file được tải lên, bài đó sẽ hiện "Chưa có file audio" thay vì
lỗi — không cần sửa code khi thêm nội dung, chỉ cần tải file lên đúng tên.

## Triển khai lên Vercel

Push repo lên GitHub rồi import vào Vercel, thêm 2 biến môi trường
`NEXT_PUBLIC_SUPABASE_URL` và `NEXT_PUBLIC_SUPABASE_ANON_KEY` trong project
settings (và tuỳ chọn `NEXT_PUBLIC_SITE_URL` để mã QR trên trang admin trỏ
đúng domain production).
