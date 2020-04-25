FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# RUN npm install --silent
WORKDIR /app

# RUN yarn init
# RUN npm init -y

# RUN npm install -g create-react-app
# RUN npm init react-app . --use-npm
RUN yarn install && yarn cache clean
# RUN yarn create react-app /usr/src/app

EXPOSE 3333
# CMD ["npm", "run", "dev"]