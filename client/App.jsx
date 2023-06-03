import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {useSwipe} from './hooks/SwipeHook';

import {store} from './store';
import {Provider, useDispatch} from 'react-redux';
import {WithSplashScreen} from './components/Splash';

import {NativeRouter, Route, Routes, useNavigate} from 'react-router-native';
import ConverterPage from './pages/ConverterPage';
import ValutePage from './pages/ValutePage';
import {getValutes} from './store/slices/valuteSlice';

function App() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  React.useEffect(() => {
    setIsAppReady(true);
  }, [isAppReady]);
  const {onTouchStart, onTouchEnd} = useSwipe(
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    6,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSwipeLeft() {
    navigate('/converter');
  }

  function onSwipeRight() {
    navigate('/');
  }

  function onSwipeUp() {
    dispatch(getValutes());
    console.log('Data update successfully');
  }

  return (
    <WithSplashScreen isAppReady={isAppReady} style={styles.base}>
      <SafeAreaView style={styles.base}>
        <ScrollView
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={styles.base}>
          <View style={styles.base}>
            <Routes>
              <Route path={'/'} element={<ValutePage />} />
              <Route path={'/converter'} element={<ConverterPage />} />
            </Routes>
          </View>
        </ScrollView>
      </SafeAreaView>
    </WithSplashScreen>
  );
}

export default () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
