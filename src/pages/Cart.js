import React, { useContext} from 'react'
import { Link, useParams } from 'react-router-dom';
import MyBag from '../components/Cart/MyBag';
import OrderSummary from '../components/Cart/OrderSummary';
import { CartContext } from '../context/CartContext';

function Cart() {
	
	const cartIdNumber = useParams();
	const { cartState, setCartState } = useContext(CartContext);

	// Function to delete an item from the cart
    const deleteItemFromCart = async (itemId) => {
        try {
            const response = await fetch(`https://capstone-ora-backend.onrender.com/cart/${cartIdNumber.id}/items/${itemId}`, {
                method: 'PATCH',
            });

            if (!response.ok) throw new Error('Error deleting item');
            const updatedCart = await response.json();
            setCartState(updatedCart);
			window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };
	  
	// If the cart data is not fetched yet, show a loading message
	if (!cartState) {
	  return <p>Empty Shopping Cart</p>;
	}
	console.log(cartState)

    return (
		<div className="flex py-12 px-24 gap-10 overflow-y-auto">
			{cartState?.items?.length === 0 ? (
				<div className='flex flex-col justify-center items-center m-auto h-[calc(100vh-296px)]'>
					<div className='text-2xl mb-4'>Your cart is empty</div>
					<Link className='bg-[#83884E] text-white font-bold text-center px-4 py-2' to="/">
						Shop Now
					</Link>
					
				</div>
			) : (
				<>
					<MyBag className="flex" cartState={cartState} deleteItem={deleteItemFromCart} />
					<div className="flex flex-col w-[30%]" >
						<OrderSummary cartState={cartState} />
						
						<Link className="w-full bg-[#83884E] text-white font-bold text-center px-4 py-2" to="/checkout">
							CHECK OUT
						</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
		  