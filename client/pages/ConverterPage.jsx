import React from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import Section from "../components/Section";
import {useNavigate} from "react-router-native";

function ConverterPage() {
    const navigate = useNavigate();
    return (
        <View>
            <Button onPress={() => navigate('/')} title='Валюты'></Button>
            <Section title='Конвертер'>
                <View style={styles.wrapper}>
                    <View>
                        <Text style={styles.current_currencies}>RUB</Text>
                        <TextInput style={styles.input} placeholder='0'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.current_currencies}>USD</Text>
                        <TextInput style={styles.input} placeholder='0'></TextInput>
                    </View>
                    <Button title={'Конвертировать'}></Button>
                </View>
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        paddingLeft: 10,
        fontSize: 18
    },
    wrapper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    current_currencies: {
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 5
    }
});
export default ConverterPage