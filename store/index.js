import {configureStore} from "@reduxjs/toolkit"
import { giphyApis } from "./services/giphy"
import ThemeSliceReducer from "./slices/app-theme-slice"


export default configureStore({
    reducer:{
        [giphyApis.reducerPath]:giphyApis.reducer,
        theme:ThemeSliceReducer
    },
    middleware :(getDefaultMiddleware)=>getDefaultMiddleware().concat(giphyApis.middleware)
})


