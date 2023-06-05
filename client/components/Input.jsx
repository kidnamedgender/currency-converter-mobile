import React from 'react';
import {TextInput, View} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import {styles} from "../assets/styles";

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
                    buttonStyle={styles.full_width}
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

export default Input;
