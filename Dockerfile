
FROM nginx:stable-alpine

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

#Add build to nginx root webapp
ADD dist /usr/share/nginx/html

#Copy nginx configuration
RUN rm etc/nginx/conf.d/default.conf
COPY container/nginx.conf etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

COPY container/env.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x env.sh

# Add bash
RUN apk add --no-cache bash

# Generate env-config.json which include environment variables in our build
#RUN bash env.sh

#RUN rm env.sh
#RUN rm .env

# Start Nginx server
ENTRYPOINT bash -c "/usr/share/nginx/html/env.sh && nginx -g 'daemon off;'"