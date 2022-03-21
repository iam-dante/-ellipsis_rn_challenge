import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './HomePage';
import ProductPage from './ProductPage';

const Stack = createNativeStackNavigator();

export default function Base() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Homepage" component={HomePage} />
      <Stack.Screen name="ProductPage" component={ProductPage} />
    </Stack.Navigator>
  );
}
