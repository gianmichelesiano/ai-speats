FROM nginx:alpine

# Copy static files to nginx
COPY . /usr/share/nginx/html

# Copy custom nginx config for SPA support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
