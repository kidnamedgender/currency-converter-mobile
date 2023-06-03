import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

function Input({value, currency, onChangeCurrency, onChangeValue, currencies}) {
  const onChangeVal = value => {
    onChangeValue(value);
  };
  const onChangeCur = value => {
    onChangeCurrency(value);
  };

  return (
    <View>
      <View>
        <SelectDropdown
          data={currencies.current}
          onSelect={value => onChangeCur(value)}
          defaultValue={currency}
          buttonStyle={{width: '100%'}}
          search={true}></SelectDropdown>
        <TextInput
          style={styles.input}
          keyboardType={'number-pad'}
          onChangeText={e => onChangeVal(e)}
          placeholder="0.000"
          value={String(value)}
          placeholderTextColor={'rgba(0,0,0,0.4)'}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.05)',
    color: '#000000',
  },
  current_currencies: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default Input;
