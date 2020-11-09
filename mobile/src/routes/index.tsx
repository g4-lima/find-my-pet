import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default Routes;
