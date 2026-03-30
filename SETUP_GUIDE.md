# Setup Guide - 4Color System Trading Website

---

## ENGLISH VERSION

### Overview

This guide walks you through setting up a completely fresh machine to run the project locally — from installing Node.js to viewing the website in your browser.

The project uses: React 18, Vite 5, SASS, Three.js, Framer Motion, i18next.

---

### Step 1: Install Git

1. Go to https://git-scm.com/downloads
2. Download the installer for your operating system (Windows / macOS / Linux).
3. Run the installer and follow the default options.
4. After installation, open a terminal and verify:

```
git --version
```

You should see something like: `git version 2.x.x`

---

### Step 2: Install Node.js

1. Go to https://nodejs.org
2. Download the LTS version (recommended for most users).
3. Run the installer. Accept the default settings.
4. After installation, open a new terminal and verify both Node.js and npm are installed:

```
node --version
npm --version
```

You should see version numbers for both. Node.js 18 or higher is recommended.

---

### Step 3: Clone the Repository

1. Open a terminal.
2. Navigate to the folder where you want to store the project. For example:

```
cd C:\Projects
```

3. Clone the repository using the Git URL provided by your team:

```
git clone <REPOSITORY_URL> trading
```

Replace `<REPOSITORY_URL>` with the actual URL of the Git repository.

4. Move into the project folder:

```
cd trading
```

---

### Step 4: If You Already Have the Code (Pull Latest Changes)

If you have already cloned the repository before, pull the latest changes instead of cloning again:

```
cd trading
git pull origin main
```

---

### Step 5: Install Dependencies

Inside the project folder, run:

```
npm install
```

This will read the `package.json` file and download all required packages into the `node_modules` folder.

This step requires an internet connection and may take a few minutes on first run.

---

### Step 6: Start the Development Server

Run the following command:

```
npm run dev
```

Vite will start a local development server. You will see output similar to:

```
  VITE v5.x.x  ready in xxx ms

  Local:   http://localhost:5173/
  Network: http://192.168.x.x:5173/
```

---

### Step 7: Open the Website in Your Browser

Open your browser and go to:

```
http://localhost:5173
```

The website will load. Any changes you make to the source files will automatically reload in the browser.

---

### Common Issues

Problem: `node` or `npm` command is not recognized after installation.
Solution: Close and reopen your terminal. If the problem persists, restart your computer and try again.

Problem: `npm install` fails with permission errors on macOS or Linux.
Solution: Do not use `sudo npm install`. Instead, fix Node.js permissions by reinstalling Node.js using a version manager like `nvm`.

Problem: Port 5173 is already in use.
Solution: Vite will automatically try the next available port. Check the terminal output for the correct URL.

Problem: Modules not found or import errors after `npm install`.
Solution: Delete the `node_modules` folder and the `package-lock.json` file, then run `npm install` again.

```
rm -rf node_modules package-lock.json
npm install
```

On Windows (PowerShell):

```
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

---

## PHIEN BAN TIENG VIET

### Tong Quan

Huong dan nay chi tiet tung buoc de cai dat may moi hoan toan, tu viec cai Node.js den xem website chay tren may tinh cua ban.

Du an su dung: React 18, Vite 5, SASS, Three.js, Framer Motion, i18next.

---

### Buoc 1: Cai Dat Git

1. Truy cap https://git-scm.com/downloads
2. Tai ban cai dat phu hop voi he dieu hanh cua ban (Windows / macOS / Linux).
3. Chay file cai dat va giu cau hinh mac dinh.
4. Sau khi cai xong, mo terminal va kiem tra:

```
git --version
```

Ket qua hien thi tuong tu: `git version 2.x.x`

---

### Buoc 2: Cai Dat Node.js

1. Truy cap https://nodejs.org
2. Tai phien ban LTS (khuyen nghi cho nguoi dung thong thuong).
3. Chay file cai dat. Giu cau hinh mac dinh.
4. Sau khi cai xong, mo terminal moi va kiem tra:

```
node --version
npm --version
```

Ca hai lenh phai hien thi so phien ban. Nen dung Node.js 18 tro len.

---

### Buoc 3: Clone Repository Ve May

1. Mo terminal.
2. Di chuyen den thu muc ban muon luu du an. Vi du:

```
cd C:\Projects
```

3. Clone repository bang duong dan Git duoc cung cap boi team:

```
git clone <REPOSITORY_URL> trading
```

Thay `<REPOSITORY_URL>` bang duong dan Git thuc te cua du an.

4. Di chuyen vao thu muc du an:

```
cd trading
```

---

### Buoc 4: Neu Ban Da Co Code Truoc Do (Cap Nhat Code Moi Nhat)

Neu ban da clone du an truoc do, khong can clone lai, chi can cap nhat:

```
cd trading
git pull origin main
```

---

### Buoc 5: Cai Dat Cac Thu Vien (Dependencies)

Ben trong thu muc du an, chay lenh:

```
npm install
```

Lenh nay doc file `package.json` va tai toan bo cac thu vien can thiet vao thu muc `node_modules`.

Can ket noi internet. Lan dau co the mat vai phut.

---

### Buoc 6: Khoi Dong May Chu Phat Trien

Chay lenh sau:

```
npm run dev
```

Vite se khoi dong may chu phat trien noi bo. Ban se thay ket qua tuong tu:

```
  VITE v5.x.x  ready in xxx ms

  Local:   http://localhost:5173/
  Network: http://192.168.x.x:5173/
```

---

### Buoc 7: Mo Website Tren Trinh Duyet

Mo trinh duyet va truy cap:

```
http://localhost:5173
```

Website se hien thi. Bat ky thay doi nao ban lam trong code se tu dong cap nhat len trinh duyet.

---

### Cac Loi Thuong Gap

Loi: Lenh `node` hoac `npm` khong duoc nhan dien sau khi cai dat.
Cach sua: Dong va mo lai terminal. Neu van loi, khoi dong lai may tinh va thu lai.

Loi: `npm install` bao loi quyen truy cap tren macOS hoac Linux.
Cach sua: Khong dung `sudo npm install`. Cai lai Node.js bang cong cu quan ly phien ban nhu `nvm` de tranh loi quyen.

Loi: Cong 5173 da duoc su dung boi chuong trinh khac.
Cach sua: Vite se tu dong chon cong ke tiep. Kiem tra terminal de xem duong dan dung.

Loi: Khong tim thay module hoac loi import sau khi `npm install`.
Cach sua: Xoa thu muc `node_modules` va file `package-lock.json`, sau do chay lai `npm install`.

Tren macOS / Linux:

```
rm -rf node_modules package-lock.json
npm install
```

Tren Windows (PowerShell):

```
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```
