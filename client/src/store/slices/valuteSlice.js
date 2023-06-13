import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {instance} from '../../axios';

export const getValutes = createAsyncThunk(
  'valute/getValutesStatus',
  async (arg, thunkAPI) => {
    try {
      const {data} = await instance.get('/valutes');
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const valuteSlice = createSlice({
  name: 'valute',
  initialState: {
    valutes: [],
    status: 'pending',
    error: {},
  },
  extraReducers: builder => {
    builder.addCase(getValutes.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(getValutes.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(getValutes.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.valutes = action.payload;
      state.valutes = [
        ...state.valutes,
        {
          id: '89DB',
          CharCode: 'RUB',
          NumCode: '643',
          Value: 1,
          Previous: 1,
          Nominal: 1,
          Name: 'Российский рубль',
        },
      ];
    });
  },
});
export default valuteSlice.reducer;
