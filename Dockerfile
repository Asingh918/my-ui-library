# =============================================
# Student:    Arshpreet Singh
# Course:     WEBD-3012
# Assignment: 12 — NexusUI Component Library
# =============================================

# ── Stage 1: Install & Build ──────────────────
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /singh_arshpreet_ui_garden

# Copy dependency files first for better layer caching
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the Storybook static output
RUN npm run build-storybook

# ── Stage 2: Production Server ────────────────
FROM nginx:stable-alpine AS production

# Copy built static files from builder stage
COPY --from=builder /singh_arshpreet_ui_garden/storybook-static /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Open port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]