// Create the Product Detail Component
//import axios for individual product detail api call
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import for dispatch action
import { useDispatch, useSelector } from "react-redux";
//import appropriate action for this use-case
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const { productId } = useParams();
    //console.log(productId);
    
    //for dispatch action: dispatch function reference
    const dispatch = useDispatch();

    //for accessing the selectedProduct
    const product = useSelector((state) => state.product);
    
    // using the productId, now make API call to FakeStore
    const  fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
            console.log("Err", err);
        });

        //Now let's dispatch the action
        dispatch(selectedProduct(response.data));
    };

    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    );
};

export default ProductDetail;