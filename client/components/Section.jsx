import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Section({children, title}) {
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={
                    styles.sectionTitle}>
                {title}
            </Text>
            <View>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
});
