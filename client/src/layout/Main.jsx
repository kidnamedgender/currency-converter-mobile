import React from 'react';
import {ScrollView, View} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-native';
import {useTranslation} from 'react-i18next';

import {getValutes} from '../store/slices/valuteSlice';

import Router from '../router';

import TabButton from '../components/TabButton';

import '../langs/i18n';

import style from './style.module.scss';

const Main = () => {
  const {t, i18n} = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRight = () => {
    navigate('/converter');
  };
  const handleLeft = () => {
    navigate('/');
  };
  const changeLanguageHandler = lang => {
    i18n.changeLanguage(lang);
  };

  const handleScrollUp = event => {
    if (!event.nativeEvent.contentOffset.y) {
      dispatch(getValutes());
    }
  };

  return (
    <View style={style.base}>
      <ScrollView
        stickyHeaderIndices={[0]}
        onScrollEndDrag={handleScrollUp}
        style={style.base}>
        <SelectDropdown
          buttonTextStyle={style.dropdown_text}
          dropdownStyle={style.dropdown}
          data={i18n.languages}
          defaultValue={i18n.language}
          onSelect={value => changeLanguageHandler(value)}
          buttonStyle={{
            ...style.lang_block,
            ...style.full_width,
          }}
        />
        <View style={{...style.base, ...style.content}}>
          <Router />
        </View>
      </ScrollView>
      <View>
        <View style={style.tabs}>
          <TabButton
            title={t('demoScope.title_valutePage')}
            handler={handleLeft}
            path="/"
            image="../../assets/images/valutes-icon.png"
          />
          <TabButton
            title={t('demoScope.title_converterPage')}
            handler={handleRight}
            path="/converter"
            image="../../assets/images/recycle-symbol.png"
          />
        </View>
      </View>
    </View>
  );
};

export default Main;
