import React from 'react';
// import {Text} from 'react-native'
import LoginPage from './src/Pages/LoginPage';
import Base from './src/Pages';
import {NavigationContainer} from '@react-navigation/native';

export const DataState = React.createContext(0);

export default function App() {
  // const [login, setLogin] = React.useState(false)

  const [state, setState] = React.useState({
    name: '',
    details: '',
    price: '',
    image: '',
    login: false,
    cartList: [],
  });

  return (
    <NavigationContainer>
      <DataState.Provider value={{state, setState}}>
        {state.login ? <Base /> : <LoginPage/>}
      </DataState.Provider>
    </NavigationContainer>
  );
}
