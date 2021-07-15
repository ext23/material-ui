import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'carpfishingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://89.17.51.75:4089/carpfishing_test/hs/v1/' }),
    endpoints: (build) => ({
        getSession: build.query({
            query: (user) => ({ url: `session?username=${user}&password=${user.pass}` }),
        }),
    })
})

export const { useGetSessionQuery } = api;