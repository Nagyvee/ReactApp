import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const updatedState = useSelector((state) => state)
  const maxRelatedProducts = 4;

  const products = useSelector((state) => state.allProducts.products);
  let cartNumber = useSelector((state) => state.count.count);

  const fetchSelectedProduct = products.find(
    (product) => product.id == productId
  );
  const relatedProductsCategory = products.filter(
    (product) => product.category === fetchSelectedProduct.category
  );

  function HandleAddToCart() {
    const setProduct = fetchSelectedProduct;
    let localProducts = JSON.parse(localStorage.getItem('cartItems')) || {};
    let cartTotal = JSON.parse(localStorage.getItem('cartTotal')) || 0;
  
    if (localProducts[setProduct.name] === undefined) {
      localProducts = {
        ...localProducts,
        [setProduct.name]: { ...setProduct, incart: 0 },
      };
    }
  
    cartNumber += 1;
    cartTotal += localProducts[setProduct.name].price;
    localProducts[setProduct.name].incart += 1;
  
    localStorage.setItem('cartItems', JSON.stringify(localProducts));
    localStorage.setItem('cartNumber', JSON.stringify(cartNumber));
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
    
    dispatch({ type: 'SET_COUNT' });
    console.log(updatedState);
  }
  


  const relatedProducts = relatedProductsCategory.slice(0, maxRelatedProducts);

  const selectedItem = relatedProducts.map((item) => (
    <div key={item.id}>
      <Link to={`/product/${item.id}`}>
        <div key={item.id}>
          <img
            src={item.img}
            className="releted-products-img"
            alt={item.name + " image"}
          />
        </div>
      </Link>
    </div>
  ));

  return (
    <>
    <div className="product-details-main">
      <div className="product-details-container">
        <div className="related-products-wrap">
          <h4>Related Products</h4>
          <div className="related-products-content">{selectedItem}</div>
        </div>

   <div className="products-details-info">
        <div className="product-details-wrap">
          <div className="product-details-content">
            <div>
              <img
                src={fetchSelectedProduct.img}
                alt={fetchSelectedProduct.name + " image"}
              />
            </div>
            <div className="product-details-text">
              <h3>{fetchSelectedProduct.name}</h3>
              <p>{fetchSelectedProduct.description}</p>
              <h4>R {fetchSelectedProduct.price}</h4>

              <button onClick={HandleAddToCart} name={fetchSelectedProduct}>
                Buy
              </button>
            </div>
          </div>
        </div>
        </div>

        <div className="cart-container">
          <h2>Cart</h2>
          <h4>ITEMS: {cartNumber}</h4>
          <Link to={"/shopping-cart"}>
            <button>View Cart</button>
          </Link>
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductDetails;
