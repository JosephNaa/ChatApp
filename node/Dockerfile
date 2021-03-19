FROM node

WORKDIR /src
ADD . /src

RUN cd /src && npm install

EXPOSE 3030

CMD ["node", "/src/app.js"]