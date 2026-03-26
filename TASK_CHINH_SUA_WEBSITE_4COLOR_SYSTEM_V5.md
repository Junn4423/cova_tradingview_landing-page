# 📋 TASK V5: Chỉnh sửa Website 4Color System™ (Lần 5)

> **Dự án**: 4Color System Landing Page
> **Ngày tạo**: 27/03/2026
> **Nguồn yêu cầu**: Email khách hàng (Ticket-trading-view5)
> **Codebase**: `f:\STUDY\trading-view\src`
> **Ticket folder**: `f:\STUDY\trading-view\Ticket-trading-view5`

---

## 📧 Tóm tắt yêu cầu từ khách (textfrommail.txt)

Khách gửi nhiều yêu cầu chỉnh sửa lớn nhỏ, tóm tắt thành **15 hạng mục chính** sau:

| # | Yêu cầu gốc | Tóm tắt |
|---|---|---|
| 1 | Chart hero page hơi thụt xuống, cho text FVG Execution Logic™ Notice nằm trên chart | Thêm disclaimer notice ở bên phải Hero, phía trên chart |
| 2 | CFE formula sai: phải là `Structure → AD → FVG → 4Color Candle` (đúng), KHÔNG phải `4Color Candle + AD Value Context + FVG` | Sửa thứ tự CFE formula ở HeroLeft |
| 3 | Infographic Diagrams "nhìn ớn quá" → che lại, click vào mới xem được | Thêm cơ chế ẩn/hiện (collapse/reveal) cho Infographics section |
| 4 | Infographic nên nằm trên FAQs hoặc chót luôn | Xem xét di chuyển Infographic section |
| 5 | Trang 4Color System Product Suite được lên cao hơn, quan tâm hơn | Di chuyển FinalCTA (Product Suite) lên trước Education |
| 6 | Thêm QR code Lite vào hàng 4 sản phẩm | Thêm QR cho plan Lite trong FinalCTA |
| 7 | Thêm tiếng Indian (Hindi) | Thêm ngôn ngữ Hindi vào Google Translate Widget |
| 8 | Hình "Logic Still Missing" đặt dưới hàng "Why You Keep Losing & Stop Memorizing" (hàng 2), một mình hàng 3 | Thêm ảnh `Missing Logic.jpg` vào Hero section dưới Doji2 + Stop Memorize row |
| 9 | "Get Trading Insights" thay bằng Follow us on YouTube, Facebook | Sửa newsletter section trong Footer |
| 10 | "Powered by Covasol..." → lấy ra | Xóa dòng Powered by Covasol trong Footer |
| 11 | Sửa text trên hero: Quote → Image → Quote → Image flow | Cấu trúc lại layout Hero section |
| 12 | Clean up: `4Color` (không gạch ngang). Chuẩn hoá toàn bộ | Global find & replace `4-Color` → `4Color` |
| 13 | Tiêu đề "Logic Still Missing" + nội dung logic still missing.pdf | Thêm section mới với nội dung từ PDF |
| 14 | Education section: gỡ bỏ link Self-Study Module | Xóa link "Self-Study Module" khỏi Education module cards |
| 15 | Thêm nội dung Legal & Terms mới | Cập nhật Legal section với 3 đoạn mới |

---

## ⚠️ YÊU CẦU "FINAL FLOW" TỪ KHÁCH

Khách chỉ định thứ tự section cụ thể:

```
1. 4Color System (hook)              → Hero section
2. What Your Chart Is Missing         → ChartShowcase section  
3. How It Works (clarity)             → HowItWorks section
4. Designed for Real Execution        → Education section (GỠ BỎ link Self-Study Module)
5. Product Suite (offer)              → FinalCTA section
6. Fix Your Execution Logic           → Education/Mindset section (NEW hoặc move)
7. FAQs (remove doubt)               → FAQ section
8. Connect (engagement)               → Contact section
9. Legal & Terms (compliance)         → Legal section
```

**So sánh với thứ tự hiện tại trong `App.jsx`:**

