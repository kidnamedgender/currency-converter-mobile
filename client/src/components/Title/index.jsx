import React from 'react';
import {Text, View} from 'react-native';

import style from './style.module.scss';

const Title = ({title}) => {
  return (
    <View style={style.root}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Title;
