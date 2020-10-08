import { Router } from 'express';

import ReportController from '../controllers/ReportController';

const routes = Router();
const reportController = new ReportController();

routes.post('/report', reportController.create);
routes.get('/list-reports', reportController.get);
routes.delete('/report/:id', reportController.delete);
routes.put('/report/:id', reportController.put);

export default routes;
