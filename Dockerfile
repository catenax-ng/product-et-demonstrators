FROM node:16-alpine3.15

WORKDIR /app

COPY npm/demo-page/ /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
