import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MdArrowForward } from 'react-icons/md';

import api from '../../services/api';
import imgGallery1 from '../../assets/img/fmp1.jpeg';
import Sidebar from '../../components/Sidebar';
import markerImg from '../../assets/logo/marker2.svg';

import { Container } from './styles';
import 'leaflet/dist/leaflet.css';

interface Report {
  id: string;
  latitude: number;
  longitude: number;
  pet_name: string;
  image: {
    id: number;
    path: string;
  };
}

const PetsMap: React.FC = () => {
  const icon = new Icon({
    iconUrl: markerImg,
    iconSize: [64, 64],
    iconAnchor: [29, 68],
    popupAnchor: [8, -60],
  });

  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    api.get('/list').then(response => setReports(response.data));
  }, []);

  return (
    <Container>
      <Map
        center={[-23.0422819, -46.9708041]}
        zoom={13}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {reports.map(report => (
          <Marker
            key={report.id}
            position={[report.latitude, report.longitude]}
            icon={icon}
          >
            <Popup
              closeButton={false}
              minWidth={160}
              maxWidth={160}
              className="map-popup"
            >
              <img
                src={`http://localhost:3333/uploads/${report.image.path}`}
                alt={report.pet_name}
              />
              {report.pet_name}
              <Link to={`/list/${report.id}`}>
                <MdArrowForward size={20} color="#222a36" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Sidebar />
    </Container>
  );
};

export default PetsMap;
