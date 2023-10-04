# fetch latest node image on alpine linux
FROM node:alpine AS development

# Declaring dev env
ENV NODE_ENV development

# working directory
WORKDIR /react-app

# copy package.json, and install dependencies
COPY ./package.json /react-app
RUN npm install

# System to docker
COPY . .

# expose the port
EXPOSE 3000

# Start our app
CMD npm start