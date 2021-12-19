FROM node:12.18.2 as build

WORKDIR /builddir

COPY ./package.json /builddir/package.json
COPY ./package-lock.json /builddir/package-lock.json

RUN npm install --silent --legacy-peer-deeps
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /builddir/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]