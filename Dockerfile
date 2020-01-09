FROM node

# Instala vue-cli globalmente en el contenedor
RUN npm install -g @vue/cli

# Cuandoo se ejecuta el contenedor corre el cliente de vue-cli por este puerto
CMD vue ui -H 0.0.0.0 --port 8005