FROM	node:alpine

COPY . /source

WORKDIR /source/
RUN npm install  --production
EXPOSE 3000

CMD ["node", "index.js"]