import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Report from '../models/Report';

export default class ReportController {
  public async index(request: Request, response: Response): Promise<Response> {
    const {
      responsible,
      whatsapp,
      location,
      petName,
      petDescription,
      petPhoto,
    } = request.body;

    const reportRepository = getRepository(Report);

    const report = await reportRepository.create({
      responsible,
      whatsapp,
      location,
      petName,
      petDescription,
      petPhoto,
    });

    await reportRepository.save(report);

    return response.json(report);
  }
}
