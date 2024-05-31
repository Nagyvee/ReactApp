import { useState } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
let filteredProducts;

export default function Search(){
    const [searchedItem, setSearchedItem] = useState(0)
    const [searchedHistory, setSearchedHistory] = useState([]);

  const products = useSelector((state) => state.allProducts.products);

    const handleSubmit = () =>{
        event.preventDefault()

        filteredProducts = products.filter(
            (product) => product.name.toLowerCase().includes(searchedItem.toLowerCase())
          );

          const abcdE = filteredProducts.map((item) => {
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

          setSearchedHistory(abcdE)
        
    }

    function handleChange(){
        const {value} = event.target

        setSearchedItem(value)
    }

    return (
        <>
        <div className="search-container">
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleChange} placeholder="Search here Macbook..."/>
        <button>Search</button>
        </form>
        </div>

       {filteredProducts?  <div key="results" className="product-wrap">{searchedHistory}</div> :  <h2 className="search-heaading">What Are you looking for</h2>}
        </>
    )
}