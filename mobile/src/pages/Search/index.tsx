import {
  NavigationProp,
  NavigationState,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TopBar,
  GoBackButton,
  Title,
  Card,
  Image,
  Infos,
  CardHeader,
  PetName,
  Location,
  CardBody,
  DescriptionTitle,
  Description,
  Bottom,
  Responsible,
  WhatsappButton,
  ShowButton,
} from './styles';

interface Props {
  navigation: NavigationProp<NavigationState, NavigatorScreenParams>;
}

const Search: React.FC<Props> = ({ navigation }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={() => navigation.goBack()} activeOpacity={0.88}>
          <Icon name="chevron-left" size={40} color="#e4e0dc" />
        </GoBackButton>
        <Title>Pesquisar Pets</Title>
      </TopBar>

      <Card animation={show}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1566505512236-9723b3ab54fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Infos>
          <CardHeader>
            <PetName>Bob</PetName>
            <Location>2 km</Location>
          </CardHeader>

          {show ? (
            <CardBody>
              <DescriptionTitle>Descrição:</DescriptionTitle>
              <Description>
                Cachorro da raça xxx, perdido no dia 02/02/2020.
              </Description>
              <Bottom>
                <Responsible>Responsável: Gabriel</Responsible>
                <WhatsappButton />
              </Bottom>
            </CardBody>
          ) : null}
          <ShowButton onPress={() => setShow(!show)}>
            {show ? (
              <Icon name="expand-less" size={56} color="#222a36" />
            ) : (
              <Icon name="expand-more" size={56} color="#222a36" />
            )}
          </ShowButton>
        </Infos>
      </Card>
    </Container>
  );
};

export default Search;
