FROM node:14

WORKDIR /usr/frontend

COPY package*.json ./

RUN npm install

ADD . ./

EXPOSE 8080

CMD ["npm", "start"]