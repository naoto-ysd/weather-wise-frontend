# build environment
FROM node:21-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
COPY . ./
RUN npm run build

# puroduction environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
