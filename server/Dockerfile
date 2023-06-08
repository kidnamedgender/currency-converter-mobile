FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","start:dev"]
#ENTRYPOINT ["npm", "run", "start:dev"]