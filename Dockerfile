FROM node:12

WORKDIR /usr/src/app

COPY . ./
RUN yarn && yarn build

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080
