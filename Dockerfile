FROM node:7.2-alpine

RUN apk update && apk upgrade && \
apk add --no-cache git

# Create app directory
WORKDIR /usr/src/app/webapp
COPY package*.json ./
RUN npm install
COPY . ./

# Default port
EXPOSE 80 443

# start app
CMD [ "npm", "start" ]
