FROM node:14-alpine

WORKDIR /usr/src

COPY . ./

RUN apk update && apk add gcc autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++ nasm make bash

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]