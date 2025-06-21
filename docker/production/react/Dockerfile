# Build stage
FROM node:20-alpine as build
WORKDIR /app/frontend
COPY frontend .
RUN npm install
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/frontend/dist /usr/share/nginx/html
# Nginx 設定ファイルをコピー（同じく context: . からのパス）
COPY docker/production/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]