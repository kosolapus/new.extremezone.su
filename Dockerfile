FROM node:12 as builder

WORKDIR /usr/src/app/

COPY . ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:12

WORKDIR /usr/src/app/

COPY --from=builder /usr/src/app  ./

ENV HOST 0.0.0.0
EXPOSE 8080

CMD [ "yarn", "start" ]
