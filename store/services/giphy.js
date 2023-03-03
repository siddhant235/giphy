import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { GIPHY_API_KEY } from "../../helpers/consts"


export const giphyApis=createApi({
    reducerPath:"giphyApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://api.giphy.com/v1/gifs/"}),
    endpoints:(builder)=>({
        getTrendingGiphys:builder.query({
            query:({offset})=>`trending?api_key=${GIPHY_API_KEY}&limit=10&rating=g&offset=${offset}`,
            keepUnusedDataFor:120
        }),
        giphySearch:builder.query({
            query:({searchParam,offset})=>`search?api_key=${GIPHY_API_KEY}&q=${searchParam}&limit=10&offset=${offset}&rating=g&lang=en`
        })
    })
})

export const {useGetTrendingGiphysQuery,useGiphySearchQuery}=giphyApis