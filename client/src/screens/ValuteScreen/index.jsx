import React from 'react';
import {View} from 'react-native';

import {useSelector} from 'react-redux';

import {useTranslation} from 'react-i18next';

import CyrillicToTranslit from 'cyrillic-to-translit-js';

import ValuteItem from '../../components/ValuteItem';
import Title from '../../components/Title';

import style from './style.module.scss';

const ValuteScreen = () => {
  const {t} = useTranslation();
  const toTranslit = new CyrillicToTranslit();

  const {valutes} = useSelector(state => state.valute);

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
