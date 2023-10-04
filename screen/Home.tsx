import {View} from 'react-native';
import React from 'react';
import Component from '../component/Com';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';


const Home = () => {
  const navigation=useNavigation();
  const name = 'SignUp';
  const data = 'some data';
  return (
    <View>
      <Component data={data} />
      <Button name={name} onPress={()=>navigation.navigate(Profile)}/>
    </View>
  );
};

export default Home;
