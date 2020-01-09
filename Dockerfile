FROM node

# Se instala las dependencias
WORKDIR /home/node/app/cv
COPY package*.json ./
RUN npm install

# Se instala Vue CLI globalmente en el contenedor
RUN npm install -g @vue/cli

# Cuando se ejecuta el contenedor corre el cliente de vue-cli por el siguiente puerto
CMD vue ui -H 0.0.0.0 --port 8005; vue-cli-service serve -H 0.0.0.0 --port 8006