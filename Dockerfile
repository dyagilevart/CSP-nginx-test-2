# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:lts AS development

# Set working directory
WORKDIR /app

# 
COPY /test/package.json /app/package.json
COPY /test/package-lock.json /app/package-lock.json

# Same as npm install
RUN npm i

COPY /test /app

ENV CI=true
ENV PORT=3000

FROM development AS build

RUN npx nx reset
RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine

# Copy config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY crypto.js /etc/nginx/script/crypto.js

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/dist/test .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
