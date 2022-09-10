import { ActionTypes } from "../constants/action-types";
//create the initial state object (here: an empty array) for use in this reducer
const initialState = {
    products: [
        //fun-test data
        {
            id: 1,
            title: 'Hoodie',
            category: 'Men',
        },
    ]
};

//create the reducer for the product
export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }

};

//create reducer for the selectedProductReducer
export const selectedProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}; 
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};     
        default:
            return state;
    }
}