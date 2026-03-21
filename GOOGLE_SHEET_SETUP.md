# 📊 Hướng dẫn tích hợp Form → Google Sheet

> **Mục đích**: Khi user điền form trên website (Pro / Elite / Hubs Access), data sẽ gửi thẳng vào Google Sheet của khách.
> **Cần khách làm**: ~5 phút, chỉ cần gửi lại 1 URL.

---

## Bước 1 — Tạo Google Sheet

1. Vào [sheets.google.com](https://sheets.google.com) → tạo sheet mới
2. Đặt tên sheet ví dụ: `4Color Access Requests`
3. **Row 1 điền các header** (copy y hệt, đúng thứ tự):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Tier | TradingView Username | Email | Experience/Level | Market | Detail | Acknowledged |

---

## Bước 2 — Cài Apps Script

1. Trong sheet, click **Extensions → Apps Script**
2. Xóa toàn bộ code cũ có sẵn
3. Dán đoạn code sau vào:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.tier,
      data.tvUsername,
      data.email,
      data.experience || data.level || '',
      data.market || '',
      data.execution || data.interest || data.tvProfile || '',
      data.acknowledged ? 'Yes' : 'No'
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾) hoặc `Ctrl + S`

---

## Bước 3 — Deploy Web App

1. Click **Deploy → New deployment**
2. Click biểu tượng ⚙️ bên cạnh "Select type" → chọn **"Web app"**
3. Điền thông tin:
   - **Description**: `4Color Forms`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. Click **Authorize access** → đăng nhập Google → cho phép quyền truy cập
6. Copy **Web app URL** — trông như thế này:

```
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxx/exec
```

> ⚠️ **Lưu ý**: Mỗi lần chỉnh sửa code Apps Script, cần deploy lại (New deployment hoặc Manage deployments → Edit). URL có thể đổi.

---

## Bước 4 — Gửi URL cho dev

Gửi lại **Web app URL** (bước 3.6) là xong.

Dev sẽ cập nhật code website để form submit thẳng vào Sheet.

---

## Sau khi có URL — Dev làm gì

Thay `handleSubmit` trong `AccessFormModal` (Education.jsx):

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!agreed) return;
  setSubmitting(true);

  const payload = {
    tier: formKey,
    ...data,
    acknowledged: agreed,
  };

  try {
    await fetch('PASTE_WEB_APP_URL_HERE', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    showToast('Access request submitted successfully!', 'success');
    onClose();
  } catch {
    showToast('Something went wrong. Please try again.', 'error');
  } finally {
    setSubmitting(false);
  }
};
```

> **Lý do dùng `mode: 'no-cors'`**: Google Apps Script không trả về CORS header → fetch sẽ bị blocked nếu không dùng no-cors. Data vẫn ghi vào Sheet bình thường.

---

## Data mapping (field → cột Sheet)

| Field trong form | Cột Sheet |
|-----------------|-----------|
| `tier` | B — Tier |
| `tvUsername` | C — TradingView Username |
| `email` | D — Email |
| `experience` (Pro/Elite) hoặc `level` (Hubs) | E — Experience/Level |
| `market` | F — Market |
| `execution` / `interest` / `tvProfile` | G — Detail |
| checkbox acknowledged | H — Acknowledged |
