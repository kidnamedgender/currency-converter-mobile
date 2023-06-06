import React from 'react';
import {TextInput, View} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import style from './style.module.scss'

function Index({value, currency, onChangeCurrency, onChangeValue, currencies}) {
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
                    buttonStyle={style.btn}
                    search={true}></SelectDropdown>
                <TextInput
                    style={style.input}
                    keyboardType={'number-pad'}
                    onChangeText={e => onChangeVal(e)}
                    placeholder="0.000"
                    value={String(value)}
                    placeholderTextColor={'rgba(0,0,0,0.4)'}></TextInput>
            </View>
        </View>
    );
}

export default Index;
