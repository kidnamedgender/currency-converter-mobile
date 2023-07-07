import {configureStore} from '@reduxjs/toolkit';
import valuteSlice from './slices/valuteSlice';
import converterSlice from './slices/converterSlice';

export const store = configureStore({
  reducer: {valute: valuteSlice, converter: converterSlice},
});
