import { configureStore } from '@reduxjs/toolkit'
import {reducer} from "/src/1_pages/Index";

export const store = configureStore({
    reducer: {
        index: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
