# 1. Base image
FROM node:20-alpine

# 2. Cartella di lavoro
WORKDIR /app

# 3. Copia package.json e installa dipendenze
COPY package*.json ./
RUN npm install

# 4. Copia tutto il codice
COPY . .

# 5. Espone la porta del server
EXPOSE 3000

# 6. Comando per avviare il server
CMD ["npx", "nodemon", "index.js"]
