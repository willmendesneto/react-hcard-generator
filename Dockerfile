FROM mhart/alpine-node:6.10.2

WORKDIR /app

# Run install and using docker cache to improve commands
COPY package.json /app
RUN npm install

# Adding root files and folders
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
