import React from 'react';
import {Text, View} from 'react-native';

import style from './style.module.scss';

const ValuteItem = ({
  numCode,
  charCode,
  Name,
  Value = 1,
  Previous,
  Nominal,
}) => {
  return (
    <View style={style.container}>
      <View style={style.codes_list}>
        <Text style={style.code}>{numCode}</Text>
        <Text style={style.code}>{charCode}</Text>
      </View>
      <View>
        <Text style={{...style.name}}>
          {Nominal} {Name}
        </Text>
      </View>
      <View style={style.values_list}>
        <Text style={style.value}>{Value.toFixed(2)}</Text>
        <Text
          style={
            Value - Previous < 0
              ? style.difference_minus
              : style.difference_plus
          }>
          {Value - Previous < 0
            ? `${(Value - Previous).toFixed(2)}`
            : `+${(Value - Previous).toFixed(2)}`}
        </Text>
        <Text style={style.percents}>
          {Value - Previous < 0
            ? `${(((Value - Previous) / Value) * 100).toFixed(2)}%`
            : `+${(((Value - Previous) / Value) * 100).toFixed(2)}%`}
        </Text>
      </View>
    </View>
  );
};

export default ValuteItem;
