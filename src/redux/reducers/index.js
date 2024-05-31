import { combineReducers } from "redux";
import { cartReducer, countReducer, productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    count: countReducer,
    cartItems: cartReducer
})

export default reducers;