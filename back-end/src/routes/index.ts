import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import ReportController from '../controllers/ReportController';

const routes = Router();
const reportController = new ReportController();
const upload = multer(uploadConfig);

routes.post('/report', upload.single('image'), reportController.create);
routes.get('/list-reports', reportController.get);
routes.delete('/report/:id', reportController.delete);
routes.put('/report/:id', reportController.put);

export default routes;
