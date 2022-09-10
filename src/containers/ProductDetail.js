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
    //console.log(product);
    const {image, title, price, category, description} = product;
    
    // using the productId, now make API call to FakeStore
    const  fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
            console.log("Err", err);
        });

        //Now let's dispatch the action
        dispatch(selectedProduct(response.data));
    };

    //Call the fetchProductDetail, & we want the useEffect to run everytime the productId changes
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                    <div className="column lp">
                        <img className="ui fluid image" src={image} />
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                        <a className="ui teal tag label">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
    );
};

export default ProductDetail;