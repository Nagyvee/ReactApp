import { useSelector } from "react-redux/es/hooks/useSelector"
import './index.css'
import { Link } from "react-router-dom"

export default function AllProductsList(){
    const products = useSelector((state) => state.allProducts.products)
   


    const displayProducts = products.map((item) => {
        return (
          <>
          <Link to={`/product/${item.id}`}>
          <div key={item.id}>
            <img src={item.img} className="products-img" alt={item.name + ' image'}/>
            <h4>R {item.price}</h4>
            <p> {item.name}</p>
            <button>
              Configure Item &gt;
            </button>
          </div>
          </Link>
          </>
        );
      });

    return(
        <>
   <h2 className="item-category-heading">All Apple Products</h2>
   <div className="product-wrap">
   {displayProducts}
   </div>
        </>
     
        
    )
}