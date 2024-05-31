import { configureStore } from "@reduxjs/toolkit";
import reducers from "../redux/reducers";

const store = configureStore(
   { reducer: reducers
   }) ;
   Window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()

export default store