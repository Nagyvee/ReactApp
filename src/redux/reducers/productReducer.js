import { Ipads, Iphones , Macbooks , Watches , OtherItems } from "../../assets/Products";
import { ActionTypes } from "../actions/action-types"

const allApleproducts = Ipads.concat(Iphones, Macbooks , Watches, OtherItems)
let cartNumber = JSON.parse(localStorage.getItem('cartNumber'))

if(cartNumber == undefined){
   cartNumber = 0
}else{
    cartNumber = JSON.parse(localStorage.getItem('cartNumber'))
}

const initialState = {
    products: allApleproducts,
    count: cartNumber,
    cartItems: JSON.parse(localStorage.getItem('cartItems'))
}
// productReducer.js

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.SET_PRODUCTS: {
        return {
          ...state, // spread the existing state
          products: action.payload, // update products with the payload
        };
      }
      default:
        return state;
    }
  };
  
  // countReducer.js
  
  export const countReducer = (state = initialState, action) => {
    let countNum = JSON.parse(localStorage.getItem('cartNumber'))

    if(countNum == null){
      countNum = 0
    }else{
      countNum = JSON.parse(localStorage.getItem('cartNumber'))
    }
  
    switch (action.type) {
      case ActionTypes.SET_COUNT: {
        return {
          ...state, // spread the existing state
          count: countNum
        };
      }
      default:
        return state;
    }
  };

  // Assuming you have a reducer for the cart
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REMOVE_ITEM:
        return {
          ...state,
            cartItems: JSON.parse(localStorage.getItem('cartItems'))
        }
    default:
      return state;
  }
};

  




