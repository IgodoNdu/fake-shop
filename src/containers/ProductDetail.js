// Create the Product Detail Component
//import axios for individual product detail api call
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId);
    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    );
};

export default ProductDetail;