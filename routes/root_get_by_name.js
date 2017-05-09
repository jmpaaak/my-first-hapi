'use strict';

module.exports = (request, reply) => {
  reply('Hello, ' + request.params.name);
};
