// src/utils/api/baseAPI.js
import {jwtDecode} from 'jwt-decode'
import {decode} from 'base-64'
const baseUrl = 'https://fakestoreapi.com/'

global.atob = decode

export const getProduction = async () => {
    let res =  await fetch(baseUrl + 'products').then(res => res.json());
    return res;
}

export const getProductionById = async (id) => {
    let res =  await fetch(baseUrl + 'products/' + id).then(res => res.json());
    return res;
}

export const getLatestProduction = async () => {
    let res =  await fetch(baseUrl + 'products?sort=desc').then(res => res.json());
    // get 5 item 
    res = res.slice(0, 6);
    return res;
}

export const getOldestProduction = async () => {
    let res =  await fetch(baseUrl + 'products?sort=asc').then(res => res.json());
    // get 5 item
    res = res.slice(0, 6);
    return res;
}

export const getCategories = async () => {
    let res =  await fetch(baseUrl + 'products/categories').then(res => res.json());
    return res;
}

export const getProductionByCategory = async (category) => {
    let res =  await fetch(baseUrl + 'products/category/' + category).then(res => res.json());
    return res;
}

export const createUser = async (user) => {
    let res = await fetch(baseUrl + 'users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json());
    console.log(res);
    return res;
}

export const login = async (username, password) => {
    let res = await fetch(baseUrl + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(res => res.json());
    let token = res.token;
    let user = jwtDecode(token);
    return user;
}

export const getUser = async (id) => {
    let res = await fetch(baseUrl + 'users/' + id).then(res => res.json());
    return res;
}

export const updateUser = async (id, user) => {
    let res = await fetch(baseUrl + 'users/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json());
    return res;
}

export const createCart = async (cart) => {
    let res = await fetch(baseUrl + 'carts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    }).then(res => res.json());
    return res;
}

export const getUserCart = async (id) => {
    let res = await fetch(baseUrl + 'carts/' + id).then(res => res.json());
    return res;
}

export const addToCart = async (id, cart) => {
    let res = await fetch(baseUrl + 'carts/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    }).then(res => res.json());
    return res;
}