| # | Hiện tại | Yêu cầu mới | Thay đổi? |
|---|---|---|---|
| 1 | Hero | 4Color System (hook) | ✅ Giữ nguyên |
| 2 | Features ("Everything You Need to Trade Smarter") | What Your Chart Is Missing | ⚠️ **Đổi tiêu đề** |
| 3 | HowItWorks | How the 4Color System Works | ✅ Giữ nguyên |
| 4 | Education | Designed for Real Execution / Learn to Trade at Your Pace | ⚠️ **Gỡ Self-Study Module links** |
| 5 | FinalCTA (Product Suite) | Product Suite | ✅ Giữ nguyên vị trí |
| 6 | *(không có)* | Fix Your Execution Logic | 🆕 **Section MỚI** hoặc merge vào Education |
| 7 | FAQ | FAQs | ✅ Giữ nguyên |
| 8 | Contact | Connect | ✅ Giữ nguyên |
| 9 | Legal | Legal & Terms | ⚠️ **Thêm nội dung** |

**Lưu ý**: ChartShowcase (Live Trading Charts) hiện nằm sẵn trong layout. Khách không đề cập xóa nhưng cũng không nằm rõ trong final flow → giữ nguyên vị trí hiện tại.

---

## 📦 File đính kèm từ khách

| # | File | Loại | Kích thước | Mô tả | Đã có trong `/public`? |
|---|------|------|-----------|-------|----------------------|
| 1 | `3 Candles Bahaviors.jpg` | Ảnh | 1.1 MB | **"STOP MEMORIZING 20+ CANDLES & CHART PATTERNS"** — Infographic 3 candle behaviors: Compression, Rejection, Expansion. Có thể đã có `/public/images/3Candle-behaviors.jpg` nhưng cần xác nhận có khác phiên bản không | ⚠️ Cần so sánh |
| 2 | `4Color Market Observation Framework.pdf` | PDF | 374 KB | Framework quan sát thị trường | ✅ Đã có `/public/docs/` |
| 3 | `6 Core Color Sequences That Drive Most Intraday Moves - Lite.pdf` | PDF | 47 KB | 6 chuỗi màu chính cho giao dịch intraday (Lite version) | ❌ Chưa có |
| 4 | `6. Fix Your Execution Logic.pdf` | PDF | 1.5 MB | **"Fix Your Execution Logic"** — Tài liệu giáo dục cho section mới #6 trong Final Flow | ❌ Chưa có |
| 5 | `Doji vs 4Color Why Upgrade.pdf` | PDF | 88 KB | So sánh Doji truyền thống vs 4Color Doji | ❌ Chưa có |
| 6 | `ELITE VERSION.pdf` | PDF | 199 KB | Tài liệu Elite version | ❌ Chưa có |
| 7 | `How These Charts Work Across ETFs.pdf` | PDF | 70 KB | Phiên bản mới? Cần so sánh với file đã có | ⚠️ Cần so sánh |
| 8 | `LITE- Free Access.pdf` | PDF | 197 KB | Tài liệu Lite Free Access | ❌ Chưa có |
| 9 | `Liquidity Battles.pdf` | PDF | 51 KB | Phiên bản mới? | ⚠️ Cần so sánh |
| 10 | `Lite Version — Trade Setups.pdf` | PDF | 50 KB | Lite Version Trade Setups | ❌ Chưa có |
| 11 | `Logic Still Missing.pdf` | PDF | 729 KB | **"Logic Still Missing"** — Tài liệu cho section logic still missing | ❌ Chưa có |
| 12 | `Market Behavior Report HIMS.pdf` | PDF | 263 KB | Phiên bản mới? | ⚠️ Cần so sánh |
| 13 | `Missing Logic.jpg` | Ảnh | 707 KB | **"DECADES STUDYING TRADER BEHAVIOR — LOGIC STILL MISSING"** — Hình Logic → Confidence → Behavior flow. Dòng cuối: "You're trying to be disciplined... to rules that don't match the market." | ❌ Chưa có |
| 14 | `Pro & Elite Upgrade Official Announcement.pdf` | PDF | 326 KB | Phiên bản mới? | ⚠️ Cần so sánh |
| 15 | `QA's Technical Support.pdf` | PDF | 70 KB | Tài liệu QA & Technical Support | ❌ Chưa có |
| 16 | `Red & Green Candles vs 4-Color, FVG Context.pdf` | PDF | 77 KB | So sánh Red/Green vs 4Color system | ❌ Chưa có |
| 17 | `STOP MEMORIZING 20.pdf` | PDF | 37 KB | Phiên bản mới/cập nhật? | ⚠️ Cần so sánh |
| 18 | `The 5 Daily Liquidity Events.pdf` | PDF | 66 KB | 5 sự kiện thanh khoản hàng ngày | ❌ Chưa có |
| 19 | `The Liquidity Engine.pdf` | PDF | 114 KB | Phiên bản mới? | ⚠️ Cần so sánh |
| 20 | `When Price Moves Sideways.pdf` | PDF | 82 KB | Phiên bản mới? | ⚠️ Cần so sánh |
| 21 | `Why You Keep Losing.jpg` | Ảnh | 659 KB | **"WHY YOU KEEP LOSING?"** — Giống `Doji2.jpg` đã có (so sánh Red/Green Doji vs 4Color Doji). Có thể là phiên bản trùng hoặc mới | ⚠️ Cần so sánh |

