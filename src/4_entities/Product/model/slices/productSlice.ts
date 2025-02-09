import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        ids: [],
    },
    reducers: {
        initState: () => {}
    }
})

export const {reducer} = productSlice
export const {actions} = productSlice
