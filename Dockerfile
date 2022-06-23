FROM node:16-alpine3.14 as builder

WORKDIR /app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile

COPY . .

# build
RUN yarn build

# remove dev dependencies
RUN npm prune --production

# copy from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD [ "yarn", "start" ]
