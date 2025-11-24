import express from "express";
import { requireAuth } from "../middlewares/auth.js";
import {
  createGameSchema,
  updateGameSchema
} from "../validators/gamesValidator.js";
import * as ctrl from "../controllers/gamesController.js";

const router = express.Router();

router.get("/", ctrl.listGames);
router.get("/:id", ctrl.getGame);

router.post("/", requireAuth, (req, res, next) => {
  const { error } = createGameSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });
  return ctrl.createGame(req, res, next);
});

router.put("/:id", requireAuth, (req, res, next) => {
  const { error } = updateGameSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });
  return ctrl.updateGame(req, res, next);
});

router.delete("/:id", requireAuth, ctrl.deleteGame);

export default router;
