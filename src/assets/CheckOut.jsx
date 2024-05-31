import { useState } from "react";

export default function CheckOut() {
  let cartTotal = localStorage.getItem("cartTotal");
  const cartNumber = localStorage.getItem('cartNumber')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    areaCode: '',
    clientConfirmed:false

  })

  function HandleChange(){
    const {name, value} = event.target
    const ragex = /^\d{3}-\d{3}-\d{4}$/;

    if([name] == 'phone'){
        if (value === '' || ragex.test(value)){
            console.log('Done')
        }else{
            console.log(ragex.test(value))
        }
    }

    setFormData((prevData)=>{
      return{
          ...prevData,
         [name]: value
      }
  })
  }

  function HandleSubmit(){
    event.preventDefault()
    setFormData((prevData)=>{
      return{
        ...prevData,
        clientConfirmed: true
      }
    })
    localStorage.setItem('customerName', formData.firstName +' '+ formData.lastName)
  }

 let formEl =''

 if(formData.clientConfirmed){
  formEl =         <form action="https://sandbox.payfast.co.za​/eng/process" method="post">
  <input type="hidden" name="merchant_id" value="10032083" />
  <input type="hidden" name="merchant_key" value="fnx2cojjbs9z5" />
  <input
    type="hidden"
    name="return_url"
    value="http://127.0.0.1:5173/products/completed"
  />
  <input
    type="hidden"
    name="cancel_url"
    value="http://127.0.0.1:5173/products/cancelled"
  />
  <input type="hidden" name="amount" value={cartTotal} />
  <input type="hidden" name="item_name" value="Test Product" />
  <button className="pay-now confirmed">Pay Now</button>
</form>
 } else{
  formEl = <button className="pay-now not-confirmed" onClick={()=>alert('Please Confirm Your Address and Details.')}>Pay Now</button>
 }

  return (
    <>
  <div className="checkout-wrapper">
     <div className="customer-details">
        <form onSubmit={HandleSubmit}>
          <h2>Enter Your Details</h2>
        <label htmlFor="Name">First Name <span>*</span></label>
        <input type="text" name="firstName" onChange={HandleChange} value={formData.firstName} required/><br />

        <label htmlFor="Last Name">Last Name <span>*</span></label>
        <input type="text" name="lastName" onChange={HandleChange} value={formData.lastName} required/><br />

<label htmlFor="email">Email <span>*</span></label>
        <input type="email" name="email" onChange={HandleChange} value={formData.email} required/><br />

        <label htmlFor="phone">Phone <span>*</span></label>
        <input type="test"  name="phone" onChange={HandleChange} value={formData.phone} minLength={10} maxLength={15} required/><br />

        <label htmlFor="address-line1">Address Line 1 <span>*</span></label>
        <input type="text"  name="addressLine1" onChange={HandleChange} value={formData.addressLine1} required/><br />

        <label htmlFor="address-line2">Address Line 2</label>
        <input type="text"  name="addressLine2" onChange={HandleChange} value={formData.addressLine2}/><br />

        <label htmlFor="area-code">Area Code <span>*</span></label>
        <input type="number"  name="areaCode" onChange={HandleChange} value={formData.areaCode} minLength={3} maxLength={4} required/><br />
        <button>Continue</button>
        </form>
     </div>

    <div className="checkout-pay-screen">
        <h3>Order details</h3>
        <h4>ITEMS: <span>{cartNumber}</span></h4>
        <h3>To Pay: <span> R{cartTotal}.00</span></h3>
           {formEl}
           <p>Our Payments are secured by</p>
           <img src="https://sandbox.payfast.co.za/eng/images/PayFast-Logo.png" alt="PayFast logo" />
    </div>
    </div>
    </>
  );
}
