import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders= {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'eaa05180e5msh3ba6c39872b9a6fp192a21jsnbd8f37af8328',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
    
const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi=createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            //query: ({newsCategory, count}) => createRequest(`/coins?limit=${count}`),
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

//'https://bing-news-search1.p.rapidapi.com/news',