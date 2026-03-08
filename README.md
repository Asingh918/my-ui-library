# UI Component Library — Assignment 12

**Student:** Arshpreet Singh  
**Tech:** React 18 · TypeScript · Vite · Styled-Components · Storybook 8  

---

## Overview

A reusable UI component library built with React, TypeScript, Styled Components, and Storybook. Each component supports custom colours, sizes, and a disabled state. All components are documented in Storybook and tested with Jest + React Testing Library.

---

## Components

| Component    | Description                                      |
|--------------|--------------------------------------------------|
| Button       | Clickable button with size and colour variants   |
| Label        | Inline tag/badge element                         |
| Text         | Paragraph and heading text block                 |
| Table        | Full table with Header, Row, Cell, and Footer    |
| Dropdown     | Select menu with options                         |
| RadioButton  | Single-select radio input                        |
| Img          | Image with disabled/grayscale state              |
| HeroImage    | Full-width banner with title and subtitle        |
| Card         | Content card with image, body and footer         |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher  
- [Docker](https://www.docker.com/) (for containerised deployment)

---

## Local Development

### Install dependencies

```bash
npm install --legacy-peer-deps
```

### Start Storybook (component explorer)

```bash
npm run storybook
```

Visit: **http://localhost:6006**

### Run dev server

```bash
npm run dev
```

Visit: **http://localhost:5173**

### Run all tests

```bash
npm test
```

Expected: **9 test suites, all passing**

---

## Docker — Production Build on Port 8083

The Dockerfile builds a production Storybook static site and serves it via Nginx on port **8083**.

### Step 1 — Build the Docker image

```bash
docker build -t singh_arshpreet_coding_assignment12 .
```

### Step 2 — Run the container

```bash
docker run -d \
  -p 8083:8083 \
  --name singh_arshpreet_coding_assignment12 \
  singh_arshpreet_coding_assignment12
```

### Step 3 — Open in browser

```
http://localhost:8083
```
or
```
http://127.0.0.1:8083
```

### Stop and remove the container

```bash
docker stop singh_arshpreet_coding_assignment12
docker rm singh_arshpreet_coding_assignment12
```

---

## Project Structure

```
singh_arshpreet_ui_garden/       ← Docker working directory
├── Dockerfile
├── nginx.conf
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
├── babel.config.json
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── src/
    ├── setupTests.ts
    ├── App.tsx
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

## Storybook Features

- **Controls** — modify `backgroundColor`, `color`, `label`, `size`, `disabled`, and more live in the Storybook UI
- **Default state** — each component renders fully styled and interactive
- **Disabled state** — components visually grey out (`background-color`, `cursor: not-allowed`) and become non-interactive
- **Autodocs** — auto-generated API docs for every component

---

## Tests

Every component has at minimum **2 tests**:

1. Component renders and is **visible** on screen
2. **Background colour changes** to a grey value when the `disabled` prop is `true`

```bash
npm test
```

---

## Docker Details

| Setting        | Value                                    |
|----------------|------------------------------------------|
| Container name | `singh_arshpreet_coding_assignment12`    |
| Working dir    | `/singh_arshpreet_ui_garden`             |
| Exposed port   | `8083`                                   |
| URL            | `http://localhost:8083` / `http://127.0.0.1:8083` |
| Base image     | `node:18-alpine` (build) + `nginx:alpine` (serve) |
