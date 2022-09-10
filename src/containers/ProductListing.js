// Create the Product Listing Component
//fetch products from the redux store, to access redux store, import: useSelector
import { useSelector } from "react-redux"; //A hook to access the redux store state
//import product component for the display of store (products)
import ProductComponent from "./ProductComponent"
//import axios for API calls (data fetching)
import axios from "axios";
import { useEffect } from "react";


const ProductListing = () => {
    //fetch products from store
    const products = useSelector((state) => state);

    //create function to fetch all the products from fakestore API
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log('Err', err);
        });
        console.log(response.data);
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