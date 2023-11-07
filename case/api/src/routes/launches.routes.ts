import * as express from 'express';
import { Router } from 'express';
import { allLaunchers, dataChart, requestLastLaunchers } from '../controller/LaunchesController';

const router: Router = express.Router();

router.get('/', allLaunchers);
router.get('/stats', dataChart);
router.post('/', requestLastLaunchers);

export default router;