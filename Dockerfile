# Use a lightweight base image
FROM nginx:alpine

# Copy your static files into the Nginx web root directory
COPY . /usr/share/nginx/html

# Expose port 80 (the default Nginx port)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
