import { configureStore } from '@reduxjs/toolkit'
import {reducer as IndexReducer} from "/src/1_pages/Index";
import {reducer as CatalogReducer} from "/src/2_widgets/Catalog";
import {RTKQueryAPI} from "/src/5_shared/api/RTKQuery.ts";

export const store = configureStore({
    reducer: {
        [RTKQueryAPI.reducerPath]: RTKQueryAPI.reducer,
        index: IndexReducer,
        catalog: CatalogReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(RTKQueryAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
