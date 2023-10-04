import {View} from 'react-native';
import React from 'react';
import Component from '../component/Com';
import Button from '../component/Button';
import {useNavigation} from '@react-navigation/native';
import Settings from './Settings';

const Post = () => {
  const navigation=useNavigation();
  const data="Posting"
  const name="Posting"
  return (
    <View>
      <Component data={data} />
      <Button name={name} onPress={()=>navigation.navigate(Settings)}/>
    </View>
  );
};

export default Post;