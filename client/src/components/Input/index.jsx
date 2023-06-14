import React from 'react';
import {TextInput, View} from 'react-native';

import {useDispatch} from 'react-redux';

import SelectDropdown from 'react-native-select-dropdown';

import style from './style.module.scss';

const Input = ({
  value,
  currency,
  onChangeCurrency,
  onChangeValue,
  charCodes,
  currencies,
}) => {
  const dispatch = useDispatch();
  const onChangeVal = changedValue => {
    dispatch(onChangeValue({value: changedValue, currencies}));
  };
  const onChangeCur = changedCur => {
    dispatch(onChangeCurrency(changedCur));
  };

  return (
    <View>
      <View style={style.input_block}>
        <SelectDropdown
          data={charCodes.current}
          onSelect={selectedValue => onChangeCur(selectedValue)}
          buttonTextStyle={style.btn_text}
          defaultValue={currency}
          buttonStyle={style.btn}
          search
          dropdownStyle={style.btn_dropdown}
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
