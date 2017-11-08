FROM node:8.7

WORKDIR /usr/src/app
COPY ./arquitran-web-app .

RUN "yarn"
RUN ["yarn", "build"]

EXPOSE 8080
