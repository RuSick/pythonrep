FROM node:12.18.2 as build

WORKDIR /frontend

COPY ./package.json /frontend//package.json
COPY ./package-lock.json /frontend//package-lock.json

RUN npm install --silent --legacy-peer-deeps
COPY . .
RUN npm run build
