'use strict';

const Hapi = require('hapi');

const routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: 3000 });

routes.forEach((route) => {
  server.route(route);
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