---

## 🖼️ Phân tích chi tiết các ảnh mới

### Ảnh 1: `Missing Logic.jpg` (707 KB)
- **Tiêu đề**: "DECADES STUDYING TRADER BEHAVIOR — LOGIC STILL MISSING. THE MARKET NOTICED."
- **Nội dung**: Flow diagram: **LOGIC** → **CONFIDENCE** → **BEHAVIOR**
  - Logic: Defined Rules, Objective Conditions, Measure Outcomes
  - Confidence: Automatic, Unforced, Proactive
  - Behavior: Emotional, Forced, Reactive (PANIC!)
- **Dòng cuối**: "You're trying to be disciplined... to rules that don't match the market."
- **Vị trí yêu cầu**: Dưới hàng "Why You Keep Losing & Stop Memorizing" (hàng 2), **một mình** hàng 3

### Ảnh 2: `3 Candles Bahaviors.jpg` (1.1 MB)
- **Tiêu đề**: "STOP MEMORIZING 20+ CANDLES & CHART PATTERNS — Only 3 Candles Behavior You Need to Know"
- **Nội dung**: 3 columns: COMPRESSION (Doji/Neutral), REJECTION (Wicks), EXPANSION (Little wick or full body)
- **Sequence**: Compression → Rejection → Expansion
- **Dòng cuối**: "The market doesn't care about your Candle & Pattern library."
- **⚠️ Lưu ý**: Đã có file `/public/images/3Candle-behaviors.jpg` (272 KB) — cần xác nhận có phải cùng file không hay là phiên bản mới lớn hơn

### Ảnh 3: `Why You Keep Losing.jpg` (659 KB)
- Giống hoặc tương tự `Doji2.jpg` đã có — cần so sánh

---

## ✅ CHECKLIST CÔNG VIỆC CHI TIẾT

### TASK 1: Copy file mới vào `/public`
**File sửa**: Filesystem operations

- [ ] Copy `Missing Logic.jpg` → `/public/images/Missing-Logic.jpg`
- [ ] So sánh `3 Candles Bahaviors.jpg` vs `/public/images/3Candle-behaviors.jpg` — nếu khác → ghi đè/đổi tên
- [ ] So sánh `Why You Keep Losing.jpg` vs `/public/images/Doji2.jpg` — nếu giống → bỏ qua
- [ ] Copy PDFs mới chưa có vào `/public/docs/`:
  - `6 Core Color Sequences That Drive Most Intraday Moves - Lite.pdf`
  - `6. Fix Your Execution Logic.pdf`
  - `Doji vs 4Color Why Upgrade.pdf`
  - `ELITE VERSION.pdf`
  - `LITE- Free Access.pdf`
  - `Lite Version — Trade Setups.pdf`
  - `Logic Still Missing.pdf`
  - `QA's Technical Support.pdf`
  - `Red & Green Candles vs 4-Color, FVG Context.pdf`
  - `The 5 Daily Liquidity Events.pdf`
