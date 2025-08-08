# Stage 1: Build com Node 18
FROM node:18-alpine AS build

ARG VITE_API_TOKEN

WORKDIR /app

COPY package*.json yarn.lock .yarnrc.yml ./

COPY .yarn/ ./.yarn/

RUN corepack enable \
 && corepack prepare yarn@4.0.2 --activate \
 && yarn install --immutable

COPY . .

ENV VITE_API_TOKEN=${VITE_API_TOKEN}

RUN yarn build:prod

# Stage 2: NGINX
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

