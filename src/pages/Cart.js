import React, { useContext} from 'react'
import './Cart.css'
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
            const response = await fetch(`https://capstone-ora-frontend.onrender.com/cart/${cartIdNumber.id}/items/${itemId}`, {
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
		<div className="cart">
			{cartState?.items?.length === 0 ? (
				<div className='emptyCart'>
					<div className='emptyCartTitle'>Your cart is empty</div>
					<div className='cartCheckOutButtonDiv'>
						<Link className="cartCheckOutButton" to="/">
						Shop Now
						</Link>
					</div>
				</div>
			) : (
				<>
					<MyBag cartState={cartState} deleteItem={deleteItemFromCart} />
					<div className="cartOrderSummaryContainer" >
						<OrderSummary className="cartOrderSummary" cartState={cartState} />
						<div className='cartCheckOutButtonDiv' >
							<Link className="cartCheckOutButton" to="/checkout">
							CHECK OUT
							</Link>
						</div>
						
					</div>
					
				</>
			)}
		</div>
	)
	
}
		  
export default Cart
		  