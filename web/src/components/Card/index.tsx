import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import AvatarImg from '../../assets/img/fmp1.jpeg';

import { Container } from './styles';

export interface Report {
  id: string;
  latitude: number;
  longitude: number;
  responsible: string;
  pet_name: string;
  pet_description: string;
  wahtsapp: string;
}

interface ReportItemProps {
  report: Report;
}

const Card: React.FC<ReportItemProps> = ({ report }) => {
  return (
    <Container key={report.id}>
      <div className="cover-photo">
        <img src={AvatarImg} alt="" />
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
            <h3>3 km</h3>
          </div>
        </div>
        <button type="button">Entar em contato</button>
      </div>
    </Container>
  );
};
export default Card;
