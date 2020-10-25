import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Card, { Report } from '../../components/Card';

import { Container, ListContainer, Content } from './styles';
import api from '../../services/api';

interface ReportParams {
  id: string;
}

const PetDetail: React.FC = () => {
  const params = useParams<ReportParams>();
  const [report, setReport] = useState<Report>();

  useEffect(() => {
    api.get(`/list/${params.id}`).then(response => setReport(response.data));
  }, [params.id]);

  return (
    <Container>
      <Content>
        <ListContainer>
          {report && <Card key={report.id} report={report} />}
        </ListContainer>
      </Content>

      <Sidebar />
    </Container>
  );
};

export default PetDetail;
