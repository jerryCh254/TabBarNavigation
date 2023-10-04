import {View} from 'react-native';
import React from 'react';
import Component from '../component/Com';


const Home = () => {
  const data = 'some data';
  return (
  
    <View>
      <Component data= {data}/>
    </View>
  );
};


export default Home;
