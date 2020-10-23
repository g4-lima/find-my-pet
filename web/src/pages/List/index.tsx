import React from 'react';
import { MdLocationOn } from 'react-icons/md';

import Sidebar from '../../components/Sidebar';
import AvatarImg from '../../assets/img/fmp1.jpeg';

import {
  Container,
  Content,
  ListContainer,
  SearchOptions,
  InputBlock,
  Card,
} from './styles';

const List: React.FC = () => {
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
          <Card>
            <div className="cover-photo">
              <img src={AvatarImg} alt="" />
            </div>
            <div className="card-box">
              <div className="details">
                <div className="infos">
                  <h2>Pet name</h2>
                  <p>Pet description</p>
                  <p>Responsible: Nome do Responsável</p>
                </div>
                <div className="location">
                  <MdLocationOn size={12} />
                  <h3>3 km</h3>
                </div>
              </div>
              <button type="button">Entar em contato</button>
            </div>
          </Card>
        </ListContainer>
      </Content>
      <Sidebar />
    </Container>
  );
};

export default List;
