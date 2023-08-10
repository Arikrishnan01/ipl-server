import express from "express";
import { allPlayers, createPlayer, getPlayerById, updatePlayer, deletePlayerById } from "../Controllers/PlayerController.js";

const router = express.Router();

/**
 * ALL PLAYERS ROUTERS
 */
router.post('/createPlayer', createPlayer);
router.get('/allPlayers', allPlayers);
router.get('/:id', getPlayerById);
router.put('/:id', updatePlayer);
router.delete('/:id', deletePlayerById);


const playerRouter = router;
export default playerRouter;