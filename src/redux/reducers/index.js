// in the complete app, we'll have lots/multiples of reducers. In thid file, we'll combine all the reducers
import { combineReducers } from "redux"; //from the redux core

//import the reducers you created
import { productReducer, selectedProductReducer } from "./productReducer";

//now combine all reducers into the reducers const
export const reducers = combineReducers ({
    //just for now
    allProducts: productReducer,
    product: selectedProductReducer,
});

//export default reducers;