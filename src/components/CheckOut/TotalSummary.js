import React, { useContext } from 'react'
import './TotalSummary.css'
import { CartContext } from '../../context/CartContext';

  
function TotalSummary() {
    const [cartState, setCartState] = useContext(CartContext);
    // setCartState();
    console.log(cartState)

	// Number of items
    const numItems = cartState ? cartState.items.length : 0;

	// Subtotal
    const subtotal = cartState 
        ? cartState.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        : 0;

	// Total
	const finalPrice = subtotal*1.088

    return (
        <div className="totalsummary">
			<div className="totalsummaryTitle">Order Summary</div>
			<div className="totalsummaryItemSub">
				<div className="totalsummaryItems">{numItems} items</div>
                <div className="totalsummarySub">Subtotal: ${subtotal.toFixed(2)}</div>
			</div>
            {cartState ? (
                <>
                    {cartState.items.map((item, index) => (
						<div className='totalsummaryContainer' key={index}>
							<div className='totalsummaryImgContainer'>
								<img className='totalsummaryImg' src={item.product.images[0]} alt={item.product.title} />
							</div>
							<div className='totalsummaryItemInfo'>
								<div className='totalsummaryItemName'>{item.product.title}</div>
								<div className='totalsummaryItemqty'>QTY:{item.quantity}</div>
								<div className='totalsummaryItemprice'>${(item.product.price*item.quantity).toFixed(2)}</div>
							</div>
						</div>
					))}
                </>
				
            )
			 : 
            <div>Loading...</div>
            }	
			<div>total: ${finalPrice.toFixed(2)}</div>		  
        </div>
    )
}

export default TotalSummary

		  