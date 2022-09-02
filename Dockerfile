FROM node:16-alpine AS builder
WORKDIR /app

# 安裝 pnpm
#
# 用 array 式的 RUN 可以減少 invoke sh 的開銷。
RUN ["corepack", "enable"]

# 只複製 lockfile 跟 package.json 然後安裝依賴
#
#   - 用 COPY 可以比 ADD 快一點（ADD 功能比較複雜）
#   - COPY . ./ 會 invalidate 整個 layer（不能 hash 修改檔案），
#     修改依賴的場景通常比修改檔案的場景少，因此這麼做可以加速 layer build。
COPY package.json pnpm-lock.yaml ./
RUN ["pnpm", "i", "--frozen-lockfile"]

# 複製剩餘檔案，完成建置程序。
COPY ./tsconfig.json ./vite.config.ts ./unocss.config.ts ./
COPY ./public/ ./public/
COPY ./src/ ./src/
RUN ["pnpm", "build"]


FROM node:16-alpine
WORKDIR /app

# 安裝 pnpm
RUN ["corepack", "enable"]

# 複製 package.json 和 pnpm-lock.yaml（包含 type: module 宣告）
COPY package.json pnpm-lock.yaml LICENSE ./

# 安裝生產依賴
RUN ["pnpm", "i", "-P", "--frozen-lockfile"]

# 從 builder 複製出成品 dist
COPY --from=builder /app/dist/ ./dist/

EXPOSE 3000

ENTRYPOINT ["node", "dist/server.js"]
