// src/utils/reducer/user.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {login, getUser, createUser, addToCart, getUserCart, createCart, getProductionById} from '@utils/api/baseAPI';
import { fetchProduction } from './production';
export const UserLogin = createAsyncThunk(
    'user/login',
    async (user, thunkAPI) => {
        let res = await login(user.username, user.password).then(res => res);
        const userId = res.sub;
        thunkAPI.dispatch(getUserById(userId));
        thunkAPI.dispatch(GetUserCart(userId));
        thunkAPI.dispatch(fetchProduction());
        return res.sub
    }
)

export const GetUserCart = createAsyncThunk(
    'user/getUserCart',
    async (id, thunkAPI) => {
        let res = await getUserCart(id).then(res => res);
        return res;
    }
)

export const UserRegister = createAsyncThunk(
    'user/register',
    async (user, thunkAPI) => {
        let res = await createUser(user).then(res => res);
        return res;
    }
)

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (id, thunkAPI) => {
        let res = await getUser(id).then(res => res);
        return res;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: false,
        user: null,
        userId: null,
        cart: [],
        error: null,
        cartProduction: [],
    },
    reducers: {
        Auth: (state, action) => {
            state.login = true;
            state.user = action.payload;
        },
        Logout: (state) => {
            // clear all state
            state.login = false;
            state.user = null;
            state.userId = null;
            state.cart = null;
            state.error = null;
            state.message = null;
        },
        CheckCart: (state, action) => {
            let data = action.payload;
            let cart = cartProduction;
            cart.forEach((item) => {
                if (item.id == data.id){
                    state.message = "Product already in cart";
                    state.error = 'error';
                    return false
                }
            })
            return true
        },
        Quantity: (state, action) => {
            switch (action.payload.type) {
                case 'increase':
                    state.cart.products[action.payload.index].quantity += 1;
                    break;
                case 'decrease':
                    state.cart.products[action.payload.index].quantity -= 1;
                    break;
                default:
                    break;
            }
        },
        AddToCart: (state, action) => {
            let data = action.payload;
            let cart = state.cart.products;
            if (cart.length == 0){
                state.cart.products.push(data);
            } else {
                cart.forEach((item) => {
                    if (item.productId == data.productId){
                        state.message = "Product already in cart";
                        state.error = 'error';
                        return false
                    }
                })
                state.cart.products.push(data);
            }
        },
        RemoveFromCart: (state, action) => {
            let data = action.payload;
            let cart = state.cart.products;
            cart.forEach((item, index) => {
                if (item.productId == data.id){
                    state.cart.products.splice(index, 1);
                }
            })
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(UserLogin.pending, (state) => {
            state.loading = true;
        })
        .addCase(UserLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.login = true;
            state.user = action.payload;
            state.userId = action.payload;
        })
        .addCase(UserLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    builder
        .addCase(getUserById.pending, (state) => {
            state.loading = true;
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(getUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    builder
        .addCase(UserRegister.pending, (state) => {
            state.loading = true;
        })
        .addCase(UserRegister.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(UserRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    builder
        .addCase(GetUserCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(GetUserCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        })
        .addCase(GetUserCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export const {Auth, Logout, CheckCart, Quantity, AddToCart, updateUser, RemoveFromCart} = userSlice.actions;

export default userSlice.reducer;
