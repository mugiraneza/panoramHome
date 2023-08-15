FROM node:13.12.0-alpine
RUN mkdir /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/ .bin:$PATH

COPY package.json /frontend/
COPY package-lock.json /frontend/

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install axios classnames --save

COPY ../front ./

EXPOSE 3000

CMD ["npm", "start"]