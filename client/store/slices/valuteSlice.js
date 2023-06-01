import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {instance} from '../../axios';

export const getValutes = createAsyncThunk(
    'valute/getValutesStatus',
    async () => {
        try {
            const {data} = await instance.get('/valutes');
            return data;
        } catch (err) {
            console.log(err);
        }
    },
);

const valuteSlice = createSlice({
    name: 'valute',
    initialState: {
        valutes: [],
        status: 'pending',
    },
    extraReducers: builder => {
        builder.addCase(getValutes.pending, state => {
            state.status = 'pending';
        });
        builder.addCase(getValutes.rejected, state => {
            state.status = 'rejected';
        });
        builder.addCase(getValutes.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.valutes = action.payload;
        });
    },
});
export default valuteSlice.reducer;
