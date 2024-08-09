import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

function MyBag({deleteItem}) {
	const { cartState} = useContext(CartContext);
	console.log(cartState)
	
    return (
		<div className="flex flex-col w-[70%]">
			<div className='text-2xl font-bold mb-4'>My Bag</div>
			{cartState?.items?.map((item, index) => (
				<div className='flex mb-4' key={index}>
					<div className='flex w-[20%] h-48 overflow-hidden'>
						<img className='object-cover w-full h-full' src={item.product.images} alt={item.product.title} />
					</div>
					<div className='text-xl font-bold w-[20%] px-3'>
						{item.product.title}
					</div>
					<div className='flex flex-col w-[60%]'>
						<div className='flex h-[70%]'>
							<div className='w-1/3'>
								<div>Item Price</div>
								<div>${item.product.price}</div>
							</div>
							<div className='w-1/3'>
								<div>Quantity</div>
								<div>{item.quantity}</div>
							</div>
							<div className='w-1/3'>
								<div>Total Price</div>
								<div>${item.product.price * item.quantity}</div>
							</div>
						</div>
						<div className='flex justify-end pr-8'><button className='bg-white border-1 border-[#83884e] px-4 py-2' onClick={() => deleteItem(item.product._id)}>Remove</button></div>
					</div>
				</div>
			))}  
		</div>
	)
}
		  
export default MyBag
		  