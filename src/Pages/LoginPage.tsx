import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {GoogleIcon, FacebookIcon, TwitterIcon} from '../assets/icons';
import {FontStyle, Font} from '../assets/fonts';

export default function LoginPage() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        marginTop: '10%',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30, ...FontStyle.bold, color: '#000000'}}>
        Log in
      </Text>
      <Text style={{...Font.displayStyle, marginTop: 12}}>
        Login with one of the following option
      </Text>

      <View style={{marginTop: '35%'}}>
        <View>
          <Text style={{...FontStyle.meduim, color: '#000000', fontSize: 18}}>
            EMAIL
          </Text>
          <TextInput
            placeholder="Email"
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

        <View style={{marginTop: 20}}>
          <Text style={{...FontStyle.meduim, color: '#000000', fontSize: 18}}>
            PASSWORD
          </Text>
          <TextInput
            placeholder="Password"
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
        <View
          style={{
            position: 'relative',
            backgroundColor: 'yellow',
            marginTop: 16,
          }}>
          <Text
            style={{
              position: 'absolute',
              right: 0,
              ...FontStyle.meduim,
              fontSize: 16,
            }}>
            Forgot the password ?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: '#1BCABF',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '12%',
          }}>
          <Text style={{fontSize: 24, ...FontStyle.bold}}>LOG IN</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text style={{...FontStyle.regular, fontSize: 16}}>
            Create an account.
          </Text>
          <Text
            style={{
              ...FontStyle.bold,
              fontSize: 16,
              marginLeft: 10,
              color: '#1BCABF',
            }}>
            Sign Up
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 100,
          marginTop: '10%',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 80,
            backgroundColor: '#BEECE9',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <FacebookIcon />
        </View>

        <View
          style={{
            width: '30%',
            height: 80,
            backgroundColor: '#BEECE9',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <GoogleIcon />
        </View>

        <View
          style={{
            width: '30%',
            height: 80,
            backgroundColor: '#BEECE9',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <TwitterIcon />
        </View>
      </View>
    </View>
  );
};

