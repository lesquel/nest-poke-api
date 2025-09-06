import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DEFAULT_POKEMON_LIMIT: Joi.number().default(10),
  MONGODB_URI: Joi.string().required(),
});
