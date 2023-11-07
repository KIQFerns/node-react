import * as express from 'express';
import { Router } from 'express';
import { allLaunchers, requestLastLaunchers } from '../controller/LaunchesController';

const router: Router = express.Router();

router.get('/', allLaunchers);
router.post('/', requestLastLaunchers);

export default router;