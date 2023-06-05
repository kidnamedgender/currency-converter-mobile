import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "../assets/styles";

export default function ValuteItem({
                                       numCode,
                                       charCode,
                                       Name,
                                       Value = 1,
                                       Previous,
                                       Nominal,
                                   }) {
    return (
        <View style={styles.container}>
            <View
                style={{...styles.codes, ...styles.opacity, ...styles.base_text_color}}>
                <Text style={{...styles.base_text_color, ...styles.opacity}}>
                    {numCode}
                </Text>
                <Text style={{...styles.base_text_color, ...styles.opacity}}>
                    {charCode}
                </Text>
            </View>
            <View>
                <Text style={{...styles.name, ...styles.base_text_color}}>
                    {Nominal} {Name}
                </Text>
            </View>
            <View style={styles.values}>
                <Text
                    style={{
                        ...styles.base_text_color,
                        ...styles.opacity,
                        ...styles.bold,
                    }}>
                    {Value.toFixed(2)}
                </Text>
                <Text
                    style={
                        Value - Previous < 0
                            ? {...styles.red, ...styles.fontSize_l}
                            : {...styles.green, ...styles.fontSize_l}
                    }>
                    {Value - Previous < 0
                        ? `${(Value - Previous).toFixed(2)}`
                        : `+${(Value - Previous).toFixed(2)}`}
                </Text>
                <Text style={styles.percents}>
                    {Value - Previous < 0
                        ? `${(((Value - Previous) / Value) * 100).toFixed(2)}%`
                        : `+${(((Value - Previous) / Value) * 100).toFixed(2)}%`}
                </Text>
            </View>
        </View>
    );
};
