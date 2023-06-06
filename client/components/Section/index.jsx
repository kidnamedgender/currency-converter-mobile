import React from 'react';
import {Text, View} from 'react-native';

import style from "./style.module.scss"

export default function Index({children, title}) {
    return (
        <View style={style.section_container}>
            <Text style={style.section_title}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}