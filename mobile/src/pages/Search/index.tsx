import {
  NavigationProp,
  NavigationState,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TopBar, GoBackButton, Title } from './styles';

interface Props {
  navigation: NavigationProp<NavigationState, NavigatorScreenParams>;
}

const Search: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <TopBar>
        <GoBackButton onPress={() => navigation.goBack()} activeOpacity={0.88}>
          <Icon name="navigate_before" size={40} color="#222a36" />
        </GoBackButton>
        <Title>Pesquisar Pets</Title>
      </TopBar>
    </Container>
  );
};

export default Search;
