// Create the Product Listing Component
//fetch products from the redux store, to access redux store, import: useSelector
import { useSelector } from "react-redux"; //A hook to access the redux store state
//import product component for the display of store (products)
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
    //fetch products from store
    const products = useSelector((state) => state);
    //console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;