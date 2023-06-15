import React from 'react';
import {Text, View} from 'react-native';

import style from './style.module.scss';

const Error = ({title, desc, code}) => {
  return (
    <View style={style.root}>
      <Text style={style.code}>{code}</Text>
      <Text style={style.title}>{title}</Text>
      <Text style={style.desc}>{desc}</Text>
    </View>
  );
};

export default Error;
