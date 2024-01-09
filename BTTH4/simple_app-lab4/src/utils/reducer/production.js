// src/utils/reducer/production.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProduction, getLatestProduction, getOldestProduction} from '@utils/api/baseAPI.js';

export const fetchProduction = createAsyncThunk(
    'production/fetchall',
    async () => {
        const response = await getProduction().then(res => res);
        return response;
    }
);

export const fetchLatestProduction = createAsyncThunk(
    'production/fetchlatest',
    async () => {
        const response = await getLatestProduction().then(res => res);
        return response;
    }
);

export const fetchOldestProduction = createAsyncThunk(
    'production/fetcholdest',
    async () => {
        const response = await getOldestProduction().then(res => res);
        return response;
    }
);

export const productionSlice = createSlice({
    name: 'production',
    initialState: {
        production: [],
        productionById: {},
        hotProduction: [],
        newProduction: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduction.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProduction.fulfilled, (state, action) => {
                state.loading = false;
                state.production = action.payload;
            })
            .addCase(fetchProduction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        builder
            .addCase(fetchLatestProduction.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLatestProduction.fulfilled, (state, action) => {
                state.loading = false;
                state.newProduction = action.payload;
            })
            .addCase(fetchLatestProduction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
        builder
            .addCase(fetchOldestProduction.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOldestProduction.fulfilled, (state, action) => {
                state.loading = false;
                state.hotProduction = action.payload;
            })
            .addCase(fetchOldestProduction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {getAllProduction} = productionSlice.actions;

export default productionSlice.reducer;