import { configureStore } from "@reduxjs/toolkit";

import CardSlice from '../store/CardSlice'
import wishSlice from '../store/wishSlice'




const store = configureStore({
    reducer:{
        cardSlice:  CardSlice,

        wishSlice: wishSlice,
=======
        


    }
})

export default store