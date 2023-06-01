import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ValuteItem({numCode, charCode, Name, Value, Previous}) {
    return (
        <View style={styles.container}>
            <View style={{...styles.codes, ...styles.opacity}}>
                <Text>{numCode}</Text>
                <Text>{charCode}</Text>
            </View>
            <View>
                <Text style={styles.name}>{Name}</Text>
            </View>
            <View style={styles.values}>
                <Text style={styles.bold}>{Value.toFixed(2)}</Text>
                <Text
                    style={(Value - Previous) < 0 ? {...styles.red, ...styles.fontSize_l} : {...styles.green, ...styles.fontSize_l}}>{(Value - Previous).toFixed(2)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        gap: 15,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
    opacity: {
        opacity: 0.8,
    },
    name: {
        width: 200,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    values: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    codes: {
        display: "flex",
    },
    fontSize_l: {
        fontSize: 12,
    }
})