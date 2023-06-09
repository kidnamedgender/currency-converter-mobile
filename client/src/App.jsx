import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import {Provider, useDispatch} from 'react-redux';
import {NativeRouter, useNavigate} from 'react-router-native';
import {useTranslation} from 'react-i18next';
import {store} from './store';
import {getValutes} from './store/slices/valuteSlice';

import Router from './router';

import {WithSplashScreen} from './components/Splash';

import './langs/i18n';

import style from './assets/style.scss';
import TabButton from './components/TabButton';

const App = () => {
  const {t, i18n} = useTranslation();
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    setIsAppReady(true);
  }, [isAppReady]);

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
      console.log('Data update successfully');
    }
  };
  return (
    <View style={style.base}>
      <WithSplashScreen isAppReady={isAppReady} style={style.base}>
        <SafeAreaView style={style.base}>
          <ScrollView onScrollEndDrag={handleScrollUp} style={style.base}>
            <SelectDropdown
              data={i18n.languages}
              defaultValue={i18n.language}
              onSelect={value => changeLanguageHandler(value)}
              buttonStyle={{
                ...style.lang_block,
                ...style.full_width,
              }}
            />
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TabButton
                title={t('demoScope.title_valutePage')}
                handler={handleLeft}
                path="/"
              />
              <TabButton
                title={t('demoScope.title_converterPage')}
                handler={handleRight}
                path="/converter"
              />
            </View>
            <View style={{...style.base, ...style.content}}>
              <Router />
            </View>
          </ScrollView>
        </SafeAreaView>
      </WithSplashScreen>
    </View>
  );
};

export default () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </NativeRouter>
  );
};
