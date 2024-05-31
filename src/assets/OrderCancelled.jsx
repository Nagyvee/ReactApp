import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderCancelled(){
    const dispatch = useDispatch();

    window.addEventListener('load', () =>{
        localStorage.clear();
        dispatch({ type: 'SET_COUNT'});
        
    })
    return(
        <>
        <div className="order-completed">
        <h2>Order Cancelled</h2>
        <img src="/public/home-images/products/cancelled.png" alt="completed image" />
       <Link to={'/'}><p>Go back Home</p></Link> 
        </div>
        </>
    )
    
}