- [ ] So sánh & cập nhật PDFs đã có nếu phiên bản mới khác

---

### TASK 2: Hero Section — Thêm FVG Execution Logic™ Notice
**File sửa**: `src/components/Hero/Hero.jsx`, `src/components/Hero/HeroRightChart.jsx`, `src/components/Hero/HeroRightChart.module.scss`

**Yêu cầu**: Khách muốn phần text disclaimer/notice nằm **bên phải Hero, phía trên chart image**, để "2 bên trái phải cân bằng hơn".

- [ ] Thêm block text **FVG Execution Logic™ Notice** phía trên `<HeroRightChart />`:
  ```
  FVG Execution Logic™ Notice

  FVG Execution Logic™ and the 4-Color Candle System are proprietary 
  analytical frameworks developed for educational purposes.

  This system focuses on price behavior, liquidity flow, and execution 
  context using a structured visual model.
  All analysis presented reflects this independent framework and is not 
  derived from or affiliated with any third-party platform.

  Any platforms, charts, or tools shown are used solely as a medium to 
  visualize the system. The methodology itself remains platform-independent.
  ```
- [ ] Style nhỏ gọn, font nhỏ, opacity vừa phải (kiểu legal notice)
- [ ] Đặt phía trên `<HeroRightChart />` để chart không bị thụt xuống cô lập

---

### TASK 3: Sửa CFE Formula — Thứ tự đúng
**File sửa**: `src/components/Hero/HeroLeft.jsx`

**Yêu cầu**: Khách nói `Structure → AD → FVG → 4Color Candle` là **đúng**, còn `4Color Candle + AD Value Context + FVG` là **SAI**.

**Hiện tại** (dòng 108-112 HeroLeft.jsx):
```jsx
<span className="notranslate">Order Flow + AD + 4-Color Candle Logic + FVG</span>
```

- [ ] Sửa thành:
  ```jsx
  <span className="notranslate">Structure → AD → FVG → 4Color Candle</span>
  ```
- [ ] Cập nhật text mô tả tương ứng nếu cần

---

### TASK 4: Thêm hình "Missing Logic" vào Hero — Hàng 3
**File sửa**: `src/components/Hero/Hero.jsx`, `src/components/Hero/HeroRightChart.module.scss`

**Yêu cầu**: Hình `Missing Logic.jpg` nằm dưới hàng "Why You Keep Losing & Stop Memorizing" (hàng 2), **một mình** hàng 3.

Layout hiện tại Hero:
```
Hàng 1: HeroLeft | HeroRightChart  (2 cột)
Hàng 2: Doji2   | StopMemorize     (v4Row, 2 cột)
```

- [ ] Thêm **Hàng 3** mới dưới `v4Row`:
  ```jsx
  {/* V5: Logic Still Missing — full width row */}
  <motion.div className={styles.v5LogicRow}>
    <img 
      src="/images/Missing-Logic.jpg"
      alt="Logic Still Missing — Logic → Confidence → Behavior"
      loading="lazy"
    />
    <h3>Logic Still Missing</h3>
    <p>"You're trying to be disciplined... to rules that don't match the market."</p>
  </motion.div>
  ```
- [ ] Style full-width, centered, với border/glow phù hợp
- [ ] Responsive trên mobile

---

### TASK 5: Hero Text Flow — Quote → Image → Quote → Image
**File sửa**: `src/components/Hero/Hero.jsx`

**Yêu cầu** (dòng 39-41 textfrommail):
```
Trên tấm hình → "Most traders don't fail from lack of strategy.
They fail from broken execution logic." → Tấm hình → The FVG Execution 
Logic™ framework removes guesswork by tracking imbalance, behavior, 
and real-time execution context.
```

- [ ] Thêm quote text **phía trên** hình `Missing Logic.jpg`:
  > "Most traders don't fail from lack of strategy. They fail from broken execution logic."
- [ ] Thêm text **phía dưới** hình `Missing Logic.jpg`:
  > "The FVG Execution Logic™ framework removes guesswork by tracking imbalance, behavior, and real-time execution context."

---

