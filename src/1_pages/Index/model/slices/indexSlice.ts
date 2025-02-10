import {createSlice} from "@reduxjs/toolkit";
import {IndexState} from "/src/1_pages/Index/model/types/types.ts";

const initialState: IndexState = {
    count: 0
}

export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        resetIndex: () => initialState,
        increment: (state) => {
            state.count += 1;
        }
    }
})

const {actions, reducer} = indexSlice
export const {resetIndex, increment} = actions;
export default reducer
