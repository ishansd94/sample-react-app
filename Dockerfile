FROM node:latest as build
WORKDIR /app
ADD package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
