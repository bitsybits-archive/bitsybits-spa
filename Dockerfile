FROM node:8.8.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

EXPOSE 8080

COPY . /usr/src/app

CMD [ "npm", "run", "dev" ]
