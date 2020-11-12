import {
  NavigationProp,
  NavigationState,
  NavigatorScreenParams,
} from '@react-navigation/native';
import React from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TopBar,
  Title,
  BottomBar,
  MapButtom,
  ReportButtom,
  SearchButtom,
  MapButtonTitle,
  ReportButtonTitle,
  SeacrhButtonTitle,
} from './styles';

interface Props {
  navigation: NavigationProp<NavigationState, NavigatorScreenParams>;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <TopBar>
        <Title>10.278 Pets já foram encontrados</Title>
      </TopBar>
      <MapView
        style={{
          position: 'absolute',
          top: '4%',
          left: 0,
          right: 0,
          bottom: '16%',
        }}
        loadingEnabled={true}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <BottomBar>
        <MapButtom onPress={() => {}} activeOpacity={0.88}>
          <Icon
            name="account-circle"
            size={40}
            color="#e4e0dc"
            style={{ padding: 10 }}
          />
          <MapButtonTitle>Log in</MapButtonTitle>
        </MapButtom>
        <ReportButtom onPress={() => {}} activeOpacity={0.88}>
          <Icon name="pets" size={40} color="#e4e0dc" style={{ padding: 10 }} />
          <ReportButtonTitle>Reportar pet</ReportButtonTitle>
        </ReportButtom>
        <SearchButtom
          onPress={() => navigation.navigate('List')}
          activeOpacity={0.88}>
          <Icon
            name="format-list-bulleted"
            size={40}
            color="#e4e0dc"
            style={{ padding: 10 }}
          />
          <SeacrhButtonTitle>Listar pets</SeacrhButtonTitle>
        </SearchButtom>
      </BottomBar>
    </Container>
  );
};

export default Home;
