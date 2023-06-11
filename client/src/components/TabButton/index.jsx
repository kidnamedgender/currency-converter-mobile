import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {useLocation} from 'react-router-native';
import style from './style.module.scss';

const TabButton = ({image, handler, path}) => {
  const location = useLocation();
  return (
    <TouchableOpacity
      style={
        path === location.pathname ? [style.root, style.active] : style.root
      }
      onPress={handler}>
      <Image
        source={
          image === '../../assets/images/icon1.png'
            ? require('../../assets/images/icon1.png')
            : require('../../assets/images/recycle-symbol.png')
        }
        style={style.image}
      />
    </TouchableOpacity>
  );
};

export default TabButton;
