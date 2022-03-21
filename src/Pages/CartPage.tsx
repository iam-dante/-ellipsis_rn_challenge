import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {FontStyle} from '../assets/fonts';
import {DeleteIcon} from '../assets/icons';
import {DataState} from '../../App';

function CardCart(props:any){

  console.log(props)
  return (
    <View style={{height: 120, backgroundColor: '#1BCABF', flexDirection: 'row', marginTop:6}}>
      <Image
        style={{
          height: 120,
          width: '40%',
        }}
        source={{
          uri: props.image,
        }}
      />
      <View
        style={{
          width: '60%',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{...FontStyle.meduim, fontSize: 24, color: '#000000'}}>
            {props.name}
          </Text>
          <Text style={{...FontStyle.regular, fontSize: 20, color: '#000000'}}>
            $ 99
          </Text>
        </View>
        <DeleteIcon />
      </View>
    </View>
  );
}

export default function HomePage() {
  const {state} = React.useContext(DataState);
  // console.log(state.cartList)
  return (
    <View style={{flex: 1, padding: 16}}>
      <Text style={{...FontStyle.meduim, fontSize: 30, color: 'black'}}>
        Cart
      </Text>
      <ScrollView style={{flex: 1, marginTop: 24, }}>

        {
          state.cartList.map((vl,ix)=>{  return(<CardCart key={ix} name={vl.name} price={vl.price} image={vl.image}/>)})
        }

      </ScrollView>
    </View>
  );
}
