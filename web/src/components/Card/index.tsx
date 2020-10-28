import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { getDistance, convertDistance } from 'geolib';

import { Container } from './styles';

export interface Report {
  id: string;
  latitude: number;
  longitude: number;
  responsible: string;
  pet_name: string;
  pet_description: string;
  whatsapp: string;
  image: {
    id: number;
    path: string;
  };
}

interface ReportItemProps {
  report: Report;
}

const Card: React.FC<ReportItemProps> = ({ report }) => {
  function handleWhatsappLink() {
    const url = `https://web.whatsapp.com/send?phone=550${report.whatsapp}`;
    window.open(url, '_blank');
  }

  const distance = getDistance(
    { latitude: -23.0422819, longitude: -46.9708041 },
    { latitude: report.latitude, longitude: report.longitude },
  );

  return (
    <Container key={report.id}>
      <div className="cover-photo">
        <img
          src={`http://localhost:3333/uploads/${report.image.path}`}
          alt={report.pet_name}
        />
      </div>
      <div className="card-box">
        <div className="details">
          <div className="infos">
            <h2>{report.pet_name}</h2>
            <p>{report.pet_description}</p>
            <p>Responsável: {report.responsible}</p>
          </div>
          <div className="location">
            <MdLocationOn size={12} />
            <h3>{Math.round(convertDistance(distance, 'km'))} km</h3>
          </div>
        </div>
        <button type="button" onClick={handleWhatsappLink}>
          Entar em contato
        </button>
      </div>
    </Container>
  );
};
export default Card;
