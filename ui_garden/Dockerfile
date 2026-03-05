# Stage 1 — Build
FROM node:18-alpine AS builder
WORKDIR /singh_arshpreet_ui_garden
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2 — Serve with Nginx on port 8083
FROM nginx:stable-alpine
COPY --from=builder /singh_arshpreet_ui_garden/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
