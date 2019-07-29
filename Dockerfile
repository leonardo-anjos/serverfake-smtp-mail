FROM node:alpine

WORKDIR /usr/app

COPY index.js /src

RUN yarn add nodemailer