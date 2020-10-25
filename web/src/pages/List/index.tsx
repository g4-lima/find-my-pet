import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Sidebar from '../../components/Sidebar';
import Card, { Report } from '../../components/Card';

import {
  Container,
  Content,
  ListContainer,
  SearchOptions,
  InputBlock,
} from './styles';

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
          {reports.map((report: Report) => {
            return <Card key={report.id} report={report} />;
          })}
        </ListContainer>
      </Content>
      <Sidebar />
    </Container>
  );
};

export default List;
