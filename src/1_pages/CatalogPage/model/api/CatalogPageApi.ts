import {RTKQueryAPI} from "/src/5_shared/api/RTKQuery.ts";

export const CatalogPageApi = RTKQueryAPI.injectEndpoints({
    endpoints: (build) => ({
        getCatalogPageData: build.query({
            query: () => '/products',
        })
    })
})

export const {useGetCatalogPageDataQuery} = CatalogPageApi
