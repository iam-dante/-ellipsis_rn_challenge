import React from 'react'
// import {Text} from 'react-native'
import LoginPage from './src/Pages/LoginPage'
import Base from "./src/Pages"
import {NavigationContainer} from '@react-navigation/native';

export const DataState = React.createContext();



export  default function App() {

  const [state, setState] = React.useState({
    name: '',
    details:'',
    price: '',
    image:'',
    cartList: [],
  });

  return (
    <NavigationContainer>
      <DataState.Provider value={{state, setState}}>
        <Base />
       {/* <LoginPage /> */}
      </DataState.Provider>
    </NavigationContainer>
  );
}

