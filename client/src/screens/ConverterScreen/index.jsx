import React from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import Input from '../../components/Input';
import Title from '../../components/Title';

import style from './style.module.scss';
import {
  changeFromValue,
  changeToValue,
  changeValuteFrom,
  changeValuteTo,
} from '../../store/slices/converterSlice';

const ConverterScreen = () => {
  const {valutes} = useSelector(state => state.valute);
  const {valuteFrom, valuteTo, valueFrom, valueTo} = useSelector(
    state => state.converter,
  );
  const dispatch = useDispatch();

  const currencies = React.useRef({});
  const charCodes = React.useRef([]);

  const {t} = useTranslation();

  charCodes.current = [];
  valutes.forEach(el => charCodes.current.push(el.CharCode));

  React.useEffect(() => {
    dispatch(changeFromValue({value: valueFrom, currencies}));
  }, [dispatch, valuteFrom]);

  React.useEffect(() => {
    dispatch(changeToValue({value: valueTo, currencies}));
  }, [dispatch, valuteTo]);

  React.useEffect(() => {
    valutes.forEach(el => {
      currencies.current[el.CharCode] = el.Value / el.Nominal;
    });
    charCodes.current = [];
    dispatch(
      changeFromValue({value: valueFrom === '0' ? 1 : valueFrom, currencies}),
    );
  }, [dispatch, valutes]);

  return (
    <View>
      <Title title={t('demoScope.title_converterPage')} />
      <View style={style.list}>
        <View style={style.wrapper}>
          <Input
            value={valueFrom}
            currency={valuteFrom}
            onChangeCurrency={changeValuteFrom}
            onChangeValue={changeFromValue}
            charCodes={charCodes}
            currencies={currencies}
          />
          <Input
            value={valueTo}
            currency={valuteTo}
            onChangeCurrency={changeValuteTo}
            onChangeValue={changeToValue}
            charCodes={charCodes}
            currencies={currencies}
          />
        </View>
      </View>
    </View>
  );
};

export default ConverterScreen;
