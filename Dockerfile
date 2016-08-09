FROM node:6.3

ADD $PWD /var/www/html

WORKDIR /var/www/html

CMD npm start;