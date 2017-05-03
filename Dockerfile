FROM mhart/alpine-node:6.10.2

WORKDIR /app

# Run install and using docker cache to improve commands
COPY package.json /app
COPY yarn.lock /app
RUN npm install -g yarn@0.23.4
RUN yarn install -s

# Adding root files and folders
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
