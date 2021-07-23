const Joi = require('joi')

module.exports = Joi.object({
  title: Joi.string()
    .min(3)
    .max(10)
    .required(),
  id: Joi.string()
    .min(36)
    .required(),
  description: Joi.string()
    .min(10)
    .max(30)
    .required()
})