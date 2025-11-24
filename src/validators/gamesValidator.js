import Joi from "joi";

export const createGameSchema = Joi.object({
  title: Joi.string().min(1).required(),
  platform: Joi.string().min(1).required(),
  hours_played: Joi.number().min(0),
  status: Joi.string().allow("", null)
});

export const updateGameSchema = Joi.object({
  title: Joi.string().min(1),
  platform: Joi.string().min(1),
  hours_played: Joi.number().min(0),
  status: Joi.string()
}).min(1);
