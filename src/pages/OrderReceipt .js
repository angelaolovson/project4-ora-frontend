import React, { useEffect, useState } from 'react'
import './OrderReceipt .css'
import { useParams } from 'react-router-dom';


function OrderReceipt () {
	const [eachOrderState, setEachOrderState] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const {id} = useParams()
	
	const url = `https://capstone-ora-backend.onrender.com/order/${id}`;

	useEffect(() => {
		const fetchOrder = async () => {
		  try {
			const responseData = await fetch(url);
			const eachOrderData = await responseData.json();
			setEachOrderState(eachOrderData);
			setIsLoading(false);
		  } catch (error) {
			console.log(error)
		  }
		}
		fetchOrder();	
	}, [id, url]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	console.log(eachOrderState)

	// Subtotal
    const subtotal = eachOrderState 
        ? eachOrderState.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        : 0;

    // Total
    const finalPrice = parseFloat((subtotal * 1.088).toFixed(2));

	
    return (
        <div className="orderreceipt ">
			<div className='rcptGreeting'>Thank you for shopping with us!</div>
			<div className='rcptInfo'>				  
				<div className='rcptNumber'>
					<div className='rcptNum'>Receipt #{eachOrderState._id} </div>
					<div className="rcptTitleContainer">
						<div className="rcptTitleContainer1">Image</div>
						<div className="rcptTitleContainer2">Name</div>
						<div className="rcptTitleContainer3">Price</div>
						<div className="rcptTitleContainer4">Qty</div>
						<div className="rcptTitleContainer5">Total</div>
					</div>
					{eachOrderState.items.map(item=> (
					<div className="rcptList" key={item.product._id}>
						<div className="rcptListImgContainer">
							<img className="rcptListImg" src={item.product.images[0]} alt={item.product.title} />
						</div>
						<div className="rcptListName">{item.product.title}</div>
						<div className="rcptListPrice">${item.product.price}</div>
						<div className="rcptListqtyCount">{item.quantity}</div>
						<div className="rcptListTotal">${item.quantity*item.product.price}</div>
					</div>
					))}
					<div className='rcptFinal'>
						<div className="rcptTitleContainer1"></div>
						<div className="rcptTitleContainer2"></div>
						<div className="rcptTitleContainer3"></div>
						<div className="rcptTitleContainer4">Total</div>
						<div className="rcptTitleContainer5">${finalPrice}</div>
					</div>
				</div>
				<div className='emptyBar'></div>
				<div className='receiverInfoContainer'>
					<div>In Store Pick Up Info</div>
						<div className='receiverInfos'>
						<div className='receiverInfo'>Name: {eachOrderState.receiver.firstName} {eachOrderState.receiver.lastName}</div>
						<div className='receiverInfo'>Email: {eachOrderState.receiver.email}</div>
						<div className='receiverInfo'>Phone Number: {eachOrderState.receiver.phoneNumber}</div>
					</div>
				</div>
			</div>
        </div>
    )
}
		  
export default OrderReceipt;

		  