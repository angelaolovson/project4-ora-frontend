import React, { useContext, useEffect, useState } from 'react'
import './EachProduct.css'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'


function EachProduct() {
	//authentication
	const auth = useContext(AuthContext);

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
	  const handleAddToCart = () => {
		// Perform the logic to add the product with the specified quantity to the cart
		// You can use the 'eachProductState' and 'quantity' values here to add the product to the cart
		console.log('Adding to cart:', eachProductState, 'Quantity:', quantityState);
	  };
  
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
					<div className='eachProductDescription'>${eachProductState.description}</div>
					<div>
					<input type="number" value={quantityState} onChange={handleQuantityChange} min="1" />
					</div>
					<div className="addToCart" onClick={handleAddToCart}>
						Add To Cart
					</div>
					
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
		  