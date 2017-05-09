const Joi = require('joi');

const MemoSchema = Joi.object().keys({
  title: Joi.string().min(4).max(128),
  content: Joi.string().min(4).max(1024)
}); // schema created

module.exports = MemoSchema; // schema exported
