FROM node:12 as builder

WORKDIR /usr/src/app/

COPY . ./

RUN yarn

RUN yarn build

FROM node:12

WORKDIR /usr/src/app/

COPY --from=builder /usr/src/app/  ./

ENV HOST 0.0.0.0
EXPOSE 8080

CMD [ "yarn", "start" ]
