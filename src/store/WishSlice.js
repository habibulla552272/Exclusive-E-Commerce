import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
    name:"wish",
    initialState:{
        wishItemSlice : localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish') ) : []
    },
    reducers: {
        addToWish: (state,action) => {
            const findData = state.wishItemSlice.findIndex(item => item.id === action.payload.id);

            if(findData === -1) {
                state.wishItemSlice.push(action.payload);
                localStorage.setItem('wish', JSON.stringify(state.wishItemSlice))
            }else{
                state.wishItemSlice[findData]. Qont += 1;
                localStorage.setItem('wish', JSON.stringify(state.wishItemSlice))
            }
        },
        deleteWishItem:(state, action)=>{
            state.wishItemSlice.splice(action.payload, 1);
            localStorage.setItem('wish', JSON.stringify(state.wishItemSlice))

        },

        moveAllWishItems:(state, action) => {
            state.wishItemSlice = [];
            localStorage.setItem('wish', JSON.stringify(state.wishItemSlice))
        }
    }
})

export default WishSlice.reducer;
export const {addToWish, deleteWishItem,moveAllWishItems}= WishSlice.actions;
