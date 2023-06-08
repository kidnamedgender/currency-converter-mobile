import {configureStore} from '@reduxjs/toolkit';
import valuteSlice from './slices/valuteSlice';

export const store = configureStore({
  reducer: {valute: valuteSlice},
});
