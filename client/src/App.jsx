import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native';

import {store} from './store';

import {WithSplashScreen} from './components/Splash';
import Main from './layout/Main';

import './langs/i18n';

import style from './assets/style.scss';

const App = () => {
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    setIsAppReady(true);
  }, [isAppReady]);

  return (
    <View style={style.base}>
      <WithSplashScreen isAppReady={isAppReady} style={style.base}>
        <SafeAreaView style={style.base}>
          <Main />
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
