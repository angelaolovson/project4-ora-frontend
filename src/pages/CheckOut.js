import React from 'react'
import './CheckOut.css'
import CheckOutInfo from '../components/CheckOut/CheckOutInfo'
		  
function CheckOut() {
    return (
		<div className="checkout">
			<CheckOutInfo />
			<OrderSummary className="cartOrderSummary"/>  
		</div>
	)
}
		  
export default CheckOut
		  