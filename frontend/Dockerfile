FROM node:16.14.0-alpine3.14

WORKDIR /usr/src/app/client

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000