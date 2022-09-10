// Create the Product Component
//import a link tag to take to the individual product page
import { Link } from "react-router-dom";
// Also display the store constituents (products)
import { useSelector } from "react-redux"; //A hook to access the redux store state

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    //destructure products
    //const { id, title } = products[0]; now removed 
    //products being an array, we'll use a map to display all products
    const renderList = products.map((product) => {
        //destructure into constituents for display
        const { id, title, image, price, category } = product;
        return (
            <div className="four column wide" key={id}>
                <Link to={`./product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div> 
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });

    return <>{renderList}</>;
};

export default ProductComponent;