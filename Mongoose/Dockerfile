FROM node:19

WORKDIR /MONGOOSE

COPY package*.json ./

COPY .env ./

COPY tsconfig.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]