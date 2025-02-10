import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const RTKQueryAPI = createApi({
    reducerPath: 'RTKQueryAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5173/'
    }),
    endpoints: () => ({}),
})
