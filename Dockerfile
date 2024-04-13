# Use uma imagem base do Node.js v20.12.1
FROM node:20.12.1

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que a aplicação está sendo executada
EXPOSE 3000

# Comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "start"]