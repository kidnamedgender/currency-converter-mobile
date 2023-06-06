import React from 'react';
import {Text, View} from 'react-native';
import style from "./style.module.scss"

export default function Index({
                                       numCode,
                                       charCode,
                                       Name,
                                       Value = 1,
                                       Previous,
                                       Nominal,
                                   }) {
    return (
        <View style={style.container}>
            {/*todo доделай стили*/}
            <View
                style={{...style.list, ...style.opacity, ...style.base_text_color}}>
                <Text style={{...style.base_text_color, ...style.opacity}}>
                    {numCode}
                </Text>
                <Text style={{...style.base_text_color, ...style.opacity}}>
                    {charCode}
                </Text>
            </View>
            <View>
                <Text style={{...style.name, ...style.base_text_color}}>
                    {Nominal} {Name}
                </Text>
            </View>
            <View style={style.values}>
                <Text
                    style={{
                        ...style.base_text_color,
                        ...style.opacity,
                        ...style.bold,
                    }}>
                    {Value.toFixed(2)}
                </Text>
                <Text
                    style={
                        Value - Previous < 0
                            ? {...style.red, ...style.base_font_size}
                            : {...style.green, ...style.base_font_size}
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
