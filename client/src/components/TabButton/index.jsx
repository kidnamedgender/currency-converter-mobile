import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useLocation} from 'react-router-native';
import style from './style.module.scss';

const TabButton = ({title, handler, path}) => {
  const location = useLocation();
  return (
    <TouchableOpacity
      style={
        path === location.pathname ? [style.root, style.active] : style.root
      }
      onPress={handler}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;
