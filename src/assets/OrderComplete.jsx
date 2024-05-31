import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderComplete(){

    const customerName = localStorage.getItem('customerName')
    const dispatch = useDispatch();



    window.addEventListener('load', () =>{
        localStorage.clear();
        console.log('done')
        dispatch({ type: 'SET_COUNT'});
        
    })
    return(
        <>
        <div className="order-completed">
        <h2>Thank You {customerName}</h2>
        <h4>Your Order Is Successfully Received.</h4>
        <img src="/public/home-images/products/completed.png" alt="completed image" />
       <Link to={'/'}><p>Go back Home</p></Link> 
        </div>
        </>
    )
    
}