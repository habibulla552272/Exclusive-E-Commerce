import { createSlice } from "@reduxjs/toolkit";

const CardSlice =  createSlice({
    name: 'Card',
    initialState: {
        cardItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ,
    },
    reducers: {
        addtoCard: (state,action)=>{
   
         const findData =state.cardItem.findIndex(item => item.id === action.payload.id);
         
         if(findData === -1){
            state.cardItem.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.cardItem));
         }else{
            state.cardItem[findData].Qont += 1;
            localStorage.setItem('cart',JSON.stringify(state.cardItem))
         }
            

        },
        removefromCart: (state,action)=>{
           if(state.cardItem[action.payload].Qont > 1){
            state.cardItem[action.payload].Qont -=  1;
            localStorage.setItem('cart',JSON.stringify(state.cardItem));
            
           }

        },
        addformCart:(state,action)=>{
            state.cardItem[action.payload].Qont += 1;
            localStorage.setItem('cart',JSON.stringify(state.cardItem));
        }

        

}

})

export default CardSlice.reducer;

export const  {addtoCard,removefromCart,addformCart}= CardSlice.actions;