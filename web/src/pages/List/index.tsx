import React, { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';

import api from '../../services/api';
import Sidebar from '../../components/Sidebar';
import AvatarImg from '../../assets/img/fmp1.jpeg';

import {
  Container,
  Content,
  ListContainer,
  SearchOptions,
  InputBlock,
  Card,
} from './styles';

interface Report {
  id: string;
  latitude: number;
  longitude: number;
  responsible: string;
  pet_name: string;
  pet_description: string;
  wahtsapp: string;
}

const List: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    api.get('/list').then(response => setReports(response.data));
  }, []);

  return (
    <Container>
      <Content>
        <SearchOptions>
          <InputBlock>
            <label htmlFor="coverage-area">Raio de pesquisa</label>
            <input id="covarage-area" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="city">Cidade</label>
            <input id="city" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="name">Nome do Pet</label>
            <input id="name" />
          </InputBlock>
        </SearchOptions>
        <hr />
        <ListContainer>
          {reports.map(report => (
            <Card key={report.id}>
              <div className="cover-photo">
                <img src={AvatarImg} alt="" />
              </div>
              <div className="card-box">
                <div className="details">
                  <div className="infos">
                    <h2>{report.pet_name}</h2>
                    <p>{report.pet_description}</p>
                    <p>Responsible: {report.responsible}</p>
                  </div>
                  <div className="location">
                    <MdLocationOn size={12} />
                    <h3>3 km</h3>
                  </div>
                </div>
                <button type="button">Entar em contato</button>
              </div>
            </Card>
          ))}

          <Card>
            <div className="cover-photo">
              <img src={AvatarImg} alt="" />
            </div>
            <div className="card-box">
              <div className="details">
                <div className="infos">
                  <h2>Pet name</h2>
                  <p>Pet description</p>
                  <p>Responsible: Nome do Responsável</p>
                </div>
                <div className="location">
                  <MdLocationOn size={12} />
                  <h3>3 km</h3>
                </div>
              </div>
              <button type="button">Entar em contato</button>
            </div>
          </Card>

          <Card>
            <div className="cover-photo">
              <img src={AvatarImg} alt="" />
            </div>
            <div className="card-box">
              <div className="details">
                <div className="infos">
                  <h2>Pet name</h2>
                  <p>Pet description</p>
                  <p>Responsible: Nome do Responsável</p>
                </div>
                <div className="location">
                  <MdLocationOn size={12} />
                  <h3>3 km</h3>
                </div>
              </div>
              <button type="button">Entar em contato</button>
            </div>
          </Card>
        </ListContainer>
      </Content>
      <Sidebar />
    </Container>
  );
};

export default List;
