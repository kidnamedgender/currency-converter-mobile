import {createSlice} from '@reduxjs/toolkit';

const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    valuteFrom: 'USD',
    valuteTo: 'RUB',
    valueFrom: '0',
    valueTo: '0',
  },
  reducers: {
    changeFromValue(state, action) {
      state.valueTo = (
        (action.payload.value /
          action.payload.currencies.current[state.valuteTo]) *
        action.payload.currencies.current[state.valuteFrom]
      ).toFixed(3);
      state.valueFrom = action.payload.value;
    },
    changeToValue(state, action) {
      state.valueFrom = (
        (action.payload.value /
          action.payload.currencies.current[state.valuteFrom]) *
        action.payload.currencies.current[state.valuteTo]
      ).toFixed(3);
      state.valueTo = action.payload.value;
    },
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
