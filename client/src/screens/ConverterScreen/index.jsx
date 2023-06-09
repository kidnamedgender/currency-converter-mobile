import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Section from '../../components/Title';
import Input from '../../components/Input';

import style from './style.module.scss';
import Title from '../../components/Title';

const ConverterScreen = () => {
  const {valutes} = useSelector(state => state.valute);

  const [fromCurrency, setFromCurrency] = React.useState('USD');
  const [toCurrency, setToCurrency] = React.useState('RUB');

  const [fromValue, setFromValue] = React.useState(0);
  const [toValue, setToValue] = React.useState(0);

  const currencies = React.useRef({});
  const charCodes = React.useRef([]);

  const {t} = useTranslation();

  charCodes.current = [];
  valutes.forEach(el => charCodes.current.push(el.CharCode));
  const onChangeFromPrice = React.useCallback(
    value => {
      const price = value / currencies.current[toCurrency];
      const result = price * currencies.current[fromCurrency];
      setToValue(Number(result.toFixed(3)));
      setFromValue(value);
    },
    [fromCurrency, toCurrency],
  );

  const onChangeToPrice = React.useCallback(
    value => {
      const price = value / currencies.current[fromCurrency];
      const result = price * currencies.current[toCurrency];
      setFromValue(Number(result.toFixed(3)));
      setToValue(value);
    },
    [fromCurrency, toCurrency],
  );

  React.useEffect(() => {
    onChangeFromPrice(fromValue);
  }, [fromCurrency, fromValue, onChangeFromPrice]);

  React.useEffect(() => {
    onChangeToPrice(toValue);
  }, [toCurrency, toValue, onChangeToPrice]);

  React.useEffect(() => {
    valutes.forEach(el => {
      currencies.current[el.CharCode] = el.Value / el.Nominal;
    });
    charCodes.current = [];
    onChangeFromPrice(1);
  }, [onChangeFromPrice, valutes]);

  return (
    <View>
      <Title title={t('demoScope.title_converterPage')} />
      <View style={style.list}>
        <View style={style.wrapper}>
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
    </View>
  );
};

export default ConverterScreen;