### TASK 6: Infographics — Ẩn/Hiện (Collapse/Reveal)
**File sửa**: `src/components/Education/Education.jsx`, `src/components/Education/Education.module.scss`

**Yêu cầu**: "Phần Infographic Diagrams nhìn ớn quá... cho cái label mới che lại, ai click vô thì nó mở hết ra"

- [ ] Wrap phần `<h4>Infographics & Diagrams</h4>` + `infographicGrid` trong một collapsible container
- [ ] Mặc định: **đóng** (collapsed)
- [ ] Click vào tiêu đề → mở ra (expand) với animation mượt
- [ ] Icon ▶/▼ để chỉ trạng thái đóng/mở
- [ ] Hoặc dùng `<details>/<summary>` style đẹp

---

### TASK 7: Global Clean Up — `4-Color` → `4Color`
**File sửa**: Toàn bộ codebase

**Yêu cầu**: "E clean up cái này dùm a: 4Color. Ko có gạch ngang ở giữa. Chuẩn luôn, ko rắc rối về sau."

- [ ] Global find & replace `4-Color` → `4Color` trong **tất cả file JSX, SCSS, MD**
- [ ] **NGOẠI TRỪ**:
  - URLs (ví dụ TradingView script URL vẫn giữ `Four-Color-Order-Flow-System`)
  - `notranslate` spans đã có sẵn `4Color` (check không replace trùng)
- [ ] Kiểm tra tất cả components: Hero, Features, HowItWorks, Education, FinalCTA, ChartShowcase, FAQ, Contact, Legal, Footer
- [ ] Kiểm tra file `index.html` (meta tags)

---

### TASK 8: Thêm QR Code Lite cho 4 sản phẩm đều có QR
**File sửa**: `src/components/FinalCTA/FinalCTA.jsx`

**Yêu cầu**: "E có cái QR của Lite đó sẵn đưa vô hàng 4 sản phẩm, Lite luôn cho 4 cái có QR code, đứng hàng đẹp mặt luôn"

**Hiện tại**: Chỉ Pro, Elite, Hubs có QR. Lite không có.

- [ ] Tìm/tạo QR code cho Lite (link: `https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/`)
  - Có thể dùng QR hiện có `/images/4ColorSystem_QR.jpeg` nếu link giống
- [ ] Thêm `qrCode: '/images/Lite-QR.png'` (hoặc `4ColorSystem_QR.jpeg`) vào plan Lite trong `plans` array
- [ ] Đảm bảo 4 cards đều hiện QR code, đứng hàng đẹp

---

### TASK 9: Thêm tiếng Hindi (Indian)
**File sửa**: `src/utils/GoogleTranslateWidget.jsx` hoặc file cấu hình Google Translate

- [ ] Thêm `'hi'` (Hindi) vào danh sách ngôn ngữ Google Translate
- [ ] Kiểm tra widget hiển thị đúng option Hindi

---

### TASK 10: Footer — Thay "Get Trading Insights" bằng Follow YouTube, Facebook
**File sửa**: `src/components/Footer/Footer.jsx`, `src/components/Footer/Footer.module.scss`

**Hiện tại** (dòng 148-173):
- Section "Get Trading Insights" với newsletter form (email input + subscribe button)

**Yêu cầu**: Thay thế hoàn toàn bằng "Follow us on YouTube, Facebook"

- [ ] Xóa newsletter form (email input + subscribe)
- [ ] Thay bằng 2 nút/link lớn:
  - 🎬 **Follow us on YouTube** → `https://www.youtube.com/channel/UCIwbgAkq_WGBJQmNoKu2CZA`
  - 📘 **Follow us on Facebook** → `https://www.facebook.com/people/Fvg-Execution-Logic/61576892860617/`
- [ ] Style đẹp, icons lớn, hover effects

---

### TASK 11: Footer — Xóa "Powered by Covasol"
**File sửa**: `src/components/Footer/Footer.jsx`

**Yêu cầu**: "Powered by Covasol.... lấy ra nha, dính tới privacy, phiền lắm"

**Hiện tại** (dòng 181-191):
```jsx
<p className={styles.poweredBy}>
  Powered by <a href="https://covasol.com.vn" ...>covasol.com.vn</a>
</p>
```

