FROM node:5.4.1

WORKDIR /var/www/web
ADD . /var/www/web

# Ruby and compass stuff
RUN apt-get update \
 && apt-get install -y \
    ruby \
    ruby-dev \
 && gem update --system \
 && gem install compass

RUN npm install
