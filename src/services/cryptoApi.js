import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const  cryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'eaa05180e5msh3ba6c39872b9a6fp192a21jsnbd8f37af8328',
    
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest =(url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
            //query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoDetails:builder.query({
            query :(coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            //query :({coinId, timeperiod}) => createRequest(`/coin/${coinId} /history/${timeperiod}`),
            query :({coinId, timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery   
  } = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'eaa05180e5msh3ba6c39872b9a6fp192a21jsnbd8f37af8328',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };