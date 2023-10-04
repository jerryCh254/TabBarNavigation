import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30, color: 'black'}}>Text handling</Text>
      <Text style={{fontSize: 30, color: 'black'}}>Your Name is:{name}</Text>
      <TextInput
        style={styles.textstyle}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button
        style={styles.but}
        title="Clear input value"
        onPress={() => setName('')}
      />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  textstyle: {
    color: 'blue',
    fontSize: 15,
    borderWidth: 1,
    margin: 10,
    borderColor: 'blue',
  },
  but: {
    margin: 10,
    top: 10,
  },
});
