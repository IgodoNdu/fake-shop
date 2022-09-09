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
}

//create the reducer for the product
export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}