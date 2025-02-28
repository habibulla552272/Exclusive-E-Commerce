import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
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
        }
    }
})

export default wishSlice.reducer;
export const {addToWish}= wishSlice.actions;
