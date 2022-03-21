import React from 'react'
// import {Text} from 'react-native'
import LoginPage from './src/Pages/LoginPage'
import Base from "./src/Pages"
import {NavigationContainer} from '@react-navigation/native';

export  default function App() {
  return(
    // <LoginPage/>
    <NavigationContainer>
      <Base/>
    </NavigationContainer>
  )
}

