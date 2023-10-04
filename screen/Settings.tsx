import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textstyle}>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    color: 'black',
  },
});
