# =============================================
# Arshpreet Singh — Assignment 12
# UI Component Library
# Container: singh_arshpreet_coding_assignment12
# Working Dir: singh_arshpreet_ui_garden
# =============================================

# Stage 1: Build Storybook static site
FROM node:18-alpine AS build-stage

WORKDIR /singh_arshpreet_ui_garden

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build-storybook

# Stage 2: Serve with Nginx on port 8083
FROM nginx:alpine AS production-stage

COPY --from=build-stage /singh_arshpreet_ui_garden/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
