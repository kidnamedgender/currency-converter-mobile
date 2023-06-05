import React from 'react';
import {Text, View} from 'react-native';

import {styles} from "../assets/styles";

export default function Section({children, title}) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}