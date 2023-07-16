import React from 'react'
import './OrderSummary.css'
import { Link, useNavigate } from 'react-router-dom';

		  
function OrderSummary({cartState}) {
	// console.log(cartState);
	// console.log(cartState.items[0].product.title);

	const subtotal = cartState.items.map((item) => item.product.price*item.quantity)
	.reduce((prev, curr) => prev + curr, 0);
	console.log(subtotal)

    return (
		<div className="ordersummary">
			<div className='h2ordersummary'>Order Summary</div>
			<div className='contextContainer'>
				<div>Subtotal</div>
				<div>${subtotal}</div>
			</div>
			<div className='contextContainer'>
				<div>Shipping</div>
				<div>Free</div>
			</div>
			<div className='contextContainer'>
				<div>Tax</div>
				<div>Calculated at checkout</div>
			</div>
			<div className='contextContainer'>
				<div>Estimated Total</div>
				<div>USD ${subtotal}</div>
			</div>		
					  
		</div>
	)
}
		  
export default OrderSummary
		  