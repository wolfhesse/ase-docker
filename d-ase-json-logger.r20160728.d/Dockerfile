FROM mhart/alpine-node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 13001
CMD [ "npm", "run-script", "start_bunyan" ]
