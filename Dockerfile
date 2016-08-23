FROM slyg/frontend-build:latest

ENV WORKSPACE /var/www/web

WORKDIR $WORKSPACE

ADD package.json /tmp/package.json
RUN cd /tmp && npm install && npm rebuild node-sass
RUN mkdir -p $WORKSPACE && cp -a /tmp/node_modules $WORKSPACE/

ADD . $WORKSPACE
