import React from "react";
import {Button, StyleSheet, View} from "react-native";
import Section from "../components/Section";
import {useNavigate} from "react-router-native";
import Input from "../components/Input";
import {useSelector} from "react-redux";

function ConverterPage() {
    const navigate = useNavigate();
    const {valutes} = useSelector(state => state.valute)

    const [fromCurrency, setFromCurrency] = React.useState('RUB');
    const [toCurrency, setToCurrency] = React.useState('USD');

    const [fromValue, setFromValue] = React.useState(0);
    const [toValue, setToValue] = React.useState(0);

    const currencies = React.useRef({})
    React.useEffect(() => {
        valutes.forEach(el => currencies.current[el.CharCode] = el.Value)
        console.log(currencies.current[toCurrency])
    }, [])


    React.useEffect(() => {
        onChangeFromPrice(fromValue);
    }, [fromValue])

    React.useEffect(() => {
        onChangeToPrice(toValue)
    }, [toValue])

    const onChangeFromPrice = (value) => {
        const price = value / currencies.current[fromCurrency];
        const result = price * currencies.current[toCurrency];
        setToValue(result.toFixed(3));
        setFromValue(value);
    };

    const onChangeToPrice = (value) => {
        const price = value / currencies.current[toCurrency];
        const result = price * currencies.current[fromCurrency];
        setFromValue(result.toFixed(3));
        setToValue(value);
    };
    return (
        <View>
            <Button onPress={() => navigate('/')} title='Валюты'></Button>
            <Section title='Конвертер'>
                <View style={styles.wrapper}>
                    <Input value={fromValue} currency={fromCurrency} onChangeCurrency={setFromCurrency}
                           onChangeValue={onChangeFromPrice}/>
                    <Input value={toValue} currency={toCurrency} onChangeCurrency={setToCurrency}
                           onChangeValue={onChangeToPrice}/>
                    <Button title={'Конвертировать'}></Button>
                </View>
            </Section>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
});
export default ConverterPage;