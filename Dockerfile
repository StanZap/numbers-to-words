FROM node:6.3

ADD $PWD /var/www/html

WORKDIR /var/www/html

CMD if [ -e "package.json" ]; then \
      if [ ! -e "node_modules" ]; then \
        npm install; \
      fi; \
    fi; \
    npm start;