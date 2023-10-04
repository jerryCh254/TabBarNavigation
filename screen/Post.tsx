import {View} from 'react-native';
import React from 'react';
import Component from '../component/Com';

const Post = () => {
  const data="Posting";
  return (
    <View>
      <Component data={data} />
    </View>
  );
};

export default Post;