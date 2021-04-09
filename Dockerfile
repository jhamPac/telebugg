FROM node:14

WORKDIR /usr/frontend

COPY . ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]