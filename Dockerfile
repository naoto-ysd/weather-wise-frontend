# development stage
FROM node:21-alpine AS dev
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
COPY . ./
CMD ["npm", "start"]

# build stage
FROM dev AS build
ARG OPEN_WEATHER_MAP_API_KEY
ENV REACT_APP_OPEN_WEATHER_MAP_API_KEY=$OPEN_WEATHER_MAP_API_KEY
RUN npm run build

# production stage
FROM nginx:alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
