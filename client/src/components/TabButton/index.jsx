import {TouchableOpacity, Image} from 'react-native';
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
          image === '../../assets/images/valutes-icon.png'
            ? require('../../assets/images/valutes-icon.png')
            : require('../../assets/images/convert-icon.png')
        }
        style={style.image}
      />
    </TouchableOpacity>
  );
};

export default TabButton;
