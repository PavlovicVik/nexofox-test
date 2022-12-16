FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

CMD ["node", "dist/index.js"]

EXPOSE 9876/tcp
