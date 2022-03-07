FROM node:17 as builder

WORKDIR /usr/src/app/

COPY . ./

RUN yarn

RUN yarn build

FROM node:17

WORKDIR /usr/src/app/

COPY --from=builder /usr/src/app/  ./

ENV HOST 0.0.0.0
EXPOSE 8080

CMD [ "yarn", "start" ]
