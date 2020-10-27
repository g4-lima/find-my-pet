import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Icon, LeafletMouseEvent } from 'leaflet';
import { MdAddAPhoto, MdCheck } from 'react-icons/md';

import Sidebar from '../../components/Sidebar';
import markerImg from '../../assets/logo/marker2.svg';
import api from '../../services/api';

import {
  Container,
  MapContainer,
  FormContainer,
  InputBlock,
  Button,
} from './styles';

const Report: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [responsible, setResponsible] = useState('');
  const [pet_name, setPetName] = useState('');
  const [pet_description, setPetDescription] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [image, setImage] = useState<any>();

  const icon = new Icon({
    iconUrl: markerImg,
    iconSize: [72, 72],
    iconAnchor: [29, 68],
    popupAnchor: [8, -60],
  });

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const selectedImage = event.target.files[0];

      setImage(selectedImage);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('responsible', responsible);
    data.append('pet_name', pet_name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('pet_description', pet_description);
    data.append('whatsapp', whatsapp);
    data.append('image', image);

    await api.post('/report', data);

    alert('Pet cadastrado com sucesso!');

    history.push('/map');
  }

  return (
    <Container>
      <FormContainer>
        <MapContainer>
          <h3>Última localização do Pet:</h3>

          <Map
            center={[-23.0422819, -46.9708041]}
            zoom={14}
            style={{ width: '100%', height: 400 }}
            onclick={handleMapClick}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {position.latitude !== 0 && (
              <Marker
                interactive={false}
                icon={icon}
                position={[position.latitude, position.longitude]}
              />
            )}
          </Map>
        </MapContainer>

        <InputBlock>
          <label htmlFor="responsible">Responsável</label>
          <input
            id="responsible"
            value={responsible}
            onChange={event => setResponsible(event.target.value)}
            placeholder="Nome do responsável"
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="pet_name">Nome do Pet</label>
          <input
            id="pet_name"
            value={pet_name}
            onChange={event => setPetName(event.target.value)}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="images">Foto</label>

          <div className="images-container">
            {!image ? (
              <label htmlFor="image" className="new-image">
                <MdAddAPhoto size={24} color="#7ba8ff" />
              </label>
            ) : (
              <label htmlFor="image" className="selected-image">
                <MdCheck size={24} color="green" />
              </label>
            )}
          </div>
          <input onChange={handleSelectImage} type="file" id="image" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="pet_description">Descrição do Pet</label>
          <textarea
            aria-multiline
            id="pet_description"
            value={pet_description.replace('    ', '\n')}
            onChange={event => setPetDescription(event.target.value)}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            value={whatsapp}
            onChange={event => setWhatsapp(event.target.value)}
            placeholder="(xx) xxxxx - xxxx"
          />
        </InputBlock>

        <Button type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </FormContainer>

      <Sidebar />
    </Container>
  );
};

export default Report;
