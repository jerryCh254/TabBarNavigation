import { View} from 'react-native';
import React from 'react';
import Component from '../component/Com';
import Button from '../component/Button';
import {useNavigation} from '@react-navigation/native';
import Settings from './Settings';

const Login = () => {
  const navigation =useNavigation();
  const name="Login"
const data="chat box"
  return (
    <View>
     <Component data={data}/>
     <Button name={name} onPress={()=>navigation.navigate(Settings)} />
    </View>
  );
};

export default Login;

