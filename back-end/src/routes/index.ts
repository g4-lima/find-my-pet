import { Router } from 'express';

const routes = Router();

routes.post('/report', async (request, response) => {
  const {
    responsible,
    whatsapp,
    location,
    petName,
    petDescription,
    petPhoto,
  } = request.body;

  const createReport = new CreateReportService(); // Fazer arquivo service

  const report = await createReport.execute({
    responsible,
    whatsapp,
    location,
    petName,
    petDescription,
    petPhoto,
  });

  return response.json(report);
});

export default routes;
