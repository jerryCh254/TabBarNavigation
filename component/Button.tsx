import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
// const navigation=useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          padding: 10,
          marginHorizontal: 10,
        }}
        onPress={props.onPress}>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
