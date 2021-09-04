import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'carpfishingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://89.17.51.75:4089/carpfishing_test/hs/v1/' }),
    endpoints: (build) => ({
        getSession: build.query({
            query: (arg) => ({ url: `session?username=${arg.login}&password=${arg.pass}`}),
        }),
        getTeams: build.query({
            query: (arg) => ({ url: `teams?match=${arg.matchId}`}),
        }),
        getTeamDetails: build.query({
            query: (arg) => ( { url: `teams?match=${arg.matchId}&team=${arg.teamId}`}),
        }),
    })
})

export const { 
    useGetSessionQuery, 
    useGetTeamsQuery,
    useGetTeamDetailsQuery
} = api;