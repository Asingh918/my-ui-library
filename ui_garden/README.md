# UI Component Garden — Assignment 12
### Student: Arshpreet Singh
### GitHub: https://github.com/Asingh918/my-ui-library

Built with **React 18 · TypeScript · Vite 5 · Styled-Components · Storybook 8**

---

## ✅ Components Included

| Component | .tsx | .types.tsx | .stories.tsx | .tests.tsx | index.ts |
|---|:---:|:---:|:---:|:---:|:---:|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ |
| Label | ✅ | ✅ | ✅ | ✅ | ✅ |
| Text | ✅ | ✅ | ✅ | ✅ | ✅ |
| Table | ✅ | ✅ | ✅ | ✅ | ✅ |
| TableHeader | ✅ | ✅ | ✅ | ✅ | ✅ |
| TableRow | ✅ | ✅ | ✅ | ✅ | ✅ |
| TableCell | ✅ | ✅ | ✅ | ✅ | ✅ |
| TableFooter | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dropdown | ✅ | ✅ | ✅ | ✅ | ✅ |
| RadioButton | ✅ | ✅ | ✅ | ✅ | ✅ |
| Img | ✅ | ✅ | ✅ | ✅ | ✅ |
| HeroImage | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 🚀 Setup Instructions

### 1. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Run the dev server
```bash
npm run dev
```
Open → **http://localhost:5173**

### 3. Run Storybook
```bash
npm run storybook
```
Open → **http://localhost:6006**

### 4. Run tests
```bash
npm run test
```

---

## 🐳 Docker — Deploy on port 8083

> Before building, open the `Dockerfile` and replace `singh_arshpreet` with your real name (e.g. `Singh_Arshpreet`). Do the same in this README.

### Build the image
```bash
docker build -t singh_arshpreet_coding_assignment12 .
```

### Run the container
```bash
docker run -d --name singh_arshpreet_coding_assignment12 -p 8083:8083 singh_arshpreet_coding_assignment12
```

### Open in browser
```
http://localhost:8083
```

### Stop / remove
```bash
docker stop singh_arshpreet_coding_assignment12
docker rm singh_arshpreet_coding_assignment12
```

---

## 📁 Project Structure

```
singh_arshpreet_ui_garden/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   ├── Button/       (Button.tsx, .types.tsx, .stories.tsx, .tests.tsx, index.ts)
│   │   ├── Label/
│   │   ├── Text/
│   │   ├── Table/
│   │   ├── Dropdown/
│   │   ├── RadioButton/
│   │   ├── Img/
│   │   ├── HeroImage/
│   │   └── Card/
│   ├── __mocks__/
│   │   └── fileMock.js
│   ├── setupTests.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── babel.config.json
├── jest.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
├── Dockerfile
├── nginx.conf
└── README.md
```

---

## 🎨 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 5 | Build tool & dev server |
| styled-components | 5 | CSS-in-JS styling |
| Storybook | 8 | Component docs + Controls |
| Jest | 29 | Test runner |
| @testing-library/react | 14 | Component testing utilities |
| jest-styled-components | 7 | CSS assertions in tests |
| Nginx | stable | Static file server in Docker |

---

## ✏️ Disabled State Pattern

All components use this visual pattern when `disabled={true}`:

| CSS Property | Value |
|---|---|
| `background-color` | `#e5e7eb` / `#d1d5db` / `#a0a0a0` |
| `cursor` | `not-allowed` |
| `opacity` | `0.65` – `0.7` |
| `filter` (images) | `grayscale(100%)` |
| `color` | `#9ca3af` |
