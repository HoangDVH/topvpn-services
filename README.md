# Top VPN Services 2026

Website so sánh và đánh giá VPN độc lập — dự án thiết kế homepage với design system cơ bản.

## Chạy dự án

```bash
npm install
npm run dev
```

---

## 1. Tư duy triển khai

### Chia layout thành sections / components như thế nào?

Trang được chia theo luồng đọc từ trên xuống, mỗi section có một mục tiêu UX riêng:

| Section | Component | Mục đích |
|---|---|---|
| Header | `Header` | Navigation + CTA luôn hiển thị khi scroll |
| Hero | `Hero` | Thu hút attention, nêu value proposition, CTA chính |
| Bảng so sánh | `VpnComparison` | **Trọng tâm conversion** — so sánh VPN và dẫn tới "Get Deal" |
| Phương pháp đánh giá | `Methodology` | Xây dựng trust — giải thích cách test độc lập |
| CTA cuối trang | `CtaBanner` | Chốt conversion cho người đã scroll hết |
| Footer | `Footer` | Legal links, affiliate disclosure |

Dữ liệu VPN (tên, giá, rating, features) tách riêng vào `src/data/vpnData.ts` để component chỉ lo render, dễ cập nhật nội dung mà không sửa UI.

Design tokens (màu, font, spacing, button, card) nằm trong `src/styles/design-system.css` — mọi component dùng chung biến CSS, tránh style lệch nhau.

### Xử lý responsive desktop → mobile như thế nào?

Hai breakpoint chính:

- **Desktop (≥768px):** Hiển thị bảng so sánh ngang (`VpnComparison` — table view) với đủ cột: rank, provider, score, Speed/Privacy/Streaming, price, CTA.
- **Mobile (<768px):** Ẩn hoàn toàn bảng ngang (tránh scroll ngang khó dùng). Thay bằng **stacked cards** — mỗi card gồm logo, score, 3 điểm mạnh kèm icon tick, nút CTA lớn ở đáy (thumb-friendly, min-height 52px).

Các section khác dùng CSS Grid/Flexbox với `flex-wrap` hoặc chuyển từ multi-column sang single-column:

- Hero: 1 cột trên mobile → 2 cột (content + stats) trên desktop
- Methodology: 1 → 2 → 4 cột theo breakpoint 640px / 1024px
- Header: ẩn nav links trên mobile, chỉ giữ logo + CTA

Nguyên tắc: **không ép bảng rộng vào màn hình nhỏ**, mà đổi pattern UI (table → cards) thay vì chỉ thu nhỏ font.

### Phần nào khó triển khai?

1. **Bảng so sánh conversion (desktop):** Cần cân bằng nhiều cột (logo, badge, score, criteria, price, CTA) mà vẫn đọc được. Giải pháp: header bảng nền navy, hàng featured có accent border trái, CTA cam tách biệt khỏi màu brand.
2. **Dual layout table/cards:** Hai markup riêng trong cùng component, toggle bằng `display: none/block` qua media query — đảm bảo mobile không render UX bảng bị vỡ, desktop không bị card layout thừa.
3. **Sticky header + backdrop blur:** Cần `position: sticky`, `z-index`, và `backdrop-filter` — test kỹ trên Safari/iOS vì hỗ trợ blur khác nhau.
4. **Visual hierarchy trên Hero gradient tối:** Text trắng, eyebrow teal nhạt, ghost button trong suốt — phải đủ contrast để đọc được mà không làm CTA chính bị lu mờ.

### Nếu dùng framework (React), tổ chức component thế nào?

Dự án dùng **React + Vite + TypeScript**, cấu trúc:

```
src/
├── App.tsx                 # Compose các section theo thứ tự trang
├── components/             # Mỗi section = 1 component + 1 file CSS
│   ├── Header.tsx / .css
│   ├── Hero.tsx / .css
│   ├── VpnComparison.tsx / .css
│   ├── Methodology.tsx / .css
│   ├── CtaBanner.tsx / .css
│   └── Footer.tsx / .css
├── data/
│   └── vpnData.ts          # Data layer — VPN list, stats, methodology
└── styles/
    └── design-system.css   # Shared tokens + .btn + .card utilities
```

