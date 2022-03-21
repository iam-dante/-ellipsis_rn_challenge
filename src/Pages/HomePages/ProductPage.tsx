import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { Font, FontStyle } from '../../assets/fonts';
import { DataState } from '../../../App';
import { BackIcon } from '../../assets/icons';



export default function ProductPage(){

    const {state, setState} = React.useContext(DataState);
    return (
      <View style={{flex: 1, position:"relative"}}>
          {/* <BackIcon style={{position:'absolute'}} /> */}
        <Image
          style={{height: '50%'}}
          source={{
            uri: state.image
          }}
        />
        <View style={{paddingHorizontal: 16, paddingVertical: 50}}>
          <View style={{height: 150}}>
            <Text style={{...FontStyle.meduim, fontSize: 30, color: 'black'}}>
              {state.name}
            </Text>
            <Text
              style={{
                ...FontStyle.regular,
                fontSize: 20,
                marginTop: 12,
              }}>
              {state.details}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#1BCABF',
              marginTop: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>{
                setState( pv => ({
                ...pv,
                cartList: [...pv.cartList, {name:state.name, details:state.detail, image:state.image, price:state.price}],
            }))}}
            
            >
            <Text style={{...FontStyle.meduim, fontSize: 20, color: 'black'}}>
              Add to Cart $ {state.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