- [ ] Xóa toàn bộ block `<p className={styles.poweredBy}>...</p>`
- [ ] Xóa CSS liên quan nếu có class `.poweredBy` không dùng nữa

---

### TASK 12: Education — Gỡ link Self-Study Module
**File sửa**: `src/components/Education/Education.jsx`

**Yêu cầu**: "Learn to Trade at Your Pace (Gỡ bỏ mấy cái link Self-Study Module)"

**Hiện tại** (dòng 233-241 trong `ModuleCard`):
```jsx
<a href={...gmail mailto...} className={styles.moduleBtn}>
  <BookOpen size={15} />
  <span>Self-Study Module</span>
</a>
```

- [ ] Xóa toàn bộ link `<a>Self-Study Module</a>` trong `ModuleCard` component
- [ ] Giữ nguyên phần title + description + image của mỗi module card

---

### TASK 13: Legal & Terms — Thêm nội dung mới
**File sửa**: `src/components/Legal/Legal.jsx`

**Yêu cầu**: Thêm 3 đoạn mới vào phần Legal & Terms:

```
All trademarks, company names, logos, and platform references are the 
property of their respective owners. We do not claim any affiliation, 
partnership, or endorsement with any third-party platforms, brokers, 
or service providers.

Charts, data, and visual tools displayed are used solely for analysis 
illustration. Accuracy and completeness of data are not guaranteed.

By using this website, you agree that you are fully responsible for 
your own trading decisions and outcomes.
```

- [ ] Thêm section mới "Trademark & Third-Party Disclaimer" vào array `sections` trong Legal.jsx
- [ ] Hoặc append 3 đoạn trên vào section "Terms of Service" hiện có
- [ ] Style consistent với các section khác

---

### TASK 14: Thêm PDFs mới vào Education/Resources
**File sửa**: `src/components/Education/Education.jsx`

**Yêu cầu**: "E update hết mấy file dưới đây nha" — Nhiều PDF mới cần thêm vào resources grid.

- [ ] Thêm các PDF mới vào array `pdfResources`:
  - `6 Core Color Sequences That Drive Most Intraday Moves - Lite` (color: `#00F5A0`)
  - `Fix Your Execution Logic` (color: `#FF6B6B`)
  - `Doji vs 4Color Why Upgrade` (color: `#7B2CBF`)
  - `ELITE VERSION` (color: `#FFD700`)
  - `LITE - Free Access` (color: `#00F5A0`)
  - `Lite Version — Trade Setups` (color: `#3A86FF`)
  - `Logic Still Missing` (color: `#FF9F1C`)
  - `QA's Technical Support` (color: `#00D4FF`)
  - `Red & Green Candles vs 4Color, FVG Context` (color: `#FF6B6B`)
  - `The 5 Daily Liquidity Events` (color: `#FFD700`)
- [ ] Cập nhật PDFs đã có nếu phiên bản mới khác (so sánh file size)

---

### TASK 15: Section "Fix Your Execution Logic" (Section #6 trong Final Flow)
**File sửa**: Có thể tạo component mới hoặc merge vào Education

**Yêu cầu**: Khách đặt đây là section #6 trong Final Flow: "Fix Your Execution Logic (education + mindset shift)"

- [ ] **Option A**: Tạo component mới `src/components/FixExecution/FixExecution.jsx`
  - Hiển thị nội dung từ `6. Fix Your Execution Logic.pdf`
  - Có link tải PDF
  - Đặt giữa FinalCTA và FAQ trong App.jsx
- [ ] **Option B**: Merge vào Education section dưới dạng featured resource mới
- [ ] ⚠️ Cần đọc PDF để extract nội dung chính xác → Nhưng không đọc được PDF trực tiếp, cần khách cung cấp text hoặc convert PDF → text

---

## 🔍 Mapping yêu cầu khách → Task

| Dòng email | Yêu cầu gốc | Task |
|---|---|---|
| 1 | "Chart hero page hơi thụt xuống... cho text Notice nằm trên nó" | TASK 2 |
| 13-18 | "4Color Candle + AD Value Context + FVG (SAI) → Structure → AD → FVG → 4Color Candle (Đúng)" | TASK 3 |
| 21 | "Infographic Diagrams nhìn ớn quá... che lại click vào mới xem" | TASK 6 |
| 23 | "Nó nên nằm trên FAQs hay chót luôn" | TASK 6 (giữ vị trí hiện tại, thêm collapse) |
| 25 | "4Color System Product Suite cũng được lên cao hơn" | Xem xét — hiện đã ở vị trí #5 |
| 29 | "QR Lite luôn cho 4 cái có QR code" | TASK 8 |
| 31 | "Thêm tiếng Indian" | TASK 9 |
| 32 | "Hình Logic Still Missing dưới hàng Why You Keep Losing" | TASK 4, TASK 5 |
| 35 | "Get Trading Insights → follow us on YouTube, Facebook" | TASK 10 |
| 37 | "Powered by Covasol → lấy ra" | TASK 11 |
| 39-41 | Quote → Image → Quote flow | TASK 5 |
| 43 | "Clean up 4Color, ko gạch ngang" | TASK 7 |
| 44-45 | "Tiêu đề Logic Still Missing + e update hết mấy file" | TASK 13, TASK 14 |
| 46 | "Infographic: che lại, click vô mở ra" | TASK 6 |
| 49-57 | "Disclaimer Notice lên Hero" | TASK 2 |
| 59-65 | "Phần Legal & Terms thêm nội dung" | TASK 13 |
| 68-77 | "Final Flow" | Tổng hợp tất cả tasks |
| 72 | "Gỡ bỏ link Self-Study Module" | TASK 12 |

---

## 📊 Thứ tự thực hiện khuyến nghị

1. **TASK 1** — Copy files vào `/public` (tiên quyết cho mọi task khác)
2. **TASK 7** — Global clean up `4-Color` → `4Color` (nên làm sớm, tránh conflict)
3. **TASK 11** — Xóa Powered by Covasol (nhanh, đơn giản)
4. **TASK 10** — Sửa newsletter → Follow YouTube/Facebook (nhanh)
5. **TASK 12** — Gỡ Self-Study Module links (nhanh)
6. **TASK 9** — Thêm tiếng Hindi (nhanh)
7. **TASK 13** — Thêm nội dung Legal & Terms (trung bình)
8. **TASK 3** — Sửa CFE formula (nhanh nhưng quan trọng)
9. **TASK 2** — Thêm FVG Notice lên Hero (trung bình)
10. **TASK 8** — Thêm QR Lite (trung bình)
11. **TASK 14** — Thêm PDFs mới vào Education (trung bình)
12. **TASK 6** — Infographics collapse/reveal (trung bình-phức tạp)
13. **TASK 4** — Thêm Missing Logic hình hàng 3 Hero (trung bình)
14. **TASK 5** — Hero text flow Quote → Image → Quote (phức tạp)
15. **TASK 15** — Section "Fix Your Execution Logic" (phức tạp nhất)

---

## ⚠️ Lưu ý quan trọng

1. **`4Color` KHÔNG CÓ gạch ngang** — Áp dụng toàn bộ website, kể cả `4Color System™`, `4Color Candle`, etc. Trừ URLs bên ngoài.
2. **FVG Execution Logic™ Notice** phải nằm ở **bên phải Hero page, phía trên chart** — để 2 bên trái phải cân bằng.
3. **CFE formula đúng**: `Structure → AD → FVG → 4Color Candle` (không phải ngược lại).
4. **Infographics**: Mặc định ẩn, click mở — KHÔNG xóa hoàn toàn.
5. **"Powered by Covasol"**: Xóa hoàn toàn vì lý do privacy.
6. **Missing Logic.jpg**: Đặt **một mình hàng 3**, full-width, dưới hàng Doji2 + Stop Memorize.
7. **Self-Study Module links**: Xóa khỏi Education cards, chỉ giữ nội dung giáo dục.
8. **Nhiều PDF mới cần copy** — Cần xác nhận phiên bản nào cần ghi đè, phiên bản nào giữ nguyên.
