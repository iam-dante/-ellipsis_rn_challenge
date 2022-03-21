import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,SearchIcon,SettingIcon, CartIcon
} from '../assets/icons';

import Home from './HomePages';
import Settings from './SettingPage';
import CartPage from './CartPage';
import SearchPage from './SearchPage';
import { FontStyle } from '../assets/fonts';



const Tab = createBottomTabNavigator();
export default function Base() {
  
  return (
    <Tab.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60},
        tabBarShowLabel: true,
        tabBarLabelStyle:{fontSize:12, marginBottom:12, ...FontStyle.meduim}
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: CartIcon,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: SettingIcon,
        }}
      />
    </Tab.Navigator>
  );
}