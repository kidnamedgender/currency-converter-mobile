import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Evil from 'react-native-vector-icons/EvilIcons';

import {useDispatch} from 'react-redux';

import {getValutes} from '../../store/slices/valuteSlice';

import style from './style.module.scss';

const Title = ({title}) => {
  const dispatch = useDispatch();

  const refreshHandler = () => {
    dispatch(getValutes());
  };

  return (
    <View style={style.root}>
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={refreshHandler}>
        <Evil name="refresh" size={45} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Title;
