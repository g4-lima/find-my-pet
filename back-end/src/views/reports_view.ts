import Report from '../models/Report';
import imagesView from './images_view';

export default {
  render(report: Report) {
    return {
      responsible: report.responsible,
      latitude: report.latitude,
      longitude: report.longitude,
      pet_name: report.pet_name,
      pet_description: report.pet_name,
      whatsapp: report.whatsapp,
      image: imagesView.render(report.image),
    };
  },

  renderMany(reports: Report[]) {
    return reports.map(report => this.render(report));
  },
};
