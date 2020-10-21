import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';

import { Container } from './styles';
import 'leaflet/dist/leaflet.css';

const PetsMap: React.FC = () => {
  return (
    <Container>
      <Map
        center={[-23.0422819, -46.9708041]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Sidebar />
    </Container>
  );
};

export default PetsMap;
