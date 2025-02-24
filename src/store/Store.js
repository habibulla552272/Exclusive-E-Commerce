import { configureStore } from "@reduxjs/toolkit";

import CardSlice from '../store/CardSlice'


const store = configureStore({
    reducer:{
        cardSlice:  CardSlice,

    }
})

export default store