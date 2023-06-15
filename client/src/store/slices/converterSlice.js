import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  valuteFrom: 'USD',
  valuteTo: 'RUB',
  valueFrom: '0',
  valueTo: '0',
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    // action конвертирования из первой валюты во вторую
    changeFromValue(state, action) {
      state.valueTo = (
        (action.payload.value /
          action.payload.currencies.current[state.valuteTo]) *
        action.payload.currencies.current[state.valuteFrom]
      ).toFixed(3);
      state.valueFrom = action.payload.value;
    },
    // action конвертирования из второй валюты в первую
    changeToValue(state, action) {
      state.valueFrom = (
        (action.payload.value /
          action.payload.currencies.current[state.valuteFrom]) *
        action.payload.currencies.current[state.valuteTo]
      ).toFixed(3);
      state.valueTo = action.payload.value;
    },

    // actions замены валюты
    changeValuteFrom(state, action) {
      state.valuteFrom = action.payload;
    },
    changeValuteTo(state, action) {
      state.valuteTo = action.payload;
    },
  },
});

export const {
  changeFromValue,
  changeToValue,
  changeValuteFrom,
  changeValuteTo,
} = converterSlice.actions;

export default converterSlice.reducer;
