// Create the Product Listing Component
//fetch products from the redux store, to access redux store, import: useSelector
import { useDispatch, useSelector } from "react-redux"; //A hook to access the redux store state
//import product component for the display of store (products)
import ProductComponent from "./ProductComponent"
//import axios for API calls (data fetching)
import axios from "axios";
import { useEffect } from "react";
//Having received/fetched the products, there's need to save the data in our store via dispatch
import { setProducts } from "../redux/actions/productActions";


const ProductListing = () => {
    //fetch products from store
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    //create function to fetch all the products from fakestore API
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log('Err', err);
        });
        //Having received/fetched the products, there's need to save  (set) the data/products in our store via dispatch
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;