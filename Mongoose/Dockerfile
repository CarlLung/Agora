FROM node:19

WORKDIR /BACKEND

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]