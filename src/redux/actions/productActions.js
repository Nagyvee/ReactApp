import { ActionTypes } from "./action-types"

export const setProducts = (products) =>{
   return{
    type: ActionTypes.SET_PRODUCTS,
    payload: products
   }
}

export const setCounter = (count) =>{
    return{
     type: ActionTypes.SET_COUNT,
     payload: count
    }
 }

