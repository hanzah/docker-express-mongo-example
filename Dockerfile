FROM node:argon

RUN mkdir -p /usr/src/web

RUN npm install gulp -g

COPY package.json /usr/src/web/

WORKDIR /usr/src/web

RUN npm install

COPY gulpfile.js /usr/src/web/

EXPOSE 3000