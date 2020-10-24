import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MdArrowForward } from 'react-icons/md';

import imgGallery1 from '../../assets/img/fmp1.jpeg';
import Sidebar from '../../components/Sidebar';
import markerImg from '../../assets/logo/marker4.svg';

import { Container } from './styles';
import 'leaflet/dist/leaflet.css';

const PetsMap: React.FC = () => {
  const icon = new Icon({
    iconUrl: markerImg,
    iconSize: [72, 72],
    iconAnchor: [29, 68],
    popupAnchor: [8, -60],
  });

  return (
    <Container>
      <Map
        center={[-23.0422819, -46.9708041]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[-23.0422819, -46.9708041]} icon={icon}>
          <Popup
            closeButton={false}
            minWidth={160}
            maxWidth={160}
            className="map-popup"
          >
            <img src={imgGallery1} alt="imagem da galeria" />
            NomedoPet
            <Link to="/list">
              <MdArrowForward size={20} color="#222a36" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Sidebar />
    </Container>
  );
};

export default PetsMap;
