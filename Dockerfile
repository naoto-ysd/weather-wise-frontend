# Stage1
FROM node:21-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
COPY . ./
# RUN npm run build
CMD ["npm", "start"]

# Stage2
FROM nginx:alpine
COPY --from=base /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
