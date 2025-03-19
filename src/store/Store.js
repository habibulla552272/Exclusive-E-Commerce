import { configureStore } from "@reduxjs/toolkit";

import CardSlice from '../store/CardSlice'
import WishSlice from '../store/WishSlice'

const store = configureStore({
    reducer: {
        cardSlice: CardSlice,

        wishSlice: WishSlice,
    }
})

export default store
