FROM node:16-alpine3.15

WORKDIR /app

COPY npm/demo-page/ /app

RUN yarn install
RUN yarn build
RUN npm install -g serve

EXPOSE 3000

CMD ["yarn", "start-prod"]
