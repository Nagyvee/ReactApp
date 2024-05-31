import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShoppingCart(){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'))
    const cartNumber = JSON.parse(localStorage.getItem('cartNumber'))
    const cartTotal = JSON.parse(localStorage.getItem('cartTotal'))
    const dispatch = useDispatch();
    let displayCartItems;
    const state = useSelector((state)=>state.cartItems)

    const removeItem = (itemName) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        let cartNumber = JSON.parse(localStorage.getItem('cartNumber')) || 0;
        let cartTotal = JSON.parse(localStorage.getItem('cartTotal')) || 0;
    
        if (cartItems[itemName]) {
          const item = cartItems[itemName];
    
          // Deduct item price from cartTotal
          cartTotal -= item.price * item.incart;
    
          // Deduct item quantity from cartNumber
          cartNumber -= item.incart;
    
          // Remove the item from the cartItems object
          delete cartItems[itemName];
    
          // Update local storage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          localStorage.setItem('cartNumber', JSON.stringify(cartNumber));
          localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
          dispatch({ type: 'REMOVE_ITEM' });
          dispatch({ type: 'SET_COUNT' });
          console.log(state)
    
          // Dispatch an action to update the Redux state (if needed)
          // dispatch({ type: 'REMOVE_ITEM', payload: { itemName } });
        }
      };

      const addItem = (itemName) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        let cartNumber = JSON.parse(localStorage.getItem('cartNumber')) || 0;
        let cartTotal = JSON.parse(localStorage.getItem('cartTotal')) || 0;
    
        if (cartItems[itemName]) {
          const item = cartItems[itemName];
          item.incart += 1
    
          // Deduct item price from cartTotal
          cartTotal += item.price;
    
          // Deduct item quantity from cartNumber
          cartNumber += 1;
    
          // Update local storage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          localStorage.setItem('cartNumber', JSON.stringify(cartNumber));
          localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
          dispatch({ type: 'REMOVE_ITEM' });
          dispatch({ type: 'SET_COUNT' })
        }
      };


      const minusItem = (itemName) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        let cartNumber = JSON.parse(localStorage.getItem('cartNumber')) || 0;
        let cartTotal = JSON.parse(localStorage.getItem('cartTotal')) || 0;
    
        if (cartItems[itemName].incart > 1 ) {
          const item = cartItems[itemName];
          item.incart -= 1
    
          // Deduct item price from cartTotal
          cartTotal -= item.price;
    
          // Deduct item quantity from cartNumber
          cartNumber -= 1;
    
          // Update local storage
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          localStorage.setItem('cartNumber', JSON.stringify(cartNumber));
          localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
          dispatch({ type: 'REMOVE_ITEM' });
          dispatch({ type: 'SET_COUNT' })
        }
      };
    

    if(cartItems && cartNumber >= 1){
    displayCartItems = Object.values(cartItems).map((item)=>{
        return(
            <>
            <div key={item.id} className="cart-items">

           <div>
           <img src={item.img} alt={item.img} />
           </div>

           <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="p-price-el">Price: R{item.price}.00</p>
            <span className="in-stock">In Stock</span>
            <h4 onClick={()=>removeItem(item.name)}>Remove</h4>
           </div>

           <div>
            <h3>R {item.price * item.incart}.00</h3>
            <h5>Qnty: <span>{item.incart}</span></h5>
            <FontAwesomeIcon  className="add-icon  icon-up" icon={faAngleUp}   onClick={()=>addItem(item.name)}/>
            <FontAwesomeIcon  className="add-icon icon-down" icon={faAngleDown}  onClick={()=>minusItem(item.name)}/>
           </div>
           
            </div>
            </>
        )
    })} else{
        displayCartItems =  <>
        <div className="cart-items-null">
        <h2 className="shopping-cart-heading">No items in your Cart</h2>
        </div>
        </>
    }

    return(
        <div>
            <h2 className="shopping-cart-heading">Shopping Cart</h2>             
           <div className="shipped-from-el">
           <h3>Shipped from Apple</h3>
           </div>
           <div className="cart-wrapper">

           <div>
            {displayCartItems}
           </div>

           {cartNumber >= 1 && <div className="cart-summary">
           <h3>Cart Summary</h3>
              <div>
                <h4>Total: <span>{`(${cartNumber} items)`}</span></h4>
              </div>
              <div>
                <h2>R {cartTotal}.00</h2>
              </div>
              <Link to={'/products/checkout'}><button>CheckOut</button></Link>
              </div>}
              </div> 

        </div>

    )
}