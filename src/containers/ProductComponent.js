// Create the Product Component
// Also display the store constituents (products)
import { useSelector } from "react-redux"; //A hook to access the redux store state

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    //destructure products
    //const { id, title } = products[0];
    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <div className="content">
                            {/* <div className="header">{title}</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;