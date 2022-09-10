// set 3 actions for set_product, selected_product, remove_selected_product
// import the constant 'ActionTypes' for use in setting product actions
import { ActionTypes } from "../constants/action-types";
//Note to export product actions for use

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,  
    };
};