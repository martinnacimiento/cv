FROM node

# Se instala las dependencias
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

# Se instala Vue CLI globalmente en el contenedor
RUN npm install -g @vue/cli

# Cuando se ejecuta el contenedor corre el cliente de vue-cli por el siguiente puerto
CMD npm run serve -- --port 8006