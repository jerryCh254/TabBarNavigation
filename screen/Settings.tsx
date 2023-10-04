import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Component from '../component/Com';
import {useNavigation} from '@react-navigation/native';
import Profile from './Profile';
import Button from '../component/Button';


const Settings = () => {
  const navigation=useNavigation();
  const name="Settings"
  const data="Settings"
  return (
    <View>
      <Component data={data}/>
      <Button name={name}onPress={()=>navigation.navigate(Profile)}/>
    </View>
  );
};

export default Settings;

