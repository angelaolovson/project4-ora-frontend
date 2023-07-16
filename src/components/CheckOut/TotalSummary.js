import React, { useContext } from 'react'
import './TotalSummary.css'
import { CartContext } from '../../context/CartContext';

  
function TotalSummary() {
	const [cartState, setCartState] = useContext(CartContext);
	// setCartState();
	console.log(cartState)

    return (
		<div className="totalsummary">
			{cartState? (
				<h1>{cartState.items[cartState.items.length-1].product.title} </h1>
			) : 
			<div>loading</div>
			}
			
					  
		</div>
	)
}
		  
export default TotalSummary
		  