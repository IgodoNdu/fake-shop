// in the complete app, we'll have lots/multiples of reducers. In thid file, we'll combine all the reducers
import { combineReducers } from "redux"; //from the redux core

//import the reducers you created
import { productReducer } from "./productReducer";

const reducers = combineReducers ({
    //just for now
    allProducts: productReducer,
});