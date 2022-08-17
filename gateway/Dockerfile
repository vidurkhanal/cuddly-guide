# syntax=docker/dockerfile:1

FROM node:16

# Create app directory
WORKDIR /app

RUN npm install --location=global yarn --force

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN yarn build

EXPOSE 5050
CMD [ "node", "dist/index.js" ]

