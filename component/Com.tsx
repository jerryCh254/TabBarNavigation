import React from 'react';
import {View, Text} from 'react-native';

const Component = props => {
  console.warn(props);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Text style={{color: 'black', fontSize: 20}}>{props.data}</Text>
      
    </View>
  );
};

export default Component;
