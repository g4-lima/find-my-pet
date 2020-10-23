import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Report from '../models/Report';

export default class ReportController {
  public async get(request: Request, response: Response): Promise<any> {
    const reportRepository = getRepository(Report);

    const report = await reportRepository.find({
      relations: ['images'],
    });

    return response.json(report);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      responsible,
      latitude,
      longitude,
      pet_name,
      pet_description,
      whatsapp,
    } = request.body;

    const reportRepository = getRepository(Report);

    const image = request.file;

    const data = {
      responsible,
      latitude,
      longitude,
      pet_name,
      pet_description,
      whatsapp,
      image,
    };

    const report = reportRepository.create(data);

    await reportRepository.save(report);

    return response.status(201).json(report);
  }

  public async delete(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    const reportRepository = getRepository(Report);

    await reportRepository.delete(id);

    return response.status(200).json({ message: 'report deleted' });
  }

  public async put(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    const reportRepository = getRepository(Report);

    const report = await reportRepository.findOne(id);

    reportRepository.merge(report, request.body);

    const updatedReport = await reportRepository.save(report);

    return response.send(updatedReport);
  }
}
