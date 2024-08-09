import React, { useContext} from 'react';
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
        <div className="flex flex-col w-[50%]">
            <div className='text-2xl font-bold mb-4'>Total Summary</div>
            <div className="flex justify-between text-xl font-bold mb-4">
                <div>{numItems} items</div>
                <div>Subtotal: ${subtotal.toFixed(2)}</div>
            </div>
            <>
                {cartState.items.map((item, index) => (
                    <div className='flex gap-8 mb-4' key={index}>
                        <div className='flex w-[30%] h-48 overflow-hidden'>
                            {item.product && item.product.images && item.product.images[0] && <img className='object-cover w-full h-full' src={item.product.images[0]} alt={item.product.title} />}
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-bold mb-2'>{item.product.title}</div>
                            <div>QTY:{item.quantity}</div>
                            <div>${(item.product.price*item.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                ))}
            </>
            <div className='flex justify-between text-2xl font-bold mt-4'>
                <div>Total</div>
                <div>${finalPrice.toFixed(2)}</div>
            </div>       
        </div>
    )
}

export default TotalSummary;






		  