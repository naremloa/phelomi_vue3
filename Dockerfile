FROM node:12-alpine
LABEL MAINTAINER="naremloa@gmail.com"

RUN mkdir -p /app/phelomi
WORKDIR /app/phelomi

COPY . .
RUN yarn install
RUN yarn build:client
RUN yarn build:server

EXPOSE 8080

CMD [ "yarn", "start" ]