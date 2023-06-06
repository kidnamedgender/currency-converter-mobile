import React from 'react';
import {Text, View} from 'react-native';

import style from "../assets/style.scss"

export default function Section({children, title}) {
    return (
        <View style={style.section_container}>
            <Text style={{...style.section_title, ...style.bold}}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}