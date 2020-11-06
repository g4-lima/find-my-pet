import React from 'react';
import { View, Image, Text } from 'react-native';
import MapView from 'react-native-maps';

import {
  Container,
  TopBar,
  Title,
  BottomBar,
  MapButtom,
  ReportButtom,
  SearchButtom,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Title>10.278 Pets já foram encontrados</Title>
      </TopBar>
      <MapView
        style={{
          position: 'absolute',
          top: '8%',
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
        <MapButtom title="map" onPress={() => {}} />
        <ReportButtom title="report" onPress={() => {}} />
        <SearchButtom title="search" onPress={() => {}} />
      </BottomBar>
    </Container>
  );
};

export default Home;
