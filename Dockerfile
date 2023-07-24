# Use a imagem do Node.js como base
FROM node:16.14.2

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante do código para o diretório de trabalho
COPY . .

# Construa o aplicativo Angular
RUN npm run build --prod
