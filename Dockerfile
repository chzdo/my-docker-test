FROM node
RUN mkdir  /app

COPY . /app

RUN yarn install --production


CMD node /app/app.js
