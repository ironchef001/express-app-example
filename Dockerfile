FROM node:15-alpine3.13

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
