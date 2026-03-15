# 📋 TASK: Chỉnh sửa Website 4Color System™

> **Dự án**: 4Color System Landing Page
> **Ngày tạo**: 15/03/2026
> **Nguồn yêu cầu**: Email khách hàng (mail1, mail2) + Screenshot tin nhắn + Tài liệu DOCX
> **Codebase**: `f:\STUDY\trading-view\src`
> **Ticket folder**: `f:\STUDY\trading-view\Ticket-trading-view`

---

## 📑 MỤC LỤC

1. [Tổng quan yêu cầu](#1-tổng-quan-yêu-cầu)
2. [TASK 1: Thay đổi Logo](#2-task-1-thay-đổi-logo)
3. [TASK 2: Sửa Background](#3-task-2-sửa-background)
4. [TASK 3: Sửa Hero Section](#4-task-3-sửa-hero-section)
5. [TASK 4: Đổi sản phẩm Pricing — Lite/Pro/Elite/Hubs](#5-task-4-đổi-sản-phẩm-pricing--liteproelitehubs)
6. [TASK 5: Cập nhật Features Section](#6-task-5-cập-nhật-features-section)
7. [TASK 6: Cập nhật Chart Showcase Section](#7-task-6-cập-nhật-chart-showcase-section)
8. [TASK 7: Cập nhật LiveStream Section](#8-task-7-cập-nhật-livestream-section)
9. [TASK 8: Cập nhật Education Section — Tách thành 2 phần](#9-task-8-cập-nhật-education-section--tách-thành-2-phần)
10. [TASK 9: Thêm đa ngôn ngữ — 5 ngôn ngữ bắt buộc](#10-task-9-thêm-đa-ngôn-ngữ--5-ngôn-ngữ-bắt-buộc)
11. [TASK 10: Thêm Disclaimer trên mỗi trang](#11-task-10-thêm-disclaimer-trên-mỗi-trang)
12. [TASK 11: Thêm các trang mới (FAQ, Contact, Legal Terms)](#12-task-11-thêm-các-trang-mới-faq-contact-legal-terms)
13. [TASK 12: Cập nhật Footer](#13-task-12-cập-nhật-footer)
14. [TASK 13: Thay thế ảnh chart bằng ảnh khách cung cấp](#14-task-13-thay-thế-ảnh-chart-bằng-ảnh-khách-cung-cấp)
15. [TASK 14: Cập nhật Navbar](#15-task-14-cập-nhật-navbar)
16. [Tổng hợp file ảnh từ khách](#16-tổng-hợp-file-ảnh-từ-khách)
17. [Checklist cuối](#17-checklist-cuối)
18. [📄 NỘI DUNG CHI TIẾT TỪ 3 FILE DOCX](#18-nội-dung-chi-tiết-từ-3-file-docx-đã-đọc)
19. [🔄 CẬP NHẬT CÁC TASK DỰA TRÊN DOCX (OVERRIDE)](#19-cập-nhật-các-task-dựa-trên-nội-dung-docx)
20. [✅ Checklist bổ sung từ DOCX](#20-checklist-bổ-sung-từ-docx)

---

## 1. Tổng quan yêu cầu

### Từ Mail 1 ([mail1.txt](file:///f:/STUDY/trading-view/Ticket-trading-view/Require-text-from-mail/mail1.txt)):

- ✅ Dùng **logo của khách** (không phải logo 4 ô vuông CSS hiện tại)
- ✅ Background đang **bị mờ/sương mù** → cần **clear, trong suốt hơn, như mặt nước**
- ✅ **Hero Section**: Giữ layout hiện tại, dùng **Lite chart**
- ✅ Buttons: `Access Lite version` (button) + `Watch demo on Youtube`
- ✅ Thêm link **Education & Trading** → link đến trang education
- ✅ Section "Everything you need to Trade Smarter" → **chỉ update nội dung cho phù hợp**
- ✅ Section "See the 4Color System in action" → **chỉ update cho phù hợp**
- ✅ Section "Watch the market live" → **chỉ update cho phù hợp**
- ✅ Cần **5 ngôn ngữ**: Mandarin, Cantonese, Arab, Spanish, English
- ✅ **Mỗi trang phải có Disclaimer** (văn bản cụ thể đã cung cấp)

### Từ Mail 2 ([mail2-text.txt](file:///f:/STUDY/trading-view/Ticket-trading-view/Require-text-from-mail/mail2/mail2-text.txt)):

- ✅ Trang **Education** → update (không tạo mới)
- ✅ Trang **Lite Free Access** → tách ra **2 trang riêng** (trang sản phẩm + trang education)
- ✅ Trang Hero page → phần sản phẩm hiển thị **4 sản phẩm: Lite/Pro/Elite/Hubs**
  - Thay cho Starter/Professional/Elite hiện tại

### Từ Screenshot tin nhắn:

- ✅ 4 sản phẩm: **Lite / Pro / Elite / Hubs** — 1 đã phát hành (Lite), 3 cái đang nghiệm thu
- ✅ 4-5 bài trang **Education** (trang dạy người ta tự học, không mở lớp dạy ai)
- ✅ Link Youtube làm demo
- ✅ **FAQ**, **Contact**, **Legal Terms** → link cần bản
- ✅ Không cần PHỤ LỤC D

---

## 2. TASK 1: Thay đổi Logo

> [!IMPORTANT]
> Khách yêu cầu dùng logo chính thức của 4Color System, KHÔNG phải logo 4 ô vuông CSS hiện tại.

### Ảnh logo mới:

![Logo 4Color System](C:\Users\Administrator.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\logo-4colorsystem.png)

### File nguồn:

- [Ticket-trading-view/image/logo-4colorsystem.png](file:///f:/STUDY/trading-view/Ticket-trading-view/image/logo-4colorsystem.png)

### Các file cần sửa:

#### 2.1. Navbar — [src/components/Navbar/Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx)

- **Dòng 54-67**: Thay toàn bộ block logo CSS (4 ô vuông) bằng thẻ `<img>`
- **Hiện tại** (SAI):

```jsx
<div className={styles.logoIcon}>
  <span className={styles.logoSquare} style={{ background: '#3A86FF' }} />
  <span className={styles.logoSquare} style={{ background: '#00F5A0' }} />
  <span className={styles.logoSquare} style={{ background: '#FF6B6B' }} />
  <span className={styles.logoSquare} style={{ background: '#FFD700' }} />
</div>
<span className={`${styles.logoText} notranslate`}>4Color System</span>
```

- **Sửa thành**:

```jsx
<img
  src="/images/logo-4colorsystem.png"
  alt="4Color System™"
  className={styles.logoImg}
  height={40}
/>
<span className={`${styles.logoText} notranslate`}>4Color System™</span>
```

#### 2.2. Footer — [src/components/Footer/Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)

- **Dòng 74-82**: Cùng thay đổi tương tự Navbar logo
- Thay block 4 ô vuông bằng `<img src="/images/logo-4colorsystem.png" ... />`

#### 2.3. Copy file ảnh vào thư mục public:

```bash
# Tạo thư mục nếu chưa có
mkdir -p f:\STUDY\trading-view\public\images

# Copy logo
copy "f:\STUDY\trading-view\Ticket-trading-view\image\logo-4colorsystem.png" "f:\STUDY\trading-view\public\images\logo-4colorsystem.png"
```

#### 2.4. Cập nhật favicon trong [index.html](file:///f:/STUDY/trading-view/index.html):

- **Dòng 5**: Thay favicon URL bằng logo mới

```html
<link rel="icon" type="image/png" href="/images/logo-4colorsystem.png" />
```

---

## 3. TASK 2: Sửa Background

> [!WARNING]
> Khách nói: "Background có vẻ hơi mờ kiểu bị Sương mù phủ, em cho nó nhìn clear trong suốt hơn như mặt nước"

### File cần sửa: [src/styles/globals.scss](file:///f:/STUDY/trading-view/src/styles/globals.scss)

#### 3.1. Giảm opacity/blur của background orbs:

- Tìm class `.orb`, `.orb-1`, `.orb-2`, `.orb-3`, `.orb-4`
- **Giảm opacity** xuống khoảng `0.05 - 0.08` (hiện tại có vẻ quá cao gây mờ)
- **Giảm filter blur** nếu có

#### 3.2. Sửa ThreeBackground:

- File: [src/components/ThreeBackground/ThreeBackground.jsx](file:///f:/STUDY/trading-view/src/components/ThreeBackground/ThreeBackground.jsx)
- Giảm opacity tổng thể của scene hoặc particles
- Mục tiêu: nền tối clear, trong suốt, có hiệu ứng tinh tế nhưng KHÔNG bị mờ/sương mù

#### 3.3. Cập nhật MouseSpotlight:

- File: [src/components/MouseSpotlight/MouseSpotlight.jsx](file:///f:/STUDY/trading-view/src/components/MouseSpotlight/MouseSpotlight.jsx)
- Giảm intensity nếu đang góp phần tạo hiệu ứng mờ

#### 3.4. Yêu cầu cụ thể:

| Thuộc tính              | Hiện tại (vấn đề)      | Yêu cầu mới                    |
| ----------------------- | ---------------------- | ------------------------------ |
| Background orbs opacity | Quá cao → tạo sương mù | Giảm xuống 0.05-0.08           |
| Background blur         | Quá mạnh               | Giảm hoặc bỏ                   |
| ThreeBackground opacity | Tạo layer mờ           | Giảm opacity scene             |
| Hiệu ứng tổng thể       | Mờ, sương mù           | Clear, trong suốt như mặt nước |

---

## 4. TASK 3: Sửa Hero Section

### File cần sửa: [src/components/Hero/HeroLeft.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroLeft.jsx)

#### 4.1. Thay đổi Headline (Dòng 116-125):

- **Giữ nguyên**: "Master the Market with **4Color System™**"
- Nhưng thêm "™" sau 4Color System nếu chưa có ✅ (hiện đã có `4Color System` — cần thêm ™)

#### 4.2. Thay đổi CTA Buttons (Dòng 134-172):

| Hiện tại (SAI)                      | Yêu cầu mới (ĐÚNG)                          |
| ----------------------------------- | ------------------------------------------- |
| Button 1: "Explore Education"       | "Access Lite version"                       |
| Button 2: "Watch Demo" (không link) | "Watch demo on Youtube" (link YouTube thực) |

```jsx
// Button 1: Primary
<span>Access Lite version</span>

// Button 2: Secondary — cần thay onClick để mở link YouTube thực
<a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener noreferrer">
  <PlayCircle size={20} />
  <span>Watch demo on Youtube</span>
</a>
```

#### 4.3. Thêm link "Education & Trading":

- Dưới 2 nút CTA, thêm 1 link mới:

```jsx
<motion.a
  href="#education"
  className={styles.educationLink}
  variants={itemVariants}
>
  Education & Trading →
</motion.a>
```

#### 4.4. Sửa Subheadline (Dòng 128-131):

- Cập nhật nội dung cho phù hợp hơn với tên "Lite":

```
"See the pressure, not just the patterns. Built for market validation —
the ultimate education platform for serious traders who demand an edge."
```

→ Kiểm tra xem có cần thay đổi gì không theo nội dung DOCX

#### 4.5. Sửa Hero Chart — Dùng Lite chart:

### File cần sửa: [src/components/Hero/HeroRightChart.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroRightChart.jsx)

- **Hiện tại**: Chart có tiêu đề "BTC / USD" + "Binance · Perpetual"
- **Yêu cầu**: Dùng ảnh **Lite chart** thay vì chart tự vẽ bằng SVG
- **Ảnh Lite chart** cần hiển thị:

![Lite Sample Chart](C:\Users\Administrator.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\Lite_Sample_chart.jpg)

**Lựa chọn thực hiện**:

- **Phương án A**: Giữ chart SVG nhưng sửa tiêu đề thành "4-Color + FVG Lite" (tên indicator như ảnh)
- **Phương án B** (khuyến nghị): Thay chart SVG bằng ảnh tĩnh Lite chart với overlay animation nhẹ

> [!TIP]
> Nếu chọn Phương án B, cần copy ảnh vào `public/images/` và dùng `<img>` tag với CSS animation nhẹ (floating effect).

---

## 5. TASK 4: Đổi sản phẩm Pricing — Lite/Pro/Elite/Hubs

> [!IMPORTANT]
> Hiện tại có 3 plans: **Starter / Professional / Elite**
> Khách yêu cầu đổi thành 4 plans: **Lite / Pro / Elite / Hubs**

### File cần sửa: [src/components/FinalCTA/FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)

#### 5.1. Sửa mảng `plans` (Dòng 8-62):

**Hiện tại** (SAI — 3 plans):

```js
const plans = [
  { name: 'Starter', price: '$97', ... },
  { name: 'Professional', price: '$297', ... },
  { name: 'Elite', price: '$997', ... },
];
```

**Sửa thành** (ĐÚNG — 4 plans):

```js
const plans = [
  {
    name: "Lite",
    price: "FREE",
    priceNum: 0,
    period: "Free Access",
    description: "Start with the basics — free forever",
    features: [
      "4-Color + FVG Lite Indicator",
      "Basic Color Zone Identification",
      "Community Forum Access",
      "Education Hub Access",
      "Mobile App Access",
    ],
    popular: false,
    cta: "Access Free",
    badge: "PUBLIC", // Đã phát hành
  },
  {
    name: "Pro",
    price: "$297",
    priceNum: 297,
    period: "one-time",
    description: "Professional-grade tools for serious traders",
    features: [
      "All Lite Features",
      "Dynamic FVG Logic — Pro Indicator",
      "FVG Status & Imbalance Tracking",
      "Takeover State Detection",
      "Money Flow Index",
      "Liquidiy Pressure (AD)",
      "Priority Support",
    ],
    popular: true,
    cta: "Get Pro",
    badge: "COMING SOON", // Đang nghiệm thu
  },
  {
    name: "Elite",
    price: "$997",
    priceNum: 997,
    period: "one-time",
    description: "Full access with advanced analytics",
    features: [
      "All Pro Features",
      "Dynamic FVG Lifecycle Elite",
      "Stress Test Confirmed Labels",
      "Rolling & Cumulative Delta",
      "Advanced Takeover State",
      "1-on-1 Mentorship",
      "Lifetime Updates",
    ],
    popular: false,
    cta: "Go Elite",
    badge: "COMING SOON", // Đang nghiệm thu
  },
  {
    name: "Hubs",
    price: "Contact",
    priceNum: null,
    period: "Custom",
    description: "FX Terminal Hub — Multi-asset dashboard",
    features: [
      "All Elite Features",
      "FX Terminal Hub Bitcoin v2",
      "Multi-Symbol Dashboard",
      "Real-Time Rate & Pressure Tracking",
      "Session-Based Analysis",
      "Institutional-Grade Data",
      "Custom API Integration",
    ],
    popular: false,
    cta: "Contact Us",
    badge: "COMING SOON", // Đang nghiệm thu
  },
];
```

#### 5.2. Thêm badge hiển thị trạng thái (PUBLIC / COMING SOON):

- Plan **Lite**: hiển thị badge `PUBLIC` màu xanh lá
- Plans **Pro, Elite, Hubs**: hiển thị badge `COMING SOON` màu vàng

#### 5.3. Layout 4 cột:

- Hiện tại grid 3 cột → sửa thành **4 cột** trên desktop
- CSS trong [FinalCTA.module.scss](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.module.scss): sửa `.plans` grid columns từ 3 → 4

#### 5.4. Ảnh minh họa cho mỗi plan:

Mỗi plan card nên có ảnh sample chart tương ứng ở phía trên:

| Plan  | Ảnh sử dụng        | File nguồn                                                                                                                               |
| ----- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Lite  | Lite Sample Chart  | [Ticket-trading-view/image/Lite Sample chart.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Lite%20Sample%20chart.jpg)     |
| Pro   | Pro Sample Chart   | [Ticket-trading-view/image/Pro Sample chart.jpeg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Pro%20Sample%20chart.jpeg)     |
| Elite | Elite Sample Chart | [Ticket-trading-view/image/ELite Sample Chart.jpeg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/ELite%20Sample%20Chart.jpeg) |
| Hubs  | FX Terminal Hub    | [Ticket-trading-view/image/FX.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FX.jpg)                                       |

**Ảnh tham khảo từ khách**:

```carousel
![Lite Sample Chart](C:\Users\Administrator\.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\Lite_Sample_chart.jpg)
<!-- slide -->
![Pro Sample Chart](C:\Users\Administrator\.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\Pro_Sample_chart.jpeg)
<!-- slide -->
![Elite Sample Chart](C:\Users\Administrator\.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\Elite_Sample_Chart.jpeg)
<!-- slide -->
![FX Terminal Hubs](C:\Users\Administrator\.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\FX.jpg)
```

---

## 6. TASK 5: Cập nhật Features Section

> Khách nói: "Everything you need to Trade Smarter — (Good) chỉ update cho phù hợp thôi"

### File cần sửa: [src/components/Features/Features.jsx](file:///f:/STUDY/trading-view/src/components/Features/Features.jsx)

#### 5.1. Cập nhật nội dung features:

- **Giữ nguyên layout** — chỉ update nội dung/mô tả cho phù hợp với 4 sản phẩm mới
- Cập nhật feature descriptions để đề cập tới:
  - **4-Color + FVG** indicator
  - **Dynamic FVG Logic** (Pro/Elite)
  - **Stress Test** (Elite)
  - **FX Terminal Hub** (Hubs)
  - **Orderflow / Delta Flow** concepts

#### 5.2. Sửa feature đầu tiên (4-Zone Color System):

```js
{
  title: '4-Color System™',
  description: 'Our proprietary methodology uses Accumulation, Expansion, Distribution, and Reset phases — making market cycles instantly visible through 4 distinct colors.',
}
```

---

## 7. TASK 6: Cập nhật Chart Showcase Section

> Khách nói: "See the 4Color System in action — (good) chỉ update cho phù hợp thôi"

### File cần sửa: [src/components/ChartShowcase/ChartShowcase.jsx](file:///f:/STUDY/trading-view/src/components/ChartShowcase/ChartShowcase.jsx)

#### 6.1. Thêm ảnh chart thực tế:

| Vị trí                     | Ảnh                                           | File                                                                                                         |
| -------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Chart chính (SVG hiện tại) | Hoặc giữ BTC/USD chart + thêm ảnh FVG overlay | [Ticket-trading-view/image/Bitcoin.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Bitcoin.jpg) |
| Education overlay          | Stock Market Ecosystem diagram                | [Ticket-trading-view/image/FVG.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FVG.jpg)         |

#### 6.2. Cân nhắc thay ảnh FVG làm sample:

![FVG Chart - Stock Market Ecosystem](C:\Users\Administrator.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\FVG.jpg)

- Ảnh này minh họa hệ sinh thái FVG (Fair Value Gap) — là concept chính của hệ thống
- Có thể dùng làm ảnh nền hoặc overlay trong Chart Showcase section

#### 6.3. Giữ real-time Binance data:

- Chart SVG với candlestick thực vẫn **giữ nguyên** — chỉ update label/mô tả
- Cập nhật zone names phù hợp hơn:
  - "Resistance Zone" → "Accumulation Zone"
  - "Bullish Zone" → "Expansion Zone"
  - "Neutral Zone" → "Distribution Zone"
  - "Support Zone" → "Reset Zone"

---

## 8. TASK 7: Cập nhật LiveStream Section

> Khách nói: "Watch the market live — (good) chỉ update cho phù hợp thôi"

### File cần sửa: [src/components/LiveStream/LiveStream.jsx](file:///f:/STUDY/trading-view/src/components/LiveStream/LiveStream.jsx)

#### 7.1. Kiểm tra YouTube Video ID:

- **Hiện tại**: `VIDEO_ID = '9M93_6S9TaQ'`
- Cần xác nhận với khách đây có phải video demo chính thức không
- Nếu khách cung cấp video mới → update VIDEO_ID

#### 7.2. Update nội dung "What you'll see live":

```js
[
  "Real-time 4-Color zone mapping",
  "FVG identification & validation",
  "Orderflow & Delta analysis",
  "Stress Test confirmation signals",
  "Live education & Q&A",
];
```

---

## 9. TASK 8: Cập nhật Education Section — Tách thành 2 phần

> [!IMPORTANT]
> **Mail 2**: "1 trang Education thì update, còn trang Lite free access thì chia ra làm 2 trang vì ko phù hợp cho trang sản phẩm và liên quan tới education nhiều hơn"
>
> **Tin nhắn**: "4 bài cho Education. Trang dạy người ta tự học, không mở lớp dạy ai"

### 8.1. Trang Education cần thay đổi:

#### File cần sửa: [src/components/Education/Education.jsx](file:///f:/STUDY/trading-view/src/components/Education/Education.jsx)

**Hiện tại** (SAI):

- 3 courses cứng: "Foundations of 4Color Trading", "Advanced Zone Strategies", "Risk Management Mastery"
- Dùng ảnh Unsplash stock
- Label: "Education Hub" với "Learn to Trade Like a Professional"

**Sửa thành**:

- **4² bài Education** (theo yêu cầu "4 bài cho Education"):
  1. Foundations of 4Color System
  2. Understanding FVG (Fair Value Gap)
  3. Dynamic FVG Logic & Orderflow
  4. Stress Test & Risk Management
- Dùng **ảnh chart từ khách** thay Unsplash:

| Bài   | Ảnh sử dụng          | File                                                                                                                                       |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Bài 1 | Lite Education Chart | [Ticket-trading-view/image/Lite Education Chart.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Lite%20Education%20Chart.jpg) |
| Bài 2 | FVG Ecosystem        | [Ticket-trading-view/image/FVG.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FVG.jpg)                                       |
| Bài 3 | Bitcoin Chart        | [Ticket-trading-view/image/Bitcoin.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Bitcoin.jpg)                               |
| Bài 4 | Cover Art (a.jpg)    | [Ticket-trading-view/image/a.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/a.jpg)                                           |

![Lite Education Chart](C:\Users\Administrator.gemini\antigravity\brain\3cf226f1-af1b-4a35-9147-7e67a09a4b22\Lite_Education_Chart.jpg)

- Cập nhật mô tả: **"Trang dạy tự học, không mở lớp"** → tone giáo dục tự hướng dẫn
- Sửa title: "Learn to Trade Like a Professional" → "Self-Paced Trading Education"
- Sửa subtitle: Nhấn mạnh tự học, tự nghiên cứu

### 8.2. Tách nội dung Lite Free Access ra trang riêng:

- **Trang hiện tại kết hợp cả sản phẩm Lite + education** → cần **tách**:
  - **Trang Products** (FinalCTA section): Chỉ chứa 4 sản phẩm Lite/Pro/Elite/Hubs
  - **Trang Education** (Education section): Chỉ chứa nội dung giáo dục

> [!NOTE]
> Hiện tại website là single-page. Nếu cần trang riêng (multi-page), cần thêm **React Router** hoặc tạo anchor sections rõ ràng hơn. Xác nhận với khách trước khi implement routing.

---

## 10. TASK 9: Thêm đa ngôn ngữ — 5 ngôn ngữ bắt buộc

> [!IMPORTANT]
> Khách yêu cầu **5 ngôn ngữ bắt buộc**: Mandarin, Cantonese, Arab, Spanish, English

### File cần sửa: [src/components/Navbar/Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx)

#### 9.1. Cập nhật mảng `languages` (Dòng 15-19):

**Hiện tại** (SAI — chỉ 3 ngôn ngữ sai):

```js
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];
```

**Sửa thành** (ĐÚNG — 5 ngôn ngữ theo yêu cầu):

```js
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-CN", name: "Mandarin (中文)", flag: "🇨🇳" },
  { code: "zh-TW", name: "Cantonese (粵語)", flag: "🇭🇰" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];
```

> [!NOTE]
> Google Translate dùng `zh-CN` cho Mandarin (Simplified Chinese) và `zh-TW` cho Traditional Chinese (Cantonese thường dùng Traditional). Cantonese chính xác hơn có thể dùng `zh-TW` hoặc `yue` tùy Google Translate support.

#### 9.2. Cập nhật i18n locale files (nếu dùng):

- Hiện tại có 12 locale files nhưng **không thực sự được sử dụng** bởi components
- Google Translate Widget đang xử lý translation
- Nếu cần: thêm locale files cho `ar.json` (Arabic) nếu chưa có
- Locale hiện tại: en, vi, es, fr, de, pt, zh, ja, ko, id, th, ru
- **Cần thêm**: Không cần thêm locale files nếu dùng Google Translate
- Quyết định cuối: không thêm, chỉ dùng google translate

#### 9.3. Xử lý RTL cho Arabic:

- Arabic (ar) là ngôn ngữ **right-to-left** (RTL)
- Cần thêm CSS support cho RTL layout:

```css
html[dir="rtl"] {
  /* RTL overrides */
  .navbar {
    flex-direction: row-reverse;
  }
  /* ... thêm các override cần thiết */
}
```

- Khi chọn Arabic, set `document.documentElement.dir = 'rtl'`

---

## 11. TASK 10: Thêm Disclaimer trên mỗi trang

> [!IMPORTANT]
> Khách yêu cầu **mỗi trang** phải có disclaimer.

### Văn bản Disclaimer (chính xác từ email khách):

```
Disclaimer:
Trading involves substantial risk of loss and is not suitable for all investors.
The content, tools, and signals provided on this website are for educational and
informational purposes only and do not constitute financial advice, recommendations,
or a solicitation to buy or sell any financial instruments. Past performance is not
indicative of future results. Users are responsible for their own trading decisions.
```

### 10.1. Thêm Disclaimer vào Footer:

#### File: [src/components/Footer/Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)

- **Dòng 198-200**: Hiện tại chỉ có 1 dòng ngắn:

```jsx
<p className={styles.disclaimer}>
  Trading involves substantial risk. Past performance does not guarantee future
  results.
</p>
```

- **Sửa thành** (nội dung ĐÚNG - đầy đủ):

```jsx
<div className={styles.disclaimerFull}>
  <h4>Disclaimer:</h4>
  <p>
    Trading involves substantial risk of loss and is not suitable for all
    investors. The content, tools, and signals provided on this website are for
    educational and informational purposes only and do not constitute financial
    advice, recommendations, or a solicitation to buy or sell any financial
    instruments. Past performance is not indicative of future results. Users are
    responsible for their own trading decisions.
  </p>
</div>
```

### 10.2. Style cho Disclaimer:

```scss
.disclaimerFull {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);

  h4 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
    line-height: 1.6;
  }
}
```

---

## 12. TASK 11: Thêm các trang mới (FAQ, Contact, Legal Terms)

> Tin nhắn khách: "FAQ, Contact....Legals terms..link cần bản"

### 11.1. Thêm trang FAQ:

- Tạo component: `src/components/FAQ/FAQ.jsx` + `FAQ.module.scss`
- Nội dung: Accordion-style FAQ cho các câu hỏi phổ biến
- FAQ gợi ý:
  - "What is the 4Color System?"
  - "What is FVG (Fair Value Gap)?"
  - "Is this suitable for beginners?"
  - "What products are available?"
  - "How do I install the indicators?"
  - "Is there a free version?"

### 11.2. Thêm trang Contact:

- Tạo component: `src/components/Contact/Contact.jsx` + `Contact.module.scss`
- Form đơn giản: Name, Email, Subject, Message
- Hoặc chỉ hiển thị: Email liên hệ: `support@4colorsystem.com`

### 11.3. Thêm trang Legal Terms:

- Tạo component: `src/components/Legal/Legal.jsx` + `Legal.module.scss`
- Bao gồm:
  - Privacy Policy
  - Terms of Service
  - Risk Disclosure
- Nội dung placeholder — khách sẽ cung cấp nội dung chính thức

### 11.4. Routing (nếu cần multi-page):

- **Option A — Single-page sections**: Thêm các section vào [App.jsx](file:///f:/STUDY/trading-view/src/App.jsx) dưới dạng anchor sections (không cần router)
- **Option B — React Router** (khuyến nghị nếu muốn URL riêng):
  - `npm install react-router-dom`
  - Tạo routes: `/faq`, `/contact`, `/legal`, `/education`

---

## 13. TASK 12: Cập nhật Footer

### File cần sửa: [src/components/Footer/Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)

#### 12.1. Cập nhật footer links (Dòng 15-43):

**Hiện tại**:

```js
product: ["Features", "Pricing", "Education", "Testimonials", "API Access"];
resources: [
  "Documentation",
  "Video Tutorials",
  "Blog",
  "Webinars",
  "Trading Glossary",
];
company: ["About Us", "Careers", "Press Kit", "Partners", "Contact"];
legal: [
  "Privacy Policy",
  "Terms of Service",
  "Risk Disclosure",
  "Cookie Policy",
];
```

**Sửa thành** (theo yêu cầu khách):

```js
product: [
  { name: 'Lite (Free)',  href: '#cta' },
  { name: 'Pro',          href: '#cta' },
  { name: 'Elite',        href: '#cta' },
  { name: 'Hubs',         href: '#cta' },
],
education: [
  { name: 'Education Hub',  href: '#education' },
  { name: 'Video Tutorials', href: '#' },
  { name: 'Youtube Demo',    href: 'https://youtube.com/...' },
],
company: [
  { name: 'About Us',  href: '#' },
  { name: 'Contact',   href: '#contact' },
  { name: 'FAQ',       href: '#faq' },
],
legal: [
  { name: 'Privacy Policy',   href: '#legal' },
  { name: 'Terms of Service', href: '#legal' },
  { name: 'Risk Disclosure',  href: '#legal' },
],
```

#### 12.2. Xóa items không cần:

- Xóa: `API Access`, `Blog`, `Webinars`, `Trading Glossary`, `Careers`, `Press Kit`, `Partners`, `Cookie Policy`
- Giữ/thêm: `FAQ`, `Contact`, `Legal Terms`, `Youtube Demo`

---

## 14. TASK 13: Thay thế ảnh chart bằng ảnh khách cung cấp

### Copy TẤT CẢ ảnh vào `public/images/`:

```bash
copy "Ticket-trading-view/image/Bitcoin.jpg"           "public/images/Bitcoin.jpg"
copy "Ticket-trading-view/image/ELite Sample Chart.jpeg" "public/images/Elite-Sample-Chart.jpeg"
copy "Ticket-trading-view/image/FVG.jpg"                "public/images/FVG.jpg"
copy "Ticket-trading-view/image/FX.jpg"                 "public/images/FX.jpg"
copy "Ticket-trading-view/image/Lite Education Chart.jpg" "public/images/Lite-Education-Chart.jpg"
copy "Ticket-trading-view/image/Lite Sample chart.jpg"  "public/images/Lite-Sample-Chart.jpg"
copy "Ticket-trading-view/image/Pro Sample chart.jpeg"  "public/images/Pro-Sample-Chart.jpeg"
copy "Ticket-trading-view/image/a.jpg"                  "public/images/hero-cover.jpg"
copy "Ticket-trading-view/image/logo-4colorsystem.png"  "public/images/logo-4colorsystem.png"
```

### Mapping sử dụng ảnh:

| Ảnh file                                                                                               | Dùng ở đâu                              | Component                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [logo-4colorsystem.png](file:///f:/STUDY/trading-view/Ticket-trading-view/image/logo-4colorsystem.png) | Navbar + Footer logo                    | [Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx), [Footer.jsx](file:///f:/STUDY/trading-view/src/components/Footer/Footer.jsx)                               |
| `Lite-Sample-Chart.jpg`                                                                                | Hero Section chart + Pricing Lite card  | [HeroRightChart.jsx](file:///f:/STUDY/trading-view/src/components/Hero/HeroRightChart.jsx), [FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)           |
| `Pro-Sample-Chart.jpeg`                                                                                | Pricing Pro card                        | [FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)                                                                                                       |
| `Elite-Sample-Chart.jpeg`                                                                              | Pricing Elite card                      | [FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)                                                                                                       |
| [FX.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FX.jpg)                               | Pricing Hubs card                       | [FinalCTA.jsx](file:///f:/STUDY/trading-view/src/components/FinalCTA/FinalCTA.jsx)                                                                                                       |
| `Lite-Education-Chart.jpg`                                                                             | Education bài 1                         | [Education.jsx](file:///f:/STUDY/trading-view/src/components/Education/Education.jsx)                                                                                                    |
| [FVG.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FVG.jpg)                             | Education bài 2 + Chart Showcase        | [Education.jsx](file:///f:/STUDY/trading-view/src/components/Education/Education.jsx), [ChartShowcase.jsx](file:///f:/STUDY/trading-view/src/components/ChartShowcase/ChartShowcase.jsx) |
| [Bitcoin.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Bitcoin.jpg)                     | Education bài 3                         | [Education.jsx](file:///f:/STUDY/trading-view/src/components/Education/Education.jsx)                                                                                                    |
| `hero-cover.jpg` (a.jpg)                                                                               | Education bài 4 hoặc background element | [Education.jsx](file:///f:/STUDY/trading-view/src/components/Education/Education.jsx)                                                                                                    |

---

## 15. TASK 14: Cập nhật Navbar

### File cần sửa: [src/components/Navbar/Navbar.jsx](file:///f:/STUDY/trading-view/src/components/Navbar/Navbar.jsx)

#### 14.1. Cập nhật navigation links (Dòng 7-12):

**Hiện tại**:

```js
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Charts", href: "#charts" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
];
```

**Sửa thành** (theo yêu cầu khách):

```js
const navLinks = [
  { label: "Products", href: "#cta" },
  { label: "Education", href: "#education" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
```

#### 14.2. CTA Button:

- **Hiện tại**: "Get Started" → Sửa thành: **"Access Lite — Free"** hoặc **"Get Started Free"**

---

## 16. Tổng hợp file ảnh từ khách

| #   | File gốc                                                                                               | Nội dung                                         | Kích thước |
| --- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ---------- |
| 1   | [logo-4colorsystem.png](file:///f:/STUDY/trading-view/Ticket-trading-view/image/logo-4colorsystem.png) | Logo 4Color System™ (vòng tròn 4 màu AERD)       | 220 KB     |
| 2   | [a.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/a.jpg)                                 | Cover art — xe đua với 4 màu + traffic light     | 1.1 MB     |
| 3   | [Bitcoin.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/Bitcoin.jpg)                     | Bitcoin chart với FVG Terminal Hub dashboard     | 307 KB     |
| 4   | `ELite Sample Chart.jpeg`                                                                              | Dynamic FVG Lifecycle Elite indicator screenshot | 359 KB     |
| 5   | [FVG.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FVG.jpg)                             | Stock Market Ecosystem diagram (FVG flow)        | 2.8 MB     |
| 6   | [FX.jpg](file:///f:/STUDY/trading-view/Ticket-trading-view/image/FX.jpg)                               | FX Terminal Hub — multi-pair Forex dashboard     | 359 KB     |
| 7   | `Lite Education Chart.jpg`                                                                             | 4-Color + FVG Lite with annotations (education)  | 925 KB     |
| 8   | `Lite Sample chart.jpg`                                                                                | 4-Color + FVG Lite indicator — clean chart       | 677 KB     |
| 9   | `Pro Sample chart.jpeg`                                                                                | Dynamic FVG Logic Pro Version indicator          | 332 KB     |

---

## 17. Checklist cuối

### UI Changes:

- [x] Thay logo CSS (4 ô vuông) → ảnh [logo-4colorsystem.png](file:///f:/STUDY/trading-view/Ticket-trading-view/image/logo-4colorsystem.png) ở Navbar + Footer
- [x] Favicon thay bằng logo mới
- [x] Giảm opacity/blur background orbs + ThreeBackground → clear, không sương mù
- [x] Hero CTA buttons: "Access Lite version" + "Watch demo on Youtube"
- [x] Thêm link "Education & Trading" dưới CTA buttons
- [x] Hero chart: sử dụng ảnh Lite chart thay vì SVG animation
- [x] Pricing cards: 4 plans (Lite/Pro/Elite/Hubs) thay vì 3 (Starter/Professional/Elite)
- [x] Pricing cards: thêm ảnh chart mẫu cho mỗi plan
- [x] Pricing cards: badge PUBLIC/COMING SOON
- [x] Grid layout 4 cột cho pricing
- [x] Education: 4 bài courses, ảnh chart thay Unsplash
- [x] Education: tone giáo dục tự học, không lớp học
- [x] Footer: links updated — thêm FAQ, Contact, Legal
- [x] Footer: Disclaimer đầy đủ văn bản
- [x] Navbar: links updated — Products, Education, FAQ, Contact
- [x] Navbar: CTA → "Access Lite — Free"

### Content Changes:

- [x] Tên sản phẩm: Starter→Lite, Professional→Pro (giữ Elite), thêm Hubs
- [x] Features: update description phù hợp sản phẩm mới
- [x] Chart Showcase: zone names → Accumulation/Expansion/Distribution/Reset
- [x] LiveStream: update "What you'll see live" content
- [x] Disclaimer thêm vào footer (mọi trang)

### Ngôn ngữ:

- [x] Navbar language dropdown: 5 ngôn ngữ (EN, Mandarin, Cantonese, Arab, Spanish)
- [x] Xóa Vietnamese + French khỏi dropdown
- [x] RTL support cho Arabic (nếu cần)

### Trang mới / Section mới:

- [x] FAQ section/page
- [x] Contact section/page
- [x] Legal Terms section/page

### File/Asset:

- [x] Copy tất cả 9 ảnh từ `Ticket-trading-view/image/` → `public/images/`
- [x] Tạo thư mục `public/images/` nếu chưa có

### Thư viện cần thêm:

- [ ] `react-router-dom` — nếu chọn multi-page routing (tùy chọn)
- [x] Không cần thêm thư viện chart mới — giữ SVG chart + ảnh tĩnh

---

## 18. NỘI DUNG CHI TIẾT TỪ 3 FILE DOCX (ĐÃ ĐỌC)

> [!IMPORTANT]
> Dưới đây là nội dung **chính xác** được trích xuất từ 3 file DOCX của khách. Dev/Agent **PHẢI** dùng nội dung này khi implement.

### 18.1. DOCX: "LITE — Free Access" (10 trang)

#### Trang 1 — Home Page / Hero Section:

**Headline chính xác**:

- **"4-Color System™"**
- **"A Visual Framework for Reading Market Behavior"**
- "Understand liquidity shifts, execution context, and structural pressure through a simplified 4-Color price model."

**LITE — OFFICIAL ELEMENTS** (hiển thị ảnh Lite chart kèm):

- "Powered by 4Color Liquidity States"
- _"The 4-Color System™ turns complex price behavior into a readable structure."_ (chữ đỏ)
- "Available to all TradingView users."
- "Lite Version – Free Access"

**Links trên page**:

- Link TradingView: `https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/`
- "Join Pro Waitlist"
- "Apply for Elite"

#### Trang 2 — Mô tả Lite:

- "Built for traders who care about context, control, and survival — not alerts."
- "Purpose: Learn to read control before imbalance."
- **"The Power of 4-Color System"**:
  - "Price shows **where**."
  - "4-Color shows **who**."
- **INTRO – Lite Version**:
  - "Dynamic FVG Logic – Lite (4-Color Based) is a price behavior reading system, not a direction-guessing indicator."
  - "It reads who is in control through candle color behavior."
- **It helps you**:
  - See quickly who's driving the market
  - Know whether price is real movement or a trap
  - Avoid trading when control is unclear
  - **No BUY / SELL**
  - **No entry signals**
  - **Observation only – real-time market state**

#### Trang 2-3 — 4-COLOR CANDLES — How to Read Them:

| Màu       | Tên                                         | Ý nghĩa                                                                                                                                                                         |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴 RED    | Active Selling Pressure                     | Sellers are in control. Price moves fast and decisively. Often appears after breakdowns, distribution, or traps. ⚠️ Multiple Reds = don't bottom-fish                           |
| 🟢 GREEN  | Active Buying Pressure                      | Buyers are stepping in for real. Price is being pushed, not dragged. Used to judge whether an up-move has real force. ⚠️ Green without follow-through = likely technical bounce |
| 🔵 BLUE   | Swing High / Resistance Zone (Accumulation) | Price is entering a previously controlled area. Common behaviors: Slowing down, Rejection, Short accumulation. ❌ Not a buy zone — observation zone                             |
| 🟡 YELLOW | Swing Low / Liquidity                       | Liquidity sweep area. False breaks are common. Often the start of a reaction. ❌ Not a safe bottom — force-testing zone                                                         |

#### Trang 3 — Links cuối Lite page:

- "Join Pro Waitlist link to Pro page"
- "Apply for Elite, link to Elite page"
- **System Page — "How it works"** → link đến section riêng
- **Chart Narrative (Timeline Story)** → section giải thích chart theo timeline

#### Trang 4 — Chart Narrative + Beginner Guide:

**Ảnh minh họa**: Chart có quote _"The breakout wasn't the signal. It was the result."_

**4-Color Liquidity Candle Code (Beginner Guide)** — BẢNG CHÍNH THỨC:
| Color | Meaning | What It Tells You |
|---|---|---|
| 🔴 Red | Bearish Pressure | Sellers are aggressive. Price is being pushed down. |
| 🟢 Green | Bullish Pressure | Buyers are stepping in fast. Momentum is upward. |
| 🔵 Blue | Accumulation / Resistance Test | Buyers absorbing supply near resistance. Often appears before breakout. |
| 🟡 Yellow | Liquidity Sweep / Transition | Market grabbing stops or shifting direction. Often appears during reversals. |

**Simple rule for beginners**:

- 🔴 Many Reds → Sellers control market
- 🟢 Many Greens → Buyers control market
- 🔵 Repeated Blues → Accumulation building
- 🟡 Yellow spikes → Liquidity events

#### Trang 5-10 — "How the Colors Tell the Market Story" (Timeline):

Chi tiết timeline từ 12:30 đến 15:41, mô tả từng phase:

- **12:30–13:00**: Distribution / Selling Pressure (🟡🔴🔴🔴 dominant) → Bearish
- **13:00–13:30**: Rebalancing Phase (🟢+🔵+🔴+🟡 mixed) → Market cooling down
- **13:30–14:00**: Buyers absorption by sellers → Market rebalancing inventory
- **14:00–14:47**: Early Demand (🟢+🟡+🔵+🔴 mixed) → Demand appears, not confirmed
- **14:48–15:14**: Accumulation / Absorption Zone (🔵 dominant) → Smart money building
- **15:18–15:21**: Liquidity Sweep (🔴 spike down) → Stop-loss orders triggered
- **15:22–15:34**: Internal Structure Shift (🔵 followed by 🟢) → Momentum shifting
- **15:35–15:37**: Pullback Confirmation (small 🔴 then 🔵 support) → Higher Low forms
- **15:38**: Expansion (🟢🟢🟢 strong sequence) → Market enters expansion mode
- **15:41**: Breakout — Strong 🟢 impulse → A Bullish FVG appears

**The Lesson** (cuối trang 10):

> "Price moves last. Liquidity moves first. Most traders only react to the breakout candle. The 4-Color Liquidity System shows the behaviour building before the breakout happens."

**Disclaimer** (cuối trang):

> "Trading involves substantial risk of loss and is not suitable for all investors..."

---

### 18.2. DOCX: "Education" (2 trang)

#### Nội dung chính — So sánh 3 phiên bản Lite / Pro / Elite:

**Lite — Market Context** → _"What's going on?"_

- Shows **who controls price** using the 4-Color Candle Logic
- Helps traders stop random guessing
- Prevents emotional trades
- **No imbalance logic**
- **No validation**
- **No timing**
- _Retail analogy: Watching store traffic and shelf movement before making business decisions._

**Pro — Pressure Confirmation** → _"Is this pressure real?"_

- Confirms **buying vs selling pressure**
- Detects **absorption behavior**
- Filters weak market moves
- Still **no FVG imbalance tracking**
- Still **no timing signals**
- _Retail analogy: Checking supplier stability and customer demand before ordering inventory._

**Elite — Execution Context** → _"Is this the right moment?"_

- Detects **Fair Value Gap (FVG) imbalance**
- Tracks **FVG Lifecycle**
- Identifies **trap vs takeover**
- Shows **when control actually shifts**
- This is where your **FVG Execution Logic™ (CFE)** actually operates.
- _Retail analogy: You know exactly when wholesalers stop dumping inventory and buyers start paying higher prices._

---

### 18.3. DOCX: "System Page — How it works" (11 trang)

> [!NOTE]
> File này chứa **nội dung giống LITE DOCX trang 4-10** nhưng dưới dạng TRANG RIÊNG "How it works" — có thêm phần CFE Sequence và mở rộng hơn.

**Title**: System Page — "How it works"
**Subtitle**: Chart Narrative (Timeline Story) _(chữ đỏ)_

Nội dung timeline giống Lite DOCX (12:30 → 15:41) + thêm phần:

**CFE Sequence** (cuối trang 10):

> Accumulation → Liquidity Sweep → Structure Shift → Buyer Control → Expansion

**Tip for New Traders**:

- 🔵 Blue appearing repeatedly
- 🔴 Red attempts failing
- 🟡 Yellow liquidity probes
- and price stays sideways
- ➡ That is classic accumulation behavior.

**The Key Structure Rule** (trang 11):

- During a bullish expansion you will often see: 🟢 impulse → 🔴 small pullback → 🟡 liquidity probe → 🟢 continuation
- As long as price keeps forming ➡ **Higher Lows** → expansion is healthy
- **Expansion does NOT mean** 🟢🟢🟢🟢 straight up
- **Real expansion looks like**: 🔵→🔴→🟡→🔵→🔴→🟡→🔵 (Small pullbacks and liquidity tests keep the trend alive)

**What Would Be a Warning?** Expansion becomes weak if:

- 🔴 Red candles start dominating
- Higher Lows break
- Blue absorption appears above resistance

---

## 19. CẬP NHẬT CÁC TASK DỰA TRÊN NỘI DUNG DOCX

> [!WARNING]
> Các task bên dưới **override** nội dung tương ứng ở Section 2-15 nếu có mâu thuẫn.

### 19.1. OVERRIDE TASK 3 — Hero Section (cập nhật từ DOCX Lite):

- **Headline**: `"4-Color System™"` + subtitle `"A Visual Framework for Reading Market Behavior"`
- **Subheadline CHÍNH XÁC**: `"Understand liquidity shifts, execution context, and structural pressure through a simplified 4-Color price model."`
- **Tagline**: `"Price shows where. 4-Color shows who."`
- **CTA Button 1**: `"Access Lite version"` → link TradingView: `https://www.tradingview.com/script/dWscMbbP-Four-Color-Order-Flow-System/`
- **CTA Button 2**: `"Watch demo on Youtube"`
- **Thêm links**: `"Join Pro Waitlist"` + `"Apply for Elite"`

### 19.2. OVERRIDE TASK 4 — Pricing Features (cập nhật từ DOCX Education):

Sửa lại features chính xác cho từng plan:

**Lite features** (CHÍNH XÁC):

```
- 4-Color Candle Logic (who controls price)
- Prevents emotional trades
- Real-time market state reading
- No BUY/SELL signals — observation only
- Available on TradingView — Free
```

**Pro features** (CHÍNH XÁC):

```
- All Lite features
- Buying vs selling pressure confirmation
- Absorption behavior detection
- Weak market move filtering
- No FVG imbalance tracking yet
- No timing signals yet
```

**Elite features** (CHÍNH XÁC):

```
- All Pro features
- Fair Value Gap (FVG) imbalance detection
- FVG Lifecycle tracking
- Trap vs takeover identification
- FVG Execution Logic™ (CFE)
- When control actually shifts
```

### 19.3. THÊM TASK MỚI — Tạo Section "How It Works" (từ DOCX System Page):

- **Tạo component mới**: `src/components/HowItWorks/HowItWorks.jsx` + `.module.scss`
- **Nội dung**: Timeline story kể lại 1 phiên trade 12:30→15:41
- **Bao gồm**:
  - 4-Color Candle Code bảng giải thích (Red/Green/Blue/Yellow)
  - Beginner rules (Many Reds = sellers, Many Greens = buyers, etc.)
  - Timeline chart narrative với các phase
  - CFE Sequence diagram
  - Quote: _"The breakout wasn't the signal. It was the result."_
  - Kết luận: _"Price moves last. Liquidity moves first."_
- **Vị trí**: Đặt SAU ChartShowcase, TRƯỚC Education trong `App.jsx`
- **Link từ Lite page**: "System Page — How it works" link đến section này

### 19.4. OVERRIDE TASK 8 — Education Section (cập nhật từ DOCX Education):

Thay vì 4 bài courses generic, dùng **so sánh 3 tier** Lite/Pro/Elite:

- **Bảng so sánh 3 cột**: Lite (Market Context) / Pro (Pressure Confirmation) / Elite (Execution Context)
- Mỗi cột có: tagline/câu hỏi chính, features, retail analogy
- **Tone**: Tự học, tự nghiên cứu — KHÔNG phải lớp học

---

## 20. Checklist bổ sung (từ DOCX)

- [x] Hero headline: "4-Color System™ — A Visual Framework for Reading Market Behavior"
- [x] Hero subheadline chính xác từ DOCX
- [x] Tagline "Price shows where. 4-Color shows who."
- [x] CTA Button 1 link đến TradingView script
- [x] Thêm "Join Pro Waitlist" + "Apply for Elite" links
- [x] 4-Color Candle Code bảng (Red/Green/Blue/Yellow) — component mới hoặc trong Features
- [x] Beginner rules section
- [x] Section "How It Works" — Timeline chart narrative (12:30→15:41)
- [x] CFE Sequence: Accumulation → Liquidity Sweep → Structure Shift → Buyer Control → Expansion
- [x] Quote: "The breakout wasn't the signal. It was the result."
- [x] Lesson: "Price moves last. Liquidity moves first."
- [x] Education page: bảng so sánh Lite/Pro/Elite với tagline + retail analogy
- [x] Lite features: "No BUY/SELL, No entry signals, Observation only"
- [x] Pro features: "Pressure confirmation, absorption behavior"
- [x] Elite features: "FVG imbalance, FVG Lifecycle, CFE Logic"

---

> **End of Task Document**
> Tổng cộng: **16 TASK chính** (14 gốc + 2 mới từ DOCX) | **~30+ files cần sửa/tạo** | **9 ảnh cần copy**
> Nội dung DOCX đã được trích xuất đầy đủ — **KHÔNG cần mở file DOCX nữa.**
