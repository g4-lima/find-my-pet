import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';

import {
  Container,
  MapContainer,
  FormContainer,
  InputBlock,
  Button,
} from './styles';

const Report: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <MapContainer>
          <h3>Última localização do Pet:</h3>

          <Map
            center={[-23.0422819, -46.9708041]}
            zoom={14}
            style={{ width: '100%', height: 400 }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </Map>
        </MapContainer>

        <InputBlock>
          <label htmlFor="name">Responsável</label>
          <input id="name" placeholder="Nome do responsável" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="pet-name">Nome do Pet</label>
          <input id="pet-name" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="description">Descrição do Pet</label>
          <textarea id="description" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="whatsapp">WhatsApp</label>
          <input id="whatsapp" placeholder="(xx) xxxxx - xxxx" />
        </InputBlock>

        <Button type="submit">Enviar</Button>
      </FormContainer>

      <Sidebar />
    </Container>
  );
};

export default Report;
