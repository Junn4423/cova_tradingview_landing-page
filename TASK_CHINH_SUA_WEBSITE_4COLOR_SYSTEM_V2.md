# 📋 TASK V2: Chỉnh sửa Website 4Color System™ (Lần 2)

> **Dự án**: 4Color System Landing Page
> **Ngày tạo**: 21/03/2026
> **Nguồn yêu cầu**: Email khách hàng (Ticket-trading-view2: mail1, mail2, mail3)
> **Codebase**: `f:\STUDY\trading-view\src`
> **Ticket folder**: `f:\STUDY\trading-view\Ticket-trading-view2`

---

## 📑 MỤC LỤC

1. [Tổng quan yêu cầu lần 2](#1-tổng-quan-yêu-cầu-lần-2)
2. [TASK 1: Thêm ngôn ngữ Tiếng Việt](#2-task-1-thêm-ngôn-ngữ-tiếng-việt)
3. [TASK 2: Thêm Tooltip / Tip Windows nhỏ](#3-task-2-thêm-tooltip--tip-windows-nhỏ)
4. [TASK 3: Sửa "See the Color in Action" — Cần video clip](#4-task-3-sửa-see-the-color-in-action--cần-video-clip)
5. [TASK 4: Bỏ Interactive TradingView Chart](#5-task-4-bỏ-interactive-tradingview-chart)
6. [TASK 5: Sửa CFE Sequence — Dùng Cheat Sheet mới](#6-task-5-sửa-cfe-sequence--dùng-cheat-sheet-mới)
7. [TASK 6: Sửa "Watch Market Live" — Embed video demo Pro/Elite](#7-task-6-sửa-watch-market-live--embed-video-demo-proelite)
8. [TASK 7: Sửa "Understand Each Tool" — Thiếu Hubs](#8-task-7-sửa-understand-each-tool--thiếu-hubs)
9. [TASK 8: Bỏ "Trusted by 50,000"](#9-task-8-bỏ-trusted-by-50000)
10. [TASK 9: Sửa Product Suite — Bỏ giá, sửa Pro & Elite mô tả](#10-task-9-sửa-product-suite--bỏ-giá-sửa-pro--elite-mô-tả)
11. [TASK 10: Sửa Hero Page Headline — CFE formula mới](#11-task-10-sửa-hero-page-headline--cfe-formula-mới)
12. [TASK 11: Embed 4 video YouTube (BITCOIN, FX, Metal, Stock Hubs)](#12-task-11-embed-4-video-youtube)
13. [TASK 12: Thêm trang "4-Color Liquidity Sequence Cheat Sheet" + Tip trên Hero](#13-task-12-thêm-cheat-sheet-page--tip-trên-hero)
14. [TASK 13: Update Logo mới (CFE Logo)](#14-task-13-update-logo-mới)
15. [TASK 14: Thêm ảnh "Why Upgrade / Doji" làm hero page content](#15-task-14-thêm-ảnh-why-upgrade--doji)
16. [TASK 15: Cập nhật Email liên hệ](#16-task-15-cập-nhật-email-liên-hệ)
17. [TASK 16: Cải thiện view trên màn hình lớn](#17-task-16-cải-thiện-view-trên-màn-hình-lớn)
18. [TASK 17: Thêm tài liệu PDF vào Education/Resources](#18-task-17-thêm-tài-liệu-pdf-vào-educationresources)
19. [Tổng hợp file ảnh/tài liệu từ khách (Ticket 2)](#19-tổng-hợp-file-ảnhtài-liệu-từ-khách)
20. [Checklist cuối](#20-checklist-cuối)

---

## 1. Tổng quan yêu cầu lần 2

### Từ Mail 1 ([textfrommail.txt](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/textfrommail.txt)):

Khách review website hiện tại và ghi chú từng section:

| Section hiện tại | Đánh giá của khách | Hành động |
|---|---|---|
| Tip windows nhỏ | "Good idea" ✅ | Giữ, phát triển thêm |
| See the Color in Action | **"Cần a video clip?"** | Thêm video clip |
| Interactive TradingView Chart | **"Ko cần tới và ko nên đăng bài như vậy, loại 2 color Red/Green ko phải type của a"** | ❌ **BỎ** |
| 4-Color Liquidity Candles | "Good" ✅ | Giữ |
| Simple Rules for Beginners | "Good" ✅ | Giữ |
| Chart Narrative – Real Session Timeline | "Good" ✅ | Giữ |
| CFE Sequence | **Gởi file "4-Color Liquidity Sequence Cheat Sheet"** | Thay nội dung theo cheat sheet |
| The Key Structure Rule | "Good" ✅ | Giữ |
| Watch Market Live | **"Để a gởi short video của Elite/Pro coi demo"** | Chờ video, hoặc dùng YouTube links |
| Learn To Trade at Your Own Pace | "Good" ✅ | Giữ |
| Understand Each Tool | **"Thiếu Hubs"** | Thêm Hubs vào đây |
| Trusted by 50,000 | **"Bỏ, ko cần tới"** | ❌ **BỎ** |
| Product Suite (Lite) | "Good" ✅ | Giữ |
| Product Suite (Pro) | **Bỏ "Confirm if pressure...", thay vào nội dung mới** | Sửa mô tả |
| Product Suite (Elite) | **"FVG Execution Logic → thay thành FVG Lifecycle Logic"** | Sửa tên |
| Product Suite (Hubs) | "Good" ✅ | Giữ |
| Giá tiền | **"Bỏ giá tiền hết"** | ❌ Xóa tất cả giá |
| Ngôn ngữ | **"Thêm Tiếng Việt"** | Thêm VN vào language dropdown |
| Email | **4colorsystem@gmail.com** | Cập nhật |
| Cheat Sheet | **"Em làm thêm lên hero page trong window nhỏ, cho tips nóng, có lý đó"** | Thêm tooltip trên hero |
| View trên màn hình lớn | **"Cái view trên màn hình lớn hơn nữa?"** | Cải thiện responsive cho large screens |

**Goal của khách**: *"Website chủ yếu là cho ai cũng thấy dễ, tự học rồi lấy Lite về xài, mấy cái kia từ từ tính sau."*

### Từ Mail 2 ([textfrommail.txt](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail2/textfrommail.txt)):

- **Hero Page headline mới** — CFE formula:
  ```
  Context-First Execution (CFE) analyzes market forces in real time by combining:
  Order Flow + AD + 4-Color Candle Logic + FVG → Real-Time Market Context
  Enhanced with AI-assisted interpretation for faster insight into
  liquidity, imbalances, and execution zones.
  ```
- **Typical pattern** (để hiển thị trên website):
  ```
  🟡 → 🟢 → 🔵 → 🔴 → TREND
  or
  🔵 → 🔴 → 🟡 → 🟢 → TREND
  That is basically liquidity loading before expansion.
  ```
- 4 URL video YouTube để embed (xem bên dưới)
- 2 file PDF tài liệu bổ sung
- 1 ảnh AD Rule

### Từ Mail 3 ([textfrommail.txt](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail3/textfrommail.txt)):

- **Ảnh "Doji"** (Why You Keep Losing?) → khách nói: *"có bài này đủ sức thuyết phục người ta upgrade lên 4Color candles, e cho nó làm hero page?"*
- **Update Logo** → Logo mới (CFE circular logo)
- **File "Why Upgrade.pdf"** → tài liệu bổ sung

---

## 2. TASK 1: Thêm ngôn ngữ Tiếng Việt

> [!IMPORTANT]
> Mail 1 dòng 1: "Thêm ngôn ngữ: Tiếng Việt"
> Lần trước đã bỏ TV ra, giờ khách yêu cầu thêm lại.

### File cần sửa: [src/components/Navbar/Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx)

#### Cập nhật mảng `languages`:

**Thêm Tiếng Việt** vào danh sách 5 ngôn ngữ hiện tại → thành **6 ngôn ngữ**:

```js
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },    // ← THÊM MỚI
  { code: "zh-CN", name: "Mandarin (中文)", flag: "🇨🇳" },
  { code: "zh-TW", name: "Cantonese (粵語)", flag: "🇭🇰" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];
```

---

## 3. TASK 2: Thêm Tooltip / Tip Windows nhỏ

> Mail 1 dòng 2: "Mấy cái window nhỏ nhở làm tip, good idea"
> Mail 1 dòng 27: "Trang 4Color Liquidity Sequence Cheat Sheet. Em làm thêm lên hero page trong window nhỏ, cho tips nóng, có lý đó."

### Yêu cầu:

- Giữ nguyên các tooltip/tip windows nhỏ hiện có (KH khen "good idea")
- **Thêm tooltip mới trên Hero page** chứa nội dung hot tips từ **4-Color Liquidity Sequence Cheat Sheet**
- Nội dung tip gợi ý:
  - `🟡 → 🟢 → 🔵 → 🔴 → TREND`
  - `🔵 → 🔴 → 🟡 → 🟢 → TREND`
  - "Liquidity loading before expansion"
  - Các pattern từ cheat sheet PDF

### File cần sửa:
- [src/components/Hero/HeroLeft.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroLeft.jsx) — thêm floating tip window
- Tạo styles cho tooltip window nhỏ (glassmorphism, floating animation)

### Tài liệu tham khảo:
- [4-Color Liquidity Sequence Cheat Sheet.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/4-Color%20Liquidity%20Sequence%20Cheat%20Sheet.pdf)

---

## 4. TASK 3: Sửa "See the Color in Action" — Cần video clip

> Mail 1 dòng 3: "See the color in action: Cần a video clip?"

### Yêu cầu:

- Section hiện tại ("See the 4Color System in action") → cần **thêm hoặc thay bằng video clip**
- Có thể dùng 1 trong 4 video YouTube từ mail 2 (xem TASK 11)
- Hoặc chờ khách cung cấp video demo riêng

### File cần sửa:
- [src/components/ChartShowcase/ChartShowcase.jsx](file:///f:/STUDY/trading-view/src/components/ChartShowcase/ChartShowcase.jsx)

### Gợi ý implementation:
- Embed YouTube video thay vì static chart
- Hoặc kết hợp: giữ chart + thêm video bên cạnh/bên dưới

---

## 5. TASK 4: Bỏ Interactive TradingView Chart

> [!WARNING]
> Mail 1 dòng 4: "Interactive Tradingview chart: Ko cần tới và cũng ko nên đăng bài như vậy vả lại loại 2 color Red/Green ko phải là type cùa a"

### Yêu cầu:

- **XÓA HOÀN TOÀN** phần Interactive TradingView Chart (chart 2 màu Red/Green)
- KH nói rõ: loại 2 color Red/Green không phải type của KH, **không nên đăng**

### File cần sửa:
- Tìm component chứa Interactive TradingView Chart và **xóa/comment out**
- Kiểm tra [src/App.jsx](file:///f:/STUDY/trading-view/src/App.jsx) để remove section này

> [!CAUTION]
> Phải xóa sạch, không để sót vì KH không muốn hiển thị chart 2 màu traditional.

---

## 6. TASK 5: Sửa CFE Sequence — Dùng Cheat Sheet mới

> Mail 1 dòng 8: "CFE(Context-First Execution) Sequence: anh gởi 4color Liquidity Sequence Cheat Sheet"

### Yêu cầu:

- Thay nội dung CFE Sequence hiện tại bằng nội dung từ file **"4-Color Liquidity Sequence Cheat Sheet.pdf"**
- Hiển thị các pattern sequence:
  ```
  🟡 → 🟢 → 🔵 → 🔴 → TREND
  hoặc
  🔵 → 🔴 → 🟡 → 🟢 → TREND
  ```

### File PDF nguồn:
- [4-Color Liquidity Sequence Cheat Sheet.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/4-Color%20Liquidity%20Sequence%20Cheat%20Sheet.pdf)

### Tài liệu bổ sung từ mail 1 (các ảnh liên quan):
| File | Nội dung |
|---|---|
| [The Liquidity Cycle.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Liquidity%20Cycle.png) | Biểu đồ vòng Liquidity Cycle |
| [The Liquidity Engine.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Liquidity%20Engine.pdf) | Tài liệu Liquidity Engine |
| [How Liquidity Gets Created.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/How%20Liquidity%20Gets%20Created.png) | Infographic cách Liquidity được tạo |
| [Liquidity Battles.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Liquidity%20Battles.pdf) | Tài liệu Liquidity Battles |
| [Where Liquidity Comes From.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Where%20Liquidity%20Comes%20From.png) | Infographic nguồn gốc Liquidity |

### File cần sửa:
- Component chứa CFE Sequence (tìm trong source)
- Có thể là phần "How It Works" hoặc section liên quan

---

## 7. TASK 6: Sửa "Watch Market Live" — Embed video demo Pro/Elite

> Mail 1 dòng 10: "Watch market Live: Để a gởi short video của Elite/Pro coi demo"
> Mail 1 dòng 30: "Vài cái Short video demo Pro/Elite, 5m. mai tính."

### Yêu cầu:

- KH sẽ gửi short video demo của **Pro** và **Elite** (mỗi cái ~5 phút)
- Trong khi chờ, có thể dùng **4 video YouTube** từ mail 2 làm demo tạm

### 4 Video YouTube từ mail 2:

| Tên | URL |
|---|---|
| BITCOIN - 1M, Education purpose | https://www.youtube.com/watch?v=xGvS9clt9Sw |
| FX - 1M, Education purpose | https://www.youtube.com/watch?v=2jYU65rDRzo |
| Metal - 1M, Education purpose | https://www.youtube.com/watch?v=_9kUqQ25j-8 |
| Stock Hubs - 1M, Education purpose | https://www.youtube.com/watch?v=feu_aThIJtU |

### File cần sửa:
- [src/components/LiveStream/LiveStream.jsx](file:///f:/STUDY/trading-view/src/components/LiveStream/LiveStream.jsx)
- Thay single video embed bằng **gallery 4 videos** hoặc **carousel**

---

## 8. TASK 7: Sửa "Understand Each Tool" — Thiếu Hubs

> Mail 1 dòng 12: "Understand Each Tool: Thiếu Hubs"

### Yêu cầu:

- Thêm **Hubs** vào section "Understand Each Tool"
- Hiện tại chỉ có Lite / Pro / Elite → cần thêm **Hubs** (FX Terminal Hub)
- Hubs description: "FX Terminal Hub — Multi-asset dashboard, Research in Progress"

### File cần sửa:
- Tìm component chứa "Understand Each Tool" section
- Thêm card/block cho **Hubs** với badge "Research in Progress"

---

## 9. TASK 8: Bỏ "Trusted by 50,000"

> [!WARNING]
> Mail 1 dòng 13: "Trust by 50,000: Bỏ, ko cần tới"

### Yêu cầu:

- **XÓA HOÀN TOÀN** section "Trusted by 50,000" (testimonials/social proof)
- Xóa khỏi `App.jsx` render order

### File cần sửa:
- [src/App.jsx](file:///f:/STUDY/trading-view/src/App.jsx) — remove component
- Component Testimonials hoặc tương tự — có thể giữ file nhưng không render

---

## 10. TASK 9: Sửa Product Suite — Bỏ giá, sửa Pro & Elite mô tả

> Mail 1 dòng 14: "The 4Color System, product Suite: Bỏ giá tiền hết"
> Mail 1 dòng 16-19: Pro - sửa mô tả
> Mail 1 dòng 21: Elite - sửa tên FVG
> Mail 1 dòng 22: Hubs - Good

### 10.1. Bỏ giá tiền TOÀN BỘ:

- Lite: `FREE` → giữ "Free Access" nhưng bỏ hiển thị giá `$0`
- Pro: `$297` → **BỎ** → hiển thị "Early Access (Under Development)"
- Elite: `$997` → **BỎ** → hiển thị "Research Version (Under Development)"
- Hubs: `Contact` → giữ "Research in Progress"

### 10.2. Sửa mô tả Pro (Early Access):

**Hiện tại** (SAI): Có "Confirm if pressure..." (hoặc tương tự)

**Thay vào** (ĐÚNG — theo mail 1 dòng 17-19):
```
- Buying vs Selling pressure metrics
- Absorption detection
- Liquidity imbalance signals
```

### 10.3. Sửa Elite:

**Hiện tại** (SAI): `FVG Execution Logic`

**Thay thành** (ĐÚNG): `FVG Lifecycle Logic`

> [!IMPORTANT]
> Khách nhấn mạnh: avoid "execution" — dùng "Lifecycle" thay thế

### File cần sửa:
- [src/components/FinalCTA/FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)

---

## 11. TASK 10: Sửa Hero Page Headline — CFE formula mới

> Mail 2: KH gửi nội dung mới cho Homepage Hero Line

### Yêu cầu:

#### 10.1. Headline / Hero chính:

```
Context-First Execution (CFE) analyzes market forces in real time by combining:

Order Flow + AD + 4-Color Candle Logic + FVG → Real-Time Market Context

Enhanced with AI-assisted interpretation for faster insight into
liquidity, imbalances, and execution zones.
```

#### 10.2. Thêm hiển thị Typical Pattern:

```
🟡 → 🟢 → 🔵 → 🔴 → TREND
or
🔵 → 🔴 → 🟡 → 🟢 → TREND

That is basically liquidity loading before expansion.
```

- Pattern này có thể hiển thị dưới dạng animated sequence trên hero
- Hoặc trong tooltip/tip window nhỏ (liên quan TASK 2)

### File cần sửa:
- [src/components/Hero/HeroLeft.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroLeft.jsx)
- Cập nhật headline text, subheadline, và thêm formula display

---

## 12. TASK 11: Embed 4 video YouTube

> Mail 2: url-video-youtube-to-embed.txt

### 4 Videos cần embed:

| # | Tên | Video ID | URL |
|---|---|---|---|
| 1 | BITCOIN - 1M (Education) | `xGvS9clt9Sw` | https://www.youtube.com/watch?v=xGvS9clt9Sw |
| 2 | FX - 1M (Education) | `2jYU65rDRzo` | https://www.youtube.com/watch?v=2jYU65rDRzo |
| 3 | Metal - 1M (Education) | `_9kUqQ25j-8` | https://www.youtube.com/watch?v=_9kUqQ25j-8 |
| 4 | Stock Hubs - 1M (Education) | `feu_aThIJtU` | https://www.youtube.com/watch?v=feu_aThIJtU |

### Gợi ý vị trí:
- **"See the Color in Action"** section (TASK 3) — embed 1-2 video chính
- **"Watch Market Live"** section (TASK 6) — gallery/carousel 4 videos
- **Education section** — embed 1-2 video liên quan

### File cần sửa:
- [src/components/ChartShowcase/ChartShowcase.jsx](file:///f:/STUDY/trading-view/src/components/ChartShowcase/ChartShowcase.jsx)
- [src/components/LiveStream/LiveStream.jsx](file:///f:/STUDY/trading-view/src/components/LiveStream/LiveStream.jsx)

---

## 13. TASK 12: Thêm Cheat Sheet Page + Tip trên Hero

> Mail 1 dòng 27: "Trang 4Color liquidity sequence cheat sheet. Em làm thêm lên hero page trong window nhỏ, cho tips nóng, có lý đó."

### 12.1. Trang/Section Cheat Sheet:

- Tạo section hoặc trang riêng hiển thị nội dung PDF "4-Color Liquidity Sequence Cheat Sheet"
- Có thể là popup/modal hoặc section trên page

### 12.2. Hot Tips trên Hero Page:

- Thêm **floating window nhỏ** trên hero page
- Hiển thị "tips nóng" từ cheat sheet
- Ví dụ content:
  - "🟡 → 🟢 → 🔵 → 🔴 = Trend forming"
  - "Liquidity loading before expansion"
  - Tips xoay vòng (carousel nhỏ hoặc typewriter effect)

### File nguồn:
- [4-Color Liquidity Sequence Cheat Sheet.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/4-Color%20Liquidity%20Sequence%20Cheat%20Sheet.pdf)

### File cần sửa:
- [src/components/Hero/HeroLeft.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroLeft.jsx)
- Tạo component mới: `src/components/CheatSheet/CheatSheet.jsx` (nếu cần trang riêng)

---

## 14. TASK 13: Update Logo mới (CFE Logo)

> Mail 3 dòng 2: "Update logo."

### Logo mới:

![Logo CFE mới](C:\Users\Administrator\.gemini\antigravity\brain\d251bacc-84d0-4172-9ad4-8daaaec48aed\Logo_CFE.jpg)

- Logo CFE vòng tròn 4 màu (Accumulation-blue, Expansion-green, Distribution-red, Rebalance-yellow) với tam giác và chữ "CFE" ở giữa
- **2 file logo gửi**: mail1 logo (không chữ CFE) và mail3 logo (giống nhau) → dùng cái có chất lượng cao nhất

### File logo nguồn:
- [mail1/file-from-mail/Logo.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Logo.jpg) (546 KB)
- [mail3/filefrommail/Logo.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail3/filefrommail/Logo.jpg) (565 KB) — file lớn hơn, dùng cái này

### Yêu cầu:
- Thay logo hiện tại bằng Logo CFE mới
- Cập nhật ở: Navbar, Footer, Favicon

### File cần sửa:
- [src/components/Navbar/Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx)
- [src/components/Footer/Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)
- [index.html](file:///f:/STUDY/trading-view/index.html) (favicon)
- Copy logo vào `public/images/`

---

## 15. TASK 14: Thêm ảnh "Why Upgrade / Doji" làm Hero Page content

> Mail 3 dòng 1: "My bad, có bài này đủ sức thuyết phục người ta upgrade lên 4Color candles, e cho nó làm hero page?"

### Ảnh Doji:

![Doji - Why You Keep Losing](C:\Users\Administrator\.gemini\antigravity\brain\d251bacc-84d0-4172-9ad4-8daaaec48aed\Doji.jpg)

### Yêu cầu:
- Thêm ảnh **"Why You Keep Losing? — Red/Green Doji vs 4-Color Doji"** vào **hero page**
- Ảnh này giải thích sự khác biệt giữa candlestick truyền thống (Red/Green) và 4-Color System
- KH muốn dùng nó để thuyết phục người dùng upgrade
- Message chính: *"Stop guessing. Read the market. Trade with the real money!"*
- CTA cuối ảnh: *"Get FREE access to Lite version and start seeing the traps before they hit."*

### File nguồn:
- [mail3/filefrommail/Doji.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail3/filefrommail/Doji.jpg) (1.4 MB)

### Gợi ý implementation:
- Có thể đặt ở Hero section bên phải (thay hoặc bổ sung chart hiện tại)
- Hoặc đặt ngay dưới hero như section "Why 4-Color?"
- Cần responsive — ảnh khá dài (portrait)

### File cần sửa:
- [src/components/Hero/HeroRightChart.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroRightChart.jsx) — hoặc tạo section mới

---

## 16. TASK 15: Cập nhật Email liên hệ

> Mail 1 dòng 25: "Email: 4colorsystem@gmail.com"

### Yêu cầu:
- Cập nhật email liên hệ trên website thành: **4colorsystem@gmail.com**
- Thay ở tất cả nơi hiển thị email: Footer, Contact section, etc.

### File cần sửa:
- [src/components/Footer/Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)
- Contact section (nếu có)

---

## 17. TASK 16: Cải thiện view trên màn hình lớn

> Mail 1 dòng 24: "Cái view trên màn hình lớn hơn nữa?"

### Yêu cầu:
- KH muốn website hiển thị **tốt hơn / lớn hơn** trên màn hình lớn (desktop wide, 2K, 4K)
- Cải thiện max-width containers
- Tăng font size cho ultra-wide screens
- Sử dụng thêm vw/vh units cho large breakpoints

### File cần sửa:
- [src/styles/globals.scss](file:///f:/STUDY/trading-view/src/styles/globals.scss) — thêm media queries cho large screens
- Các component `.module.scss` files — điều chỉnh max-width, padding

### Gợi ý breakpoints:
```scss
// Large desktop
@media (min-width: 1920px) {
  .container { max-width: 1600px; }
  // Tăng font-size, padding, spacing
}

// Ultra-wide
@media (min-width: 2560px) {
  .container { max-width: 2100px; }
  // Scale up thêm
}
```

---

## 18. TASK 17: Thêm tài liệu PDF vào Education/Resources

### KH gửi kèm rất nhiều tài liệu PDF và ảnh infographic. Cần xem xét thêm vào website.

### Tài liệu PDF từ mail 1:

| # | File | Nội dung | Kích thước |
|---|---|---|---|
| 1 | [4-Color Liquidity Sequence Cheat Sheet.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/4-Color%20Liquidity%20Sequence%20Cheat%20Sheet.pdf) | Cheat sheet sequence | 156 KB |
| 2 | [4-Color Market Observation Framework.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/4-Color%20Market%20Observation%20Framework.pdf) | Framework quan sát thị trường | 430 KB |
| 3 | [How AD Helps Confirm.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/How%20AD%20Helps%20Confirm.pdf) | AD Confirmation guide | 159 KB |
| 4 | [Liquidity Battles.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Liquidity%20Battles.pdf) | Liquidity Battles guide | 159 KB |
| 5 | [The Liquidity Engine.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Liquidity%20Engine.pdf) | Liquidity Engine guide | 262 KB |
| 6 | [Market Behavior Report HIMS.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Market%20Behavior%20Report%20HIMS.pdf) | Báo cáo hành vi thị trường HIMS | 312 KB |
| 7 | [When Price Moves Sideways.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/When%20Price%20Moves%20Sideways.pdf) | Phân tích sideway price | 190 KB |

### Ảnh infographic từ mail 1:

| # | File | Nội dung |
|---|---|---|
| 1 | [Accumulation Distribution Divergence.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/2.%20Accumulation%20%20Distribution%20Divergence.png) | AD Divergence diagram |
| 2 | [How AD Helps Confirm.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/How%20AD%20Helps%20Confirm.png) | AD Confirmation infographic |
| 3 | [How Liquidity Gets Created.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/How%20Liquidity%20Gets%20Created.png) | Liquidity creation process |
| 4 | [In 4-Color System.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/In%204-Color%20System.png) | 4-Color System overview |
| 5 | [In the 4-Color framework.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/In%20the%204-Color%20framework.png) | 4-Color framework visualization |
| 6 | [Sideways Range Structure.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Sideways%20Range%20Structure.png) | Sideways range analysis |
| 7 | [Simple Rule for the 4-Color Framework.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Simple%20Rule%20for%20the%204-Color%20Framework.png) | Simple rules infographic |
| 8 | [The Liquidity Cycle.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Liquidity%20Cycle.png) | Liquidity cycle diagram |
| 9 | [The Real Mechanics.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Real%20Mechanics.png) | Real mechanics infographic |
| 10 | [The Real Rule.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Real%20Rule.png) | Real rule visualization |
| 11 | [The Simple Rule.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/The%20Simple%20Rule.png) | Simple rule diagram |
| 12 | [What This Look Like On The Chart.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/What%20This%20Look%20Like%20On%20The%20Chart.png) | Chart example |
| 13 | [What This Looks Like in the 4-Color System.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/What%20This%20Looks%20Like%20in%20the%204-Color%20System.png) | 4-Color System example |
| 14 | [When Price Moves Sideways.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/When%20Price%20Moves%20Sideways.png) | Sideways price movement |
| 15 | [Where Liquidity Comes From.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Where%20Liquidity%20Comes%20From.png) | Liquidity origin |
| 16 | [Why Price Often Sweeps Both Sides.png](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail1/file-from-mail/Why%20Price%20Often%20Sweeps%20Both%20Sides.png) | Price sweeps explanation |

### Tài liệu PDF từ mail 2:

| # | File | Nội dung |
|---|---|---|
| 1 | [Chart Patterns, What They Really Represent in the Market.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail2/filefrommail/Chart%20Patterns,%20What%20They%20Really%20Represent%20in%20the%20Market.pdf) | Chart Patterns giải thích |
| 2 | [Why Liquidity Forms Around Support and Resistance.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail2/filefrommail/Why%20Liquidity%20Forms%20Around%20Support%20and%20Resistance.pdf) | Liquidity & S/R |

### AD Rule image từ mail 2:

![AD Rule](C:\Users\Administrator\.gemini\antigravity\brain\d251bacc-84d0-4172-9ad4-8daaaec48aed\AD_Rule.png)

- Key principle: *"Structure tells the direction. AD tells who is getting trapped."*

### Tài liệu PDF từ mail 3:

| # | File | Nội dung |
|---|---|---|
| 1 | [Why Upgrade.pdf](file:///f:/STUDY/trading-view/Ticket-trading-view2/mail3/filefrommail/Why%20Upgrade.pdf) | Lý do upgrade lên 4-Color |

### Gợi ý:
- Tạo section **Resources / Downloads** trên website
- Cho phép download PDF hoặc mở PDF viewer
- Thêm infographic images vào Education section phù hợp
- Một số ảnh có thể dùng trong tooltip tips (TASK 2)

---

## 19. Tổng hợp file ảnh/tài liệu từ khách (Ticket 2)

### Mail 1 — file-from-mail (26 files):

| Loại | Số lượng | Mô tả |
|---|---|---|
| PDF | 7 | Cheat Sheet, Framework, AD Confirm, Liquidity Battles, Liquidity Engine, HIMS Report, Sideways |
| PNG (infographic) | 16 | Các diagram, rules, examples |
| JPG (chart) | 1 | Him.jpg — Chart demo Lite với annotations |
| JPG (logo) | 1 | Logo.jpg — Logo CFE |
| JPG (cover) | 1 | (không có, từ ticket 1) |

### Mail 2 — files:

| Loại | Số lượng | Mô tả |
|---|---|---|
| PDF | 2 | Chart Patterns, Liquidity S/R |
| PNG | 1 | AD Rule |
| TXT | 1 | 4 YouTube URLs |

### Mail 3 — files:

| Loại | Số lượng | Mô tả |
|---|---|---|
| JPG | 2 | Doji.jpg (1.4MB), Logo.jpg (565KB) |
| PDF | 1 | Why Upgrade.pdf |

---

## 20. Checklist cuối

### 🔴 BỎ / XÓA:

- [x] Bỏ **Interactive TradingView Chart** (chart 2 color Red/Green) — TASK 4
- [x] Bỏ section **"Trusted by 50,000"** — TASK 8
- [x] Bỏ **giá tiền** trên tất cả pricing cards — TASK 9

### 🟢 SỬA NỘI DUNG:

- [x] Sửa Pro description: bỏ "Confirm if pressure...", thay bằng "Buying vs Selling pressure metrics / Absorption detection / Liquidity imbalance signals" — TASK 9
- [x] Sửa Elite: `FVG Execution Logic` → `FVG Lifecycle Logic` (avoid "execution") — TASK 9
- [x] Sửa CFE Sequence → nội dung từ Cheat Sheet mới — TASK 5
- [x] Sửa Hero Headline → CFE formula mới từ mail 2 — TASK 10
- [x] Cập nhật Email → `4colorsystem@gmail.com` — TASK 15

### 🔵 THÊM MỚI:

- [x] Thêm ngôn ngữ **Tiếng Việt** vào language dropdown — TASK 1
- [x] Thêm **tooltip tip windows** trên Hero page (hot tips từ cheat sheet) — TASK 2 + TASK 12
- [x] Thêm **video clip** vào "See the Color in Action" — TASK 3
- [x] Thêm **Hubs** vào "Understand Each Tool" section — TASK 7 *(layout fixed: 2×2 grid)*
- [x] Thêm **4 video YouTube embed** (Bitcoin, FX, Metal, Stock Hubs) — TASK 11 *(autoplay on scroll + loop)*
- [x] Thêm **ảnh Doji** ("Why You Keep Losing?") vào hero page — TASK 14
- [x] Thêm Typical Pattern display (🟡→🟢→🔵→🔴→TREND) — TASK 10

### 🟡 CẬP NHẬT ASSETS:

- [x] Update **Logo** → CFE Logo mới (vòng tròn 4 màu) — TASK 13
- [x] Copy **26 files** từ mail1 vào `public/images/` hoặc `public/docs/`
- [x] Copy **3 files** từ mail2 vào assets
- [x] Copy **3 files** từ mail3 vào assets
- [x] Cải thiện **responsive cho màn hình lớn** — TASK 16
- [x] Thêm **PDF/infographic** vào Education/Resources section — TASK 17

### 🎯 GHI NHỚ (Goal từ KH):

> [!IMPORTANT]
> "Website chủ yếu là cho ai cũng thấy dễ, tự học rồi lấy Lite về xài, mấy cái kia từ từ tính sau."

- Ưu tiên **UX cho người mới** — dễ hiểu, dễ dùng
- Focus vào **Lite (free)** — cho người dùng KH dễ dàng access TradingView
- Pro/Elite/Hubs là **"từ từ tính sau"** — đánh dấu Under Development
- Mục tiêu chính: **Education + Self-learning** — không phải bán hàng

---

> **End of Task V2 Document**
> Tổng cộng: **17 TASK** | **~32+ files cần tạo từ mail** | **4 YouTube videos cần embed**
> KH gửi kèm: **7 PDF + 16 PNG + 4 JPG** (mail 1) + **2 PDF + 1 PNG + 4 URLs** (mail 2) + **2 JPG + 1 PDF** (mail 3)
