import React, { useContext, useEffect, useState } from 'react'
import './EachProduct.css'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'


function EachProduct() {
	//authentication
	const auth = useContext(AuthContext);
	console.log(auth, "----line 10-----")
	const [eachProductState, setEachProductState] = useState(null);
	const [quantityState, setQuantityState] = useState(null);
	console.log(eachProductState,"each product state")
  
	const { id } = useParams();
	// console.log(id)
	// console.log(useParams())
	const url = `http://localhost:4000/product/${id}`;
  
	useEffect(() => {
		const fetchEachProduct = async () => {
		// console.log("going to fetch product with id of: ", id);
			try {
			const responseData = await fetch(url);
			const eachProductData = await responseData.json();
			//console.log(eachProductData);
			setEachProductState(eachProductData);
			} catch (error) {
				console.log(error)
			}
		}
		fetchEachProduct();
		
	}, [id, url]);

	// Handle quantity change
	const handleQuantityChange = (event) => {
		setQuantityState(parseInt(event.target.value));
	  };
	
	// Handle add to cart
	const handleAddToCart =async () => {
		console.log(JSON.parse(localStorage.userData.cart))
		// console.log(localStorage.userData.cart[0]._id)
		try {
			const response = await fetch(`http://localhost:4000/cart/${JSON.parse(localStorage.userData.cart[0]._id)}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user: auth.userId,
					items: [
						{
							product: eachProductState._id,
							quantity: quantityState
						}
					]
				})
			});

			const responseData = await response.json();
			console.log('Cart:', responseData);
		} catch (error) {
			console.error('Error:', error);
		}
		console.log('Adding to cart:', eachProductState, 'Quantity:', quantityState);
	};

	function decreaseQuantity() {
		if (quantityState > 1) {
			setQuantityState(quantityState - 1);
		}
	}
	
	function increaseQuantity() {
		setQuantityState(quantityState + 1);
	}
  
	return (
	  <main className='eachProductMain'>
		{eachProductState ? (
		  <>
			<div className='eachProduct'>

				<div className='eachProductImgContainer'>
					<img className="eachProductImg" src={eachProductState.images[0]} alt="product pic"/>
				</div>

				<div className='eachProductInfoContainer'>
					<div className='eachProductTitle'>{eachProductState.title}</div>
					<div className='eachProductPrice'>${eachProductState.price}</div>
					<div className='eachProductDescription'>{eachProductState.description}</div>
					<div>
						<button onClick={decreaseQuantity}>-</button>
						<input type="number" value={quantityState} onChange={handleQuantityChange} min="1" />
						<button onClick={increaseQuantity}>+</button>
					</div>
					<button className="addToCart" onClick={handleAddToCart}>
						Add To Cart
					</button>
					
				</div>
  
  
			</div>
		  </>
		) : (
		  "...loading"
		)}
	  </main>
	)
}
		  
export default EachProduct
		  