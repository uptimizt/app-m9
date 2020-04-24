FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install --silent

# RUN yarn init
RUN npm init -y
RUN yarn install && yarn cache clean

# WORKDIR /app

# CMD ["npm", "run", "dev"]