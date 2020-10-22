import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import { Container, MapContainer, FormContainer } from './styles';

const Report: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <MapContainer>
          <h3>Marque a última localização do Pet:</h3>

          <Map
            center={[-23.0422819, -46.9708041]}
            zoom={14}
            style={{ width: '100%', height: 400 }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </Map>
        </MapContainer>

        <Input />
      </FormContainer>

      <Sidebar />
    </Container>
  );
};

export default Report;
