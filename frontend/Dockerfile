FROM node:13.12.0-alpine
RUN mkdir /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/ .bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install axios classnames --save

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]