// Here we create a store
import { legacy_createStore } from "redux";
//import the combined reducers
import { reducers } from "./reducers/index";

//create the redux store with params: 1st param = combined reducer, 2nd param = the state
const store = legacy_createStore(reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;