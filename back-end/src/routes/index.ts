import { Router } from 'express';

import ReportController from '../controllers/ReportController';

const routes = Router();
const reportController = new ReportController();

routes.post('/report', reportController.index);

export default routes;
