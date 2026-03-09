# NexusUI — Gaming Component Library
### WEBD-3012 · Assignment 12 · Arshpreet Singh

---

## 🎮 About

NexusUI is a reusable UI component library with a gaming dashboard theme. Built with React 18, TypeScript, Vite, Styled Components, and Storybook 8. Every component supports a default state and a disabled state, is fully typed with TypeScript, and comes with Jest tests and Storybook documentation.

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `Button` | Action button with small/medium/large sizes and glow effects |
| `Label` | Gaming badge with colour variants — LIVE, HOT, NEW PATCH etc |
| `Text` | Text block supporting headings, body, and highlighted variants |
| `Table` | Data table with header, rows, cells, and footer sub-components |
| `Dropdown` | Select menu for choosing regions, game modes etc |
| `RadioButton` | Single select input for server region or class selection |
| `Img` | Image with grayscale+dim effect when disabled (locked content) |
| `HeroImage` | Full-width banner with title, subtitle, and overlay gradient |
| `Card` | Hero character card with image, description, and footer |

---

## ⚙️ Tech Stack

- **React 18** — UI components
- **TypeScript** — type safety
- **Vite** — dev server and build tool
- **Styled Components v5** — CSS-in-JS styling
- **Storybook 8** — component documentation and controls
- **Jest + React Testing Library** — unit testing
- **Docker + Nginx** — production deployment

---

## 🚀 Getting Started

### Requirements
- Node.js v18 or higher
- Docker Desktop (for container deployment)

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Run Dev Server
```bash
npm run dev
```
Opens at **http://localhost:5173**

### Open Storybook
```bash
npm run storybook
```
Opens at **http://localhost:6006**

### Run Tests
```bash
npm test
```
Expected output: **9 suites, 27 tests, all passing**

---

## 🐳 Docker Deployment

### 1. Build the image
```bash
docker build -t singh_arshpreet_coding_assignment12 .
```

### 2. Run the container
```bash
docker run -d \
  -p 8083:8083 \
  --name singh_arshpreet_coding_assignment12 \
  singh_arshpreet_coding_assignment12
```

### 3. Open in browser
```
http://localhost:8083
```

### 4. Stop the container
```bash
docker stop singh_arshpreet_coding_assignment12
```

### 5. Start again
```bash
docker start singh_arshpreet_coding_assignment12
```

### 6. Remove the container
```bash
docker rm singh_arshpreet_coding_assignment12
```

---

## 🗂 Project Structure
```
singh_arshpreet_ui_garden/
├── Dockerfile
├── nginx.conf
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
├── babel.config.json
├── index.html
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── setupTests.ts
    └── components/
        ├── Button/
        │   ├── Button.tsx
        │   ├── Button.types.tsx
        │   ├── Button.stories.tsx
        │   ├── Button.tests.tsx
        │   └── index.ts
        ├── Label/
        ├── Text/
        ├── Table/
        ├── Dropdown/
        ├── RadioButton/
        ├── Img/
        ├── HeroImage/
        └── Card/
```

---

## 📖 Storybook Features

- **Controls panel** — change `backgroundColor`, `color`, `label`, `size`, `disabled` live
- **Default story** — component in active/enabled state
- **Disabled story** — component visually greyed out with `cursor: not-allowed`
- **Autodocs** — auto generated API documentation for every component

---

## 🧪 Testing

Each component has a minimum of 3 tests:

| Test | What it checks |
|------|---------------|
| Visibility | Component renders and is visible on screen |
| Disabled background | Background colour changes to grey when `disabled={true}` |
| Disabled cursor | Cursor changes to not-allowed when disabled |

---

## 🐳 Docker Details

| Setting | Value |
|---------|-------|
| Container name | `singh_arshpreet_coding_assignment12` |
| Working directory | `/singh_arshpreet_ui_garden` |
| Port | `8083` |
| URL | `http://localhost:8083` |
| Build stage | `node:18-alpine` |
| Serve stage | `nginx:stable-alpine` |