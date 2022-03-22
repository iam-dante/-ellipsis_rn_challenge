import React from 'react';
import {Text,View, TextInput} from 'react-native';
import { Font } from '../assets/fonts';

export default function HomePage() {
  return (
    <View style={{flex: 1, padding: 16}}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'gray'}
        style={{
          borderColor: '#CFCDCD',
          height: 62,
          borderRadius: 4,
          borderWidth: 1,
          marginTop: 10,
          paddingHorizontal: 12,
          ...Font.displayStyle,
        }}
      />
    </View>
  );
}
