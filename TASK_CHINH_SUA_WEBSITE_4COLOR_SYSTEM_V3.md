# 📋 TASK V3: Chỉnh sửa Website 4Color System™ (Lần 3)

> **Dự án**: 4Color System Landing Page
> **Ngày tạo**: 21/03/2026
> **Nguồn yêu cầu**: Email khách hàng (Ticket-trading-view3: mail + file đính kèm)
> **Codebase**: `d:\TradingView\4color-system\src`
> **Ticket folder**: `d:\TradingView\4color-system\Ticket-trading-view3`

---

## 📑 MỤC LỤC

- [📋 TASK V3: Chỉnh sửa Website 4Color System™ (Lần 3)](#-task-v3-chỉnh-sửa-website-4color-system-lần-3)
  - [📑 MỤC LỤC](#-mục-lục)
  - [1. Tổng quan yêu cầu lần 3](#1-tổng-quan-yêu-cầu-lần-3)
    - [Từ tin nhắn khách (paraphrase):](#từ-tin-nhắn-khách-paraphrase)
    - [Từ Mail (textfrommail.txt):](#từ-mail-textfrommailtxt)
    - [File đính kèm từ mail (filefrommail/):](#file-đính-kèm-từ-mail-filefrommail)
    - [Bảng tổng hợp tất cả yêu cầu:](#bảng-tổng-hợp-tất-cả-yêu-cầu)
  - [2. TASK 1: Xóa Live Bitcoin Chart (ChartShowcase)](#2-task-1-xóa-live-bitcoin-chart-chartshowcase)
    - [Section hiện tại:](#section-hiện-tại)
    - [Hành động cần làm:](#hành-động-cần-làm)
    - [Lưu ý:](#lưu-ý)
  - [3. TASK 2: Xóa section "Watch the Market Live"](#3-task-2-xóa-section-watch-the-market-live)
    - [Section hiện tại:](#section-hiện-tại-1)
    - [Hành động cần làm:](#hành-động-cần-làm-1)
  - [4. TASK 3: Xóa module "Stress Test \& Risk Management" trong Education](#4-task-3-xóa-module-stress-test--risk-management-trong-education)
    - [Module hiện tại (trong src/components/Education/Education.jsx):](#module-hiện-tại-trong-srccomponentseducationeducationjsx)
    - [Hành động cần làm:](#hành-động-cần-làm-2)
  - [5. TASK 4: Đổi tên "Market Behavior Report HIMS" → Bỏ HIMS, thay Education Only](#5-task-4-đổi-tên-market-behavior-report-hims--bỏ-hims-thay-education-only)
    - [Entry hiện tại (trong src/components/Education/Education.jsx):](#entry-hiện-tại-trong-srccomponentseducationeducationjsx)
    - [Hành động cần làm:](#hành-động-cần-làm-3)
  - [6. TASK 5: Thêm "A Visual Framework for Reading Market Behavior" — Chưa có link](#6-task-5-thêm-a-visual-framework-for-reading-market-behavior--chưa-có-link)
    - [Hành động cần làm:](#hành-động-cần-làm-4)
  - [7. TASK 6: Cập nhật Location → Toronto, Canada](#7-task-6-cập-nhật-location--toronto-canada)
    - [Entry hiện tại (trong src/components/Contact/Contact.jsx):](#entry-hiện-tại-trong-srccomponentscontactcontactjsx)
    - [Hành động cần làm:](#hành-động-cần-làm-5)
  - [8. TASK 7: Thêm "How These Charts Work Across ETFs" PDF vào Education](#8-task-7-thêm-how-these-charts-work-across-etfs-pdf-vào-education)
    - [File nguồn:](#file-nguồn)
    - [Hành động cần làm:](#hành-động-cần-làm-6)
  - [9. TASK 8: Thêm 3 file PDF Access Forms vào Education/Resources](#9-task-8-thêm-3-file-pdf-access-forms-vào-educationresources)
    - [Các file nguồn:](#các-file-nguồn)
    - [Hành động cần làm:](#hành-động-cần-làm-7)
  - [10. Tổng hợp file từ khách (Ticket 3)](#10-tổng-hợp-file-từ-khách-ticket-3)
    - [File đính kèm từ mail:](#file-đính-kèm-từ-mail)
    - [File cần khách gửi thêm:](#file-cần-khách-gửi-thêm)
  - [11. Checklist cuối](#11-checklist-cuối)
    - [Các task CÓ THỂ làm ngay (không cần thêm thông tin):](#các-task-có-thể-làm-ngay-không-cần-thêm-thông-tin)
    - [Các task cần CHỜ hoặc XÁC NHẬN thêm:](#các-task-cần-chờ-hoặc-xác-nhận-thêm)
    - [Ghi chú kỹ thuật:](#ghi-chú-kỹ-thuật)

---

## 1. Tổng quan yêu cầu lần 3

### Từ tin nhắn khách (paraphrase):

> *"Yeah, nhìn chung vậy là tốt rồi. Sao e ko xóa cái Bitcoin chart và Watch the Market Live đi? Stress Test & Risk Management, Delete. Market Behavior Report — Bỏ HIMS thay thế Education only. A Visual Framework for Reading Market Behavior, chưa có link. Location Toronto, Canada."*

### Từ Mail ([textfrommail.txt](Ticket-trading-view3/mail/textfrommail.txt)):

> *"Hình như trang còn thiếu trang How these charts work.... củng quan trọng, e cho dể thấy chút."*

**Ý nghĩa**: Trang website đang thiếu phần "How These Charts Work" — khách thấy quan trọng, yêu cầu thêm vào và làm nổi bật hơn.

### File đính kèm từ mail ([filefrommail/](Ticket-trading-view3/filefrommail/)):

| File | Mô tả |
|---|---|
| `How These Charts Work Across ETFs.pdf` | Tài liệu chính cần thêm vào Education section |
| `ELITE — ACCESS RESERVATION FORM.pdf` | Form đăng ký truy cập tier Elite |
| `HUBS — RESTRICTED ACCESS FORM.pdf` | Form đăng ký truy cập tier Hubs |
| `PRO ACCESS.pdf` | Form đăng ký truy cập tier Pro |

---

### Bảng tổng hợp tất cả yêu cầu:

| # | Nội dung yêu cầu | Nguồn | Hành động | Status |
|---|---|---|---|---|
| 1 | Xóa live Bitcoin Chart (ChartShowcase section) | Tin nhắn | ❌ DELETE toàn bộ section | ⬜ Chưa làm |
| 2 | Xóa section "Watch the Market Live" | Tin nhắn | ❌ DELETE toàn bộ section | ⬜ Chưa làm |
| 3 | Xóa module "Stress Test & Risk Management" | Tin nhắn | ❌ DELETE khỏi Education modules | ⬜ Chưa làm |
| 4 | "Market Behavior Report HIMS" → bỏ HIMS, giữ Education only | Tin nhắn | ✏️ Đổi tên trong pdfResources | ⬜ Chưa làm |
| 5 | "A Visual Framework for Reading Market Behavior" chưa có link | Tin nhắn | ⏳ Giữ placeholder, chờ file/link | ⬜ Chờ khách |
| 6 | Location → Toronto, Canada (từ Singapore) | Tin nhắn | ✏️ Sửa Contact component | ⬜ Chưa làm |
| 7 | Thêm "How These Charts Work Across ETFs.pdf" vào Education | Mail | ➕ Thêm PDF vào public/docs, thêm vào danh sách | ⬜ Chưa làm |
| 8 | Thêm 3 PDF Access Forms (Elite, Pro, Hubs) | Mail | ➕ Copy PDF vào public/docs, thêm vào resources | ⬜ Chưa làm |

---

## 2. TASK 1: Xóa Live Bitcoin Chart (ChartShowcase)

> [!IMPORTANT]
> Khách nói: *"Sao e ko xóa cái Bitcoin chart đi?"* — Đây là section hiển thị live chart realtime từ Binance API (BTC/USDT). Khách đã yêu cầu xóa từ trước nhưng chưa được thực hiện.

### Section hiện tại:

- File: [src/components/ChartShowcase/ChartShowcase.jsx](src/components/ChartShowcase/ChartShowcase.jsx)
- File: [src/components/ChartShowcase/ChartShowcase.module.scss](src/components/ChartShowcase/ChartShowcase.module.scss)
- Component hiển thị live Bitcoin candle chart lấy dữ liệu từ Binance WebSocket API
- Đây là section riêng biệt trên trang (id/section ChartShowcase)

### Hành động cần làm:

- [ ] **Xóa import `ChartShowcase`** khỏi [src/App.jsx](src/App.jsx)
- [ ] **Xóa thẻ `<ChartShowcase />`** khỏi [src/App.jsx](src/App.jsx)
- [ ] (Tùy chọn) Xóa hoặc giữ lại file component để tham khảo sau này

### Lưu ý:

> Đây là component nặng (Binance WebSocket, SVG chart, nhiều animation). Xóa sẽ cải thiện performance đáng kể.

---

## 3. TASK 2: Xóa section "Watch the Market Live"

> [!IMPORTANT]
> Khách nói: *"...và Watch the Market Live đi?"* — Section hiện tại embed YouTube video livestream với fake stats counter.

### Section hiện tại:

- File: [src/components/LiveStream/LiveStream.jsx](src/components/LiveStream/LiveStream.jsx)
- File: [src/components/LiveStream/LiveStream.module.scss](src/components/LiveStream/LiveStream.module.scss)
- Embed video YouTube ID: `9M93_6S9TaQ`
- Có fake stats: "Live Viewers: 12,847", "Signals Today: 47", "Uptime: 99.9%"

### Hành động cần làm:

- [ ] **Xóa import `LiveStream`** khỏi [src/App.jsx](src/App.jsx)
- [ ] **Xóa thẻ `<LiveStream />`** khỏi [src/App.jsx](src/App.jsx)
- [ ] Kiểm tra Navbar links — nếu có anchor link `#livestream` hoặc tương tự, cần xóa khỏi [src/components/Navbar/Navbar.jsx](src/components/Navbar/Navbar.jsx)

---

## 4. TASK 3: Xóa module "Stress Test & Risk Management" trong Education

> [!IMPORTANT]
> Khách liệt kê: *"Stress Test & Risk Management, Delete"* — Đây là module thứ 4 trong mảng `modules` của Education component.

### Module hiện tại (trong [src/components/Education/Education.jsx](src/components/Education/Education.jsx)):

```js
{
  title: 'Stress Test & Risk Management',
  description: 'Apply the CFE Sequence in real conditions. Learn how to validate setups, identify traps vs takeovers, and protect your capital.',
  level: 'All Levels',
  imgUrl: '/images/hero-cover.jpg',
  tag: 'Essential',
  tagColor: '#FF9F1C',
},
```

### Hành động cần làm:

- [ ] **Xóa object module** `'Stress Test & Risk Management'` khỏi mảng `modules[]` trong Education.jsx
- [ ] Kiểm tra lại layout card grid sau khi xóa (từ 6 module → 5 module)

---

## 5. TASK 4: Đổi tên "Market Behavior Report HIMS" → Bỏ HIMS, thay Education Only

> [!IMPORTANT]
> Khách nói: *"Market Behavior Report — Bỏ HIMS thay thế Education only"*
> Ý nghĩa: Trong danh sách PDF resources của Education section, entry có tên `'Market Behavior Report HIMS'` cần được:
> 1. Xóa chữ "HIMS" khỏi tên hiển thị
> 2. Gán nhãn/tag "Education Only" (thay vì implied HUBS-restricted)

### Entry hiện tại (trong [src/components/Education/Education.jsx](src/components/Education/Education.jsx)):

```js
{ name: 'Market Behavior Report HIMS', file: '/docs/Market Behavior Report HIMS.pdf', color: '#FF6B6B' },
```

### Hành động cần làm:

- [ ] Đổi `name` từ `'Market Behavior Report HIMS'` → `'Market Behavior Report'`
- [ ] Giữ nguyên `file` path (hoặc đổi tên file cho đồng nhất nếu cần)
- [ ] Nếu UI có hiển thị tag/badge tier cho từng PDF, thêm tag `'Education Only'` hoặc không cần tag HUBS

---

## 6. TASK 5: Thêm "A Visual Framework for Reading Market Behavior" — Chưa có link

> [!NOTE]
> Khách đề cập: *"A Visual Framework for Reading Market Behavior, chưa có link."*
> Đây là một tài liệu/PDF mới khách muốn thêm vào Education, nhưng **chưa có file** được gửi kèm → cần **giữ placeholder** hoặc **chờ khách gửi file**.

### Hành động cần làm:

- [ ] **Chờ khách gửi file PDF** `A Visual Framework for Reading Market Behavior.pdf`
- [ ] Khi có file, copy vào `public/docs/`
- [ ] Thêm entry vào mảng `pdfResources[]` trong Education.jsx:
  ```js
  { name: 'A Visual Framework for Reading Market Behavior', file: '/docs/A Visual Framework for Reading Market Behavior.pdf', color: '#7B2CBF' },
  ```
- [ ] (Tùy chọn) Có thể thêm tạm với link disabled/placeholder để khách thấy tên xuất hiện trước

> [!WARNING]
> ⏳ **BLOCKED** — Chờ khách cung cấp file. Không thể hoàn thành task này cho đến khi có file.

---

## 7. TASK 6: Cập nhật Location → Toronto, Canada

> [!IMPORTANT]
> Khách nói: *"Location Toronto, Canada."* → Đổi địa chỉ từ Singapore sang Toronto, Canada trong phần Contact.

### Entry hiện tại (trong [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx)):

```js
{
  icon: MapPin,
  label: 'Location',
  value: 'Singapore',
  href: null,
  color: '#00F5A0',
},
```

### Hành động cần làm:

- [ ] Đổi `value` từ `'Singapore'` → `'Toronto, Canada'`
- [ ] Cập nhật tương ứng trong tất cả file i18n nếu giá trị này được dịch (kiểm tra các file trong `src/i18n/locales/`)

---

## 8. TASK 7: Thêm "How These Charts Work Across ETFs" PDF vào Education

> [!IMPORTANT]
> Từ mail: *"Hình như trang còn thiếu trang How these charts work.... cũng quan trọng, e cho dể thấy chút."*
> Khách đã gửi file `How These Charts Work Across ETFs.pdf` trong mail — cần thêm vào Education section và làm nổi bật.

### File nguồn:

- [Ticket-trading-view3/filefrommail/How These Charts Work Across ETFs.pdf](Ticket-trading-view3/filefrommail/How%20These%20Charts%20Work%20Across%20ETFs.pdf)

### Hành động cần làm:

- [ ] **Copy file** `How These Charts Work Across ETFs.pdf` vào thư mục `public/docs/`
- [ ] **Thêm entry** vào mảng `pdfResources[]` trong [src/components/Education/Education.jsx](src/components/Education/Education.jsx):
  ```js
  { name: 'How These Charts Work Across ETFs', file: '/docs/How These Charts Work Across ETFs.pdf', color: '#3A86FF' },
  ```
- [ ] **Vị trí**: Nên đặt gần đầu danh sách hoặc featured/pinned để dễ thấy hơn (khách nhấn mạnh "cho dể thấy chút")
- [ ] Cân nhắc thêm badge/highlight đặc biệt (ví dụ: icon ⭐ hoặc "Featured" tag) để làm nổi bật entry này

---

## 9. TASK 8: Thêm 3 file PDF Access Forms vào Education/Resources

> [!NOTE]
> Khách gửi 3 file access form dành cho các tier Pro, Elite, Hubs. Cần thêm vào đúng section trong Education (phần tiers hoặc phần CTA của từng tier).

### Các file nguồn:

| File | Tier | Path nguồn |
|---|---|---|
| `PRO ACCESS.pdf` | Pro | [Ticket-trading-view3/filefrommail/PRO ACCESS.pdf](Ticket-trading-view3/filefrommail/PRO%20ACCESS.pdf) |
| `ELITE — ACCESS RESERVATION FORM.pdf` | Elite | [Ticket-trading-view3/filefrommail/ELITE — ACCESS RESERVATION FORM.pdf](Ticket-trading-view3/filefrommail/ELITE%20%E2%80%94%20ACCESS%20RESERVATION%20FORM.pdf) |
| `HUBS — RESTRICTED ACCESS FORM.pdf` | Hubs | [Ticket-trading-view3/filefrommail/HUBS — RESTRICTED ACCESS FORM.pdf](Ticket-trading-view3/filefrommail/HUBS%20%E2%80%94%20RESTRICTED%20ACCESS%20FORM.pdf) |

### Hành động cần làm:

- [ ] **Copy cả 3 file** vào thư mục `public/docs/`
- [ ] **Tùy chọn A** — Thêm vào danh sách `pdfResources[]` trong Education.jsx:
  ```js
  { name: 'Pro Access Form', file: '/docs/PRO ACCESS.pdf', color: '#3A86FF' },
  { name: 'Elite Access Reservation Form', file: '/docs/ELITE — ACCESS RESERVATION FORM.pdf', color: '#FF9F1C' },
  { name: 'Hubs Restricted Access Form', file: '/docs/HUBS — RESTRICTED ACCESS FORM.pdf', color: '#7B2CBF' },
  ```
- [ ] **Tùy chọn B** — Thêm link download trực tiếp vào CTA button của từng tier card (Pro, Elite, Hubs) trong `tiers[]` array của Education.jsx
- [ ] ⚠️ Hỏi khách xác nhận muốn hiển thị ở dạng nào (danh sách PDF chung hay gắn vào từng tier card)

---

## 10. Tổng hợp file từ khách (Ticket 3)

### File đính kèm từ mail:

| File | Kích thước | Mục đích | Đã xử lý |
|---|---|---|---|
| `How These Charts Work Across ETFs.pdf` | — | PDF giáo dục chính, thêm vào Education | ⬜ Chưa |
| `ELITE — ACCESS RESERVATION FORM.pdf` | — | Form đăng ký Elite tier | ⬜ Chưa |
| `HUBS — RESTRICTED ACCESS FORM.pdf` | — | Form đăng ký Hubs tier | ⬜ Chưa |
| `PRO ACCESS.pdf` | — | Form đăng ký Pro tier | ⬜ Chưa |

### File cần khách gửi thêm:

| File | Lý do cần |
|---|---|
| `A Visual Framework for Reading Market Behavior.pdf` | Khách đề cập nhưng chưa có link/file |

---

## 11. Checklist cuối

### Các task CÓ THỂ làm ngay (không cần thêm thông tin):

- [ ] **TASK 1**: Xóa `<ChartShowcase />` khỏi App.jsx
- [ ] **TASK 2**: Xóa `<LiveStream />` khỏi App.jsx
- [ ] **TASK 3**: Xóa module `'Stress Test & Risk Management'` khỏi Education.jsx
- [ ] **TASK 4**: Đổi tên `'Market Behavior Report HIMS'` → `'Market Behavior Report'` trong Education.jsx
- [ ] **TASK 6**: Đổi location từ `'Singapore'` → `'Toronto, Canada'` trong Contact.jsx
- [ ] **TASK 7**: Copy `How These Charts Work Across ETFs.pdf` vào `public/docs/`, thêm vào `pdfResources[]`
- [ ] **TASK 8**: Copy 3 PDF Access Forms vào `public/docs/`, quyết định cách hiển thị

### Các task cần CHỜ hoặc XÁC NHẬN thêm:

- [ ] **TASK 5**: Chờ khách gửi file `A Visual Framework for Reading Market Behavior.pdf` ⏳
- [ ] **TASK 8**: Xác nhận với khách muốn hiển thị Access Forms ở dạng nào (PDF list chung hay gắn vào tier card)

---

### Ghi chú kỹ thuật:

| Component bị ảnh hưởng | File | Thay đổi |
|---|---|---|
| `App.jsx` | [src/App.jsx](src/App.jsx) | Xóa import + thẻ `<ChartShowcase />` và `<LiveStream />` |
| `Education.jsx` | [src/components/Education/Education.jsx](src/components/Education/Education.jsx) | Xóa module 'Stress Test & Risk Management', đổi tên Market Behavior Report, thêm PDF mới |
| `Contact.jsx` | [src/components/Contact/Contact.jsx](src/components/Contact/Contact.jsx) | Đổi location Singapore → Toronto, Canada |
| `public/docs/` | — | Copy 4 file PDF từ `Ticket-trading-view3/filefrommail/` |
| i18n locales | [src/i18n/locales/](src/i18n/locales/) | Kiểm tra và cập nhật location nếu cần |
