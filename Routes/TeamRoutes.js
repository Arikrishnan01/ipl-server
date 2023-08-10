import express from 'express';
import { 
    allTeams, 
    createTeams, 
    getTeamById, 
    updateTemaById, 
    deleteTeamById 
} from '../Controllers/TeamController.js';

const router = express.Router();

/**
 * SUB ROUTERS
 */
router.post('/createTeam', createTeams);
router.get('/allTeams', allTeams);
router.get('/:id', getTeamById);
router.put('/:id', updateTemaById);
router.delete('/:id', deleteTeamById);

/**
 * EXPORT THE ALL ROUTER
 */
const teamRouter = router;
export default teamRouter;