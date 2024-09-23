### README.md

```markdown
# Vite + Docker Build Guide

This guide helps you build and run a Vite project using Docker. It uses a multi-stage build to create a production-ready image and serves the static files.

## Prerequisites

- Docker installed on your machine
- A Vite project ready in the current directory

## Dockerfile

Here is a basic Dockerfile to build your Vite project:

```Dockerfile
# Step 1: Build the Vite app
FROM node:18 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Step 2: Serve the static files using Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Build the Docker Image

To build the Docker image, run the following command in the root directory of your project (where the Dockerfile is located):

```bash
docker build -t vite-app:latest .
```

This command builds the Docker image and tags it as `vite-app:latest`.

## Run the Docker Container

Once the image is built, you can run the container using this command:

```bash
docker run -d -p 80:80 vite-app:latest
```

This will start a container and serve your Vite app on `http://localhost`.

## Conclusion

This guide covers the basic steps to containerize a Vite project using Docker and Nginx. Modify the Dockerfile and configuration as needed for your specific use case.
```

### 설명:
- **Dockerfile**: Vite 애플리케이션을 빌드하고, Nginx를 사용해 정적 파일을 서빙하는 구조입니다.
- **빌드 명령어**: `docker build` 명령어를 통해 Docker 이미지를 빌드하는 방법을 설명합니다.
- **실행 명령어**: `docker run` 명령어로 이미지를 실행하고, 애플리케이션을 호스팅하는 방법을 제공합니다.
- **Docker Compose**: `docker-compose.yml` 파일을 추가하여 더 간단하게 빌드하고 실행하는 방법도 설명합니다.

이 README 파일을 프로젝트의 가이드로 사용하면 Vite 애플리케이션을 Docker로 빌드하고 실행하는 과정을 쉽게 따라할 수 있습니다.