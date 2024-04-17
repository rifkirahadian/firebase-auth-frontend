FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install --loglevel=info

COPY . .

CMD ["npx", "next", "dev", "-p", "3001"]