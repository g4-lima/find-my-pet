import React from 'react';
import { Link } from 'react-router-dom';

import { MdHome, MdExplore, MdPets, MdSearch } from 'react-icons/md';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Link to="/" className="button-home">
        <MdHome color="#E4E0DC" size={80} />
      </Link>

      <Link to="/map" className="button-map">
        <MdExplore color="#E4E0DC" size={80} />
      </Link>

      <Link to="/list" className="button-search">
        <MdSearch color="#E4E0DC" size={80} />
      </Link>

      <Link to="/report" className="button-report">
        <MdPets color="#E4E0DC" size={80} />
      </Link>
    </Container>
  );
};

export default Sidebar;
