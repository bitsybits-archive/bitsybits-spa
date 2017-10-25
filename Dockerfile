FROM node:6.10.3
ENV DEPLOYMENT_NAME=development

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install webpack -g

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app/

EXPOSE 8080

CMD [ "npm", "run", "dev" ]

