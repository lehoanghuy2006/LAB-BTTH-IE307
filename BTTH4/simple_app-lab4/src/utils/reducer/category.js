// src/utils/reducer/category.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories, getProductionByCategory} from '@utils/api/baseAPI.js';


export const fetchCategories = createAsyncThunk(
    'category/fetchall',
    async () => {
        const response = await getCategories().then(res => res);
        var data = {
            category: response
        }
        await Promise.all(response.map(async (item) => {
            const production = await getProductionByCategory(item).then(res => res);
            data[item] = production;
        }));
        console.log(data);
        return data;
    }
);

export const fetchProductionByCategory = createAsyncThunk(
    'category/fetchproductionbycategory',
    async (category) => {
        const production = await getProductionByCategory(category).then(res => res);
        return {
            category,
            production
        };
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        productionByCategory: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                categories = action.payload.category;
                state.categories = categories;
                state.productionByCategory = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default categorySlice.reducer;