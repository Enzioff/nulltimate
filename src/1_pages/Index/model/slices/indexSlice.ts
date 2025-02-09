import {createSlice} from "@reduxjs/toolkit";

export const indexSlice = createSlice({
    name: 'index',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        }
    }
})

const {actions, reducer} = indexSlice
export const {increment} = actions;
export default reducer
