import {configureStore} from '@reduxjs/toolkit';
import valuteSlice from './slices/valuteSlice.js';

export const store = configureStore({
  reducer: {valute: valuteSlice},
});
