import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import List from '../pages/List';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="List" component={List} />
  </Stack.Navigator>
);

export default Routes;
