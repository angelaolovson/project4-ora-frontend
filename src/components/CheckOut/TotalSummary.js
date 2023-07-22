import React, { useContext} from 'react';
import './TotalSummary.css';
import { CartContext } from '../../context/CartContext';

function TotalSummary() {

    const { cartState, isLoading } = useContext(CartContext);
    // console.log(cartState)

    if (isLoading || !cartState || !cartState.items) {
        return <div>Loading...</div>;
    }

    // Number of items
    const numItems = cartState ? cartState.items.length : 0;

    // Subtotal
    const subtotal = cartState 
        ? cartState.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        : 0;

    // Total
    const finalPrice = subtotal * 1.088

    return (
        <div className="totalsummary">
            <div className="totalsummaryTitle">Total Summary</div>
            <div className="totalsummaryItemSub">
                <div className="totalsummaryItems">{numItems} items</div>
                <div className="totalsummarySub">Subtotal: ${subtotal.toFixed(2)}</div>
            </div>
            <>
                {cartState.items.map((item, index) => (
                    <div className='totalsummaryContainer' key={index}>
                        <div className='totalsummaryImgContainer'>
                            {item.product && item.product.images && item.product.images[0] && <img className='totalsummaryImg' src={item.product.images[0]} alt={item.product.title} />}
                        </div>
                        <div className='totalsummaryItemInfo'>
                            <div className='totalsummaryItemName'>{item.product.title}</div>
                            <div className='totalsummaryItemqty'>QTY:{item.quantity}</div>
                            <div className='totalsummaryItemprice'>${(item.product.price*item.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                ))}
            </>
            <div className='finalPriceDiv'>
                <div>Total:</div>
                <div>${finalPrice.toFixed(2)}</div>
            </div>       
        </div>
    )
}

export default TotalSummary;






		  