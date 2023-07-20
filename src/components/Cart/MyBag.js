import React, { useContext } from 'react'
import './MyBag.css'
import { CartContext } from '../../context/CartContext';

function MyBag({deleteItem}) {
	const { cartState} = useContext(CartContext);
	console.log(cartState)
	
    return (
		<div className="mybag">
			<div className='h2mybag'>My Bag</div>
			{cartState?.items?.map((item, index) => (
				<div className='cartItems' key={index}>
					<div className='cartImgContainer'>
						<img className='cartImg' src={item.product.images} alt={item.product.title} />
					</div>
					<div className='cartTitleContainer'>
						{item.product.title}
					</div>
					<div className='cartInfoContainer'>
						<div className='priceAndQtyContainer'>
							<div className='priceContainer'>
								<div>Item Price</div>
								<div>${item.product.price}</div>
							</div>
							<div className='qtyContainer'>
								<div>Quantity</div>
								<div>{item.quantity}</div>
							</div>
							<div className='sumContainer'>
								<div>Total Price</div>
								<div>${item.product.price * item.quantity}</div>
							</div>
						</div>
						<div><button onClick={() => deleteItem(item.product._id)}>Remove</button></div>
					</div>
				</div>
			))}  
		</div>
	)
}
		  
export default MyBag
		  