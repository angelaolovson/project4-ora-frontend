import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

function OrderSummary() {
	const { cartState} = useContext(CartContext);
    
	const subtotal = cartState?.items?.map((item) => item.product.price*item.quantity)
	.reduce((prev, curr) => prev + curr, 0);
	console.log(subtotal)

    return (
		<div className="flex flex-col mb-24">
			<div className='text-2xl font-bold mb-4'>Order Summary</div>
			<div className='flex justify-between mb-12'>
				<div>Subtotal</div>
				<div>${subtotal}</div>
			</div>
			<div className='flex justify-between mb-12'>
				<div>Store Pick Up Only</div>
				<div></div>
			</div>
			<div className='flex justify-between mb-12'>
				<div>Tax</div>
				<div>Calculated at checkout</div>
			</div>
			<div className='flex justify-between mb-12EST'>
				<div>Estimated Total</div>
				<div>USD ${subtotal}</div>
			</div>		
					  
		</div>
	)
}
		  
export default OrderSummary
		  