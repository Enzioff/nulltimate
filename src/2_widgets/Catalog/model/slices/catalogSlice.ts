import {createSlice} from "@reduxjs/toolkit";
import {catalogState} from "/src/2_widgets/Catalog/types/types.ts";

const initialState: catalogState = {
    catalog: [],
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        initialCatalog: () => initialState,
        initCatalog: (state, action) => {
            state.catalog = [...action.payload];
        }
    },
})

const {actions, reducer} = catalogSlice;
export const {initialCatalog, initCatalog} = actions;
export default reducer;
