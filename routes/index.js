'use strict';

const Joi = require('joi');
const User = require('../models/user.js');
const MemoSchema = require('../models/memo.js');

function addTimestamp(obj){
  return obj.createdAt = Date.now();
}

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: require('./root_get_all.js')
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: require('./root_get_by_name.js')
  },
  {
    method: 'POST',
    path: '/memos',
    handler: (request, reply) => {
      var newMemo = request.payload; // already validated
      addTimestamp(newMemo); // it adds 'createdAt'
      reply().code(201);
    },
    config: {
      validate:{ payload: MemoSchema } // validate payload with MemoSchema
    }
  }
];
