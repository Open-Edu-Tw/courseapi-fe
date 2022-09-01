FROM node:16-alpine

ADD . /app

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm i && pnpm build

EXPOSE 3000

ENTRYPOINT ["pnpm", "start"]