import * as express from 'express';
import { Router } from 'express';
import { allRockets, requestRockets } from '../controller/RocketsController';

const router: Router = express.Router();

router.get('/', allRockets);
router.post('/', requestRockets);

export default router;