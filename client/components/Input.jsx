import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import NumericInput from 'react-native-numeric-input';

function Input({value, currency, onChangeCurrency, onChangeValue}) {
  const onChange = value => {
    onChangeValue(value);
  };

  return (
    <View>
      <View>
        <Text style={styles.current_currencies}>{currency}</Text>
        <NumericInput
          totalWidth={300}
          totalHeight={50}
          separatorWidth={0}
          iconStyle={{display: 'none'}}
          onChange={value => onChange(value)}
          valueType="real"
          placeholder="0"
          value={Number(value)}></NumericInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  current_currencies: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default Input;
