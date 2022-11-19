FROM node:19-alpine3.15

WORKDIR /BACKEND

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]