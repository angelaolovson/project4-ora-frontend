import React, { useContext } from 'react'
import './CheckOut.css'
import CustomerInfo from '../components/CheckOut/CustomerInfo'
import TotalSummary from '../components/CheckOut/TotalSummary'

function CheckOut() {
	
    return (
		<div className="checkout">
			<CustomerInfo />
			<TotalSummary />
			
			 
		</div>
	)
}
		  
export default CheckOut
		  