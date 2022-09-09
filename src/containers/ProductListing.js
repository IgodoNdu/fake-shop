// Create the Product Listing Component
//fetch products from the redux store, to access redux store, import: useSelector
import { useSelector } from "react-redux"; //A hook to access the redux store state

const ProductListing = () => {
    //fetch products from store
    const products = useSelector((state) => state);
    //console.log(products);
    return (
        <div className="ui grid container">
            <h1>ProductListing</h1>
        </div>
    );
};

export default ProductListing;