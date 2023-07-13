import React, { useContext, useEffect, useState } from 'react'
import './EachProduct.css'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'


function EachProduct() {
	//authentication
	const auth = useContext(AuthContext);
	// console.log(auth, "----line 10-----")
	const [eachProductState, setEachProductState] = useState(null);
	const [quantityState, setQuantityState] = useState(1);
	// console.log(eachProductState,"each product state")
  
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

	//states handler
	const onChangeHandler = (e,setValue) => {
		setValue(e.target.value);
	}

	// Handle quantity change
	const handleQuantityChange = (event) => {
		setQuantityState(parseInt(event.target.value));
	};
	
	// Handle add to cart
	const handleAddToCartSubmit =async (event) => {
		const getUserData = JSON.parse(localStorage.getItem("userData"))
		const cartId = getUserData.userData.cart[0]._id
		console.log(cartId)

		event.preventDefault();
		const updateCart = {
			user: auth.userId,
			items: [
				{
					product: eachProductState._id,
					quantity: quantityState
				}
			]
		}

		try {
			const cartresponseData = await fetch(`http://localhost:4000/cart/${cartId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updateCart)
			});

			const updatedCart = await cartresponseData.json();
			console.log('Cart:', updatedCart);
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
					<button className="addToCart" onClick={handleAddToCartSubmit}>
						Add To Cart
					</button>
					<div><Link to={`/product/${eachProductState._id}/edit`}>Update or Delete</Link></div>
					
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
		  