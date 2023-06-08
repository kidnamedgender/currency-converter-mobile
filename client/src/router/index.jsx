import React from 'react';
import {Route, Routes} from 'react-router-native';
import ValuteScreen from '../screens/ValuteScreen';
import ConverterScreen from '../screens/ConverterScreen';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ValuteScreen />} />
      <Route path="/converter" element={<ConverterScreen />} />
    </Routes>
  );
};
export default Router;
