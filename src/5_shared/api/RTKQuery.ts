import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const RTKQueryAPI = createApi({
    reducerPath: 'RTKQueryAPI',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: () => ({}),
})
