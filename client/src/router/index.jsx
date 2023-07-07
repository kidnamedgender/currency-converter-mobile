import React from 'react';
import {Route, Routes} from 'react-router-native';

import {useSelector, useDispatch} from 'react-redux';

import {useTranslation} from 'react-i18next';

import ValuteScreen from '../screens/ValuteScreen';
import ConverterScreen from '../screens/ConverterScreen';
import Title from '../components/Title';
import Error from '../components/Error/Error';

import {getValutes} from '../store/slices/valuteSlice';

const Router = () => {
  const {t} = useTranslation();

  const {valutes, status, error} = useSelector(state => state.valute);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!valutes.length) {
      dispatch(getValutes());
    }
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
    <Routes>
      <Route path="/" element={<ValuteScreen />} />
      <Route path="/converter" element={<ConverterScreen />} />
    </Routes>
  );
};
export default Router;
