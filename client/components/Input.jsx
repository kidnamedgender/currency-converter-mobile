import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

function Input({value, currency, onChangeCurrency, onChangeValue}) {
    return (
        <View>
            <View>
                <Text style={styles.current_currencies}>{currency}</Text>
                <TextInput style={styles.input} placeholder='0' value={String(value)}></TextInput>
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
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    current_currencies: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 5
    }
});
export default Input