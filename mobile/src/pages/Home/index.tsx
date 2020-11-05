import React from 'react';
import { View, Image } from 'react-native';

import { Title } from './styles';

const Home: React.FC = () => {
  return (
    <View>
      <Title>home</Title>
      <Image
        style={{ width: 400, height: 600, resizeMode: 'cover' }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1507682520764-93440a60e9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }}
      />
    </View>
  );
};

export default Home;
