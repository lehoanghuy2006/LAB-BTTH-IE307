// src/utils/store.js
import {configureStore} from '@reduxjs/toolkit';

import productionReducer from '@utils/reducer/production';
import categoryReducer from '@utils/reducer/category';
import userReducer from '@utils/reducer/user';

export const store = configureStore({
    reducer: {
        production: productionReducer,
        category: categoryReducer,
        user: userReducer,
    },
});