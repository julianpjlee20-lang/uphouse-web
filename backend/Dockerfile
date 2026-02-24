FROM node:20-alpine

WORKDIR /app

# Create necessary directories
RUN mkdir -p public/uploads

# Install dependencies
COPY package*.json ./
RUN npm install

# Build Strapi
RUN npm run build

# Expose port
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
