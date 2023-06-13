import React from 'react';
import {View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import CyrillicToTranslit from 'cyrillic-to-translit-js';

import ValuteItem from '../../components/ValuteItem';
import Title from '../../components/Title';
import Error from '../../components/Error/Error';

import {getValutes} from '../../store/slices/valuteSlice';

import style from './style.module.scss';

const ValuteScreen = () => {
  const dispatch = useDispatch();
  const {valutes, status, error} = useSelector(state => state.valute);
  const toTranslit = new CyrillicToTranslit();

  const {t} = useTranslation();

  React.useEffect(() => {
    dispatch(getValutes());
  }, [dispatch]);

  if (status === 'pending') {
    return <Title title={t('demoScope.loading')} />;
  }

  if (status === 'rejected') {
    return (
      <Error title={error.error} desc={error.message} code={error.statusCode} />
    );
  }

  return (
    <View>
      <Title title={t('demoScope.title_valutePage')} />
      <View style={style.list}>
        {valutes?.map(el => (
          <ValuteItem
            key={el.id}
            Name={
              t('demoScope.lang') === 'ru'
                ? el.Name
                : toTranslit.transform(el.Name)
            }
            Previous={el.Previous}
            charCode={el.CharCode}
            numCode={el.NumCode}
            Value={el.Value}
            Nominal={el.Nominal}
          />
        ))}
      </View>
    </View>
  );
};

export default ValuteScreen;
