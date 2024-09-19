# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en /src
WORKDIR /src

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del proyecto React al contenedor
COPY . .

# Expone el puerto 3000 (o el que uses)
EXPOSE 5173

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "dev"]
