# Use the Node.js LTS base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json (and package-lock.json, if available) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Expose port (the src/index.js seems to be using port 8080)
EXPOSE 8080

# Run startup command
CMD ["node", "src/index.js"]
