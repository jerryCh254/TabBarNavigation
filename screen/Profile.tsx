import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textstyle}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    color: 'black',
    
  },
});
