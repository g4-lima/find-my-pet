import React from 'react';
import { Link } from 'react-router-dom';

import { MdExplore, MdPets, MdSearch } from 'react-icons/md';
import logo from '../../assets/logo/logo.png';
import imgGallery1 from '../../assets/img/fmp1.jpeg';
import imgGallery2 from '../../assets/img/fmp2.jpeg';
import imgGallery3 from '../../assets/img/fmp3.jpeg';

import {
  Container,
  Content,
  Buttons,
  HorizontalButtons,
  Header,
  Box,
  Title,
  Gallery,
  Description,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="find my pet" />

          <div className="account-buttons">
            <Link to="/">Entrar</Link>
            <Link to="/">Criar uma conta</Link>
          </div>
        </Header>

        <Box>
          <Title>
            <h1>1.278 PETS</h1>
            <h3>
              Já foram encontrados com <br /> a nossa ajuda
            </h3>
          </Title>
          <Gallery>
            <img src={imgGallery1} alt="imagem da galeria" />
            <img src={imgGallery2} alt="imagem da galeria" />
            <img src={imgGallery3} alt="imagem da galeria" />
          </Gallery>

          <Description>
            <h3>
              Ajudamos a encontrar pets perdidos com base em sua localização.
            </h3>
            <hr />
          </Description>
        </Box>
      </Content>

      <Buttons>
        <Link to="/map" className="map-button">
          <p>Ver no mapa</p>
          <MdExplore color="#E4E0DC" size={180} />
        </Link>

        <HorizontalButtons>
          <Link to="/report" className="report-button">
            <MdPets size={80} color="#222a36" />
            <p>Reportar Pet perdido</p>
          </Link>

          <Link to="/list" className="search-button">
            <MdSearch size={80} color="#222a36" />
            <p>Pesquisar Pets</p>
          </Link>
        </HorizontalButtons>
      </Buttons>
    </Container>
  );
};

export default Home;
