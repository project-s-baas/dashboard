# Step 1: Install Bun and build the project
FROM oven/bun:latest as builder
WORKDIR /app

# 복사 시 node_modules 폴더는 .dockerignore 파일에 의해 제외됨
COPY bun.lockb package.json ./
RUN bun install

# 소스 코드 복사
COPY . .

# 빌드 명령어 실행
RUN bun run build

# Step 2: Serve the static files (예: Nginx로 서빙)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
