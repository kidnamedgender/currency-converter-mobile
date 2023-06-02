import React from 'react';
import {StyleSheet, View} from 'react-native';
import Section from '../components/Section';
import {useNavigate} from 'react-router-native';
import Input from '../components/Input';
import {useSelector} from 'react-redux';

function ConverterPage() {
    const navigate = useNavigate();
    const {valutes} = useSelector(state => state.valute);

    const [fromCurrency, setFromCurrency] = React.useState('USD');
    const [toCurrency, setToCurrency] = React.useState('RUB');

    const [fromValue, setFromValue] = React.useState(0);
    const [toValue, setToValue] = React.useState(0);

    const currencies = React.useRef({});
    const charCodes = React.useRef([]);
    React.useEffect(() => {
        valutes.forEach(el => (currencies.current[el.CharCode] = el.Value));
        charCodes.current = [];

    }, []);

    valutes.forEach(el => charCodes.current.push(el.CharCode))
    React.useEffect(() => {
        onChangeFromPrice(fromValue);
    }, [fromCurrency]);

    React.useEffect(() => {
        onChangeToPrice(toValue);
    }, [toCurrency]);

    const onChangeFromPrice = value => {
        const price = value / currencies.current[toCurrency];
        const result = price * currencies.current[fromCurrency];
        setToValue(Number(result.toFixed(2)));
        setFromValue(value);
    };

    const onChangeToPrice = value => {
        const price = value / currencies.current[fromCurrency];
        const result = price * currencies.current[toCurrency];
        setFromValue(Number(result.toFixed(2)));
        setToValue(value);
    };
    return (
        <View>
            <Section title="Конвертер">
                <View style={{display: 'flex', flexDirection: 'column'}}>
                    <View style={styles.wrapper}>
                        <Input
                            value={fromValue}
                            currency={fromCurrency}
                            onChangeCurrency={setFromCurrency}
                            onChangeValue={onChangeFromPrice}
                            currencies={charCodes}
                        />
                        <Input
                            value={toValue}
                            currency={toCurrency}
                            onChangeCurrency={setToCurrency}
                            onChangeValue={onChangeToPrice}
                            currencies={charCodes}
                        />
                    </View>
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
        gap: 20,
        paddingHorizontal: 30
    },
});
export default ConverterPage;
