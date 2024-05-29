# Use the official Node.js image as the base image
FROM node:20.5.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose the port on which your Express.js app will run
EXPOSE 8080

# Define the command to start the Express.js app
CMD ["npm", "start"]