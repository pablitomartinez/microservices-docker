FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD [ "npm", "start" ]