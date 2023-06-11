import React from 'react';
import {TextInput, View} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import style from './style.module.scss';

const Input = ({
  value,
  currency,
  onChangeCurrency,
  onChangeValue,
  currencies,
}) => {
  const onChangeVal = changedValue => {
    onChangeValue(changedValue);
  };
  const onChangeCur = changedCur => {
    onChangeCurrency(changedCur);
  };

  return (
    <View>
      <View style={style.input_block}>
        <SelectDropdown
          data={currencies.current}
          onSelect={selectedValue => onChangeCur(selectedValue)}
          defaultValue={currency}
          buttonStyle={style.btn}
          search
          dropdownStyle={{borderRadius: 10}}
        />
        <TextInput
          style={style.input}
          keyboardType="number-pad"
          onChangeText={e => onChangeVal(e)}
          placeholder="0.000"
          value={String(value)}
          placeholderTextColor="rgba(0,0,0,0.4)"
        />
      </View>
    </View>
  );
};

export default Input;
