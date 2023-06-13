import React from 'react';
import {Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import CyrillicToTranslit from 'cyrillic-to-translit-js';
import ValuteItem from '../../components/ValuteItem';
import Title from '../../components/Title';

import {getValutes} from '../../store/slices/valuteSlice';

import style from './style.module.scss';

const ValuteScreen = () => {
  const dispatch = useDispatch();
  const {valutes, status} = useSelector(state => state.valute);

  const toTranslit = new CyrillicToTranslit();

  const {t} = useTranslation();

  React.useEffect(() => {
    dispatch(getValutes());
  }, [dispatch]);

  if (status === 'pending') {
    return (
      <View>
        <Text style={style.status_block}>{t('demoScope.loading')}</Text>
      </View>
    );
  }

  if (status === 'rejected') {
    return (
      <View>
        <Text style={style.status_block}>{t('demoScope.error')}</Text>
      </View>
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