**Nguyên tắc tổ chức:**

- **1 section = 1 component** — dễ review, dễ bảo trì từng phần trang.
- **Colocation CSS** — mỗi component import CSS riêng, style scoped theo class prefix (`.hero__`, `.vpn-compare__`).
- **Shared primitives** trong design system (`.btn`, `.card`, `.container`, `.section`) — không duplicate button styles.
- **Sub-components nhỏ** (`CheckIcon`, `VpnLogo`) giữ inline trong file lớn vì chỉ dùng ở `VpnComparison` — chưa tách file để tránh over-engineering.

Với scale lớn hơn, có thể tách thêm: `ui/Button.tsx`, `ui/Card.tsx`, `ui/Badge.tsx` và trang chi tiết VPN (`pages/VpnDetail.tsx`).

### Đánh giá tính khả thi triển khai

Thiết kế **khả thi hoàn toàn** với HTML/CSS/React thuần, không cần thư viện UI nặng. Toàn bộ layout dựa trên Flexbox, Grid, và media queries — stack phổ biến, dễ maintain. Phần phức tạp nhất (comparison table responsive) đã có pattern rõ ràng: dual markup + CSS toggle. Thời gian triển khai ước tính: design system ~2h, homepage sections ~4–6h, responsive polish ~2h.

---

## 2. Giải thích thiết kế

### Tại sao chọn bảng màu này?

| Màu | Mã | Vai trò | Lý do |
|---|---|---|---|
| Navy | `#0f172a` | Nền Hero, header bảng, footer | Màu tối gợi **bảo mật và chuyên nghiệp** — phù hợp chủ đề VPN/privacy |
| Teal | `#0d9488` | Accent brand, link hover, featured border | Xanh tech hiện đại, không gắt như đỏ — tạo cảm giác **đáng tin** hơn màu neon |
| Slate | `#475569`–`#f8fafc` | Body text, border, background | Trung tính, tạo hierarchy rõ mà không tranh attention với CTA |
| Amber | `#f59e0b` | Rating score, badge "Editor's Choice" | Nổi bật trên nền sáng/tối, gợi **điểm số cao / lựa chọn hàng đầu** |
| Orange | `#f97316` | CTA "Get Deal" | Tương phản cao với navy — **warm color trên cool background** kích thích click (pattern phổ biến ở site review/affiliate như Wirecutter, TechRadar) |

Không dùng đỏ làm CTA vì dễ gợi cảnh báo/lỗi. Không dùng tím làm chủ đạo vì quá gần aesthetic crypto/gaming, lệch tone "trustworthy review site".

### Tại sao chọn typography này?

- **Plus Jakarta Sans (headings):** Font geometric, weight 700–800 đọc tốt ở cỡ lớn (hero title 48px). Phổ biến trên SaaS landing page (Linear, Vercel ecosystem) — tạo cảm giác sản phẩm thật, không phải blog cá nhân.
- **Inter (body):** Thiết kế cho màn hình, x-height cao, dễ đọc paragraph dài ở 16px. Pairing Jakarta + Inter là combo phổ biến, contrast rõ giữa heading (confident) và body (neutral).

Scale type dùng rem (`--text-xs` → `--text-5xl`) để respect user font-size settings và scale đồng đều trên breakpoint.


---

## Cấu trúc file chính

| File | Mô tả |
|---|---|
| `src/styles/design-system.css` | Design tokens + button + card components |
| `src/data/vpnData.ts` | Dữ liệu 5 VPN, trust stats, methodology |
| `src/components/VpnComparison.tsx` | Bảng desktop + stacked cards mobile |
| `src/App.tsx` | Ghép các section thành homepage |
