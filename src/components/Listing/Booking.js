import React, { useContext, useState } from 'react'
import './Booking.css'
import { AuthContext } from '../../context/auth-context'

	  
const Booking = (props) => {
    console.log(props)
    
    const {property} = props.property;

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [serviceFeeState, setServiceFeeState] = useState("");
    const [taxState, setTaxState] = useState("");
    const [totalPriceState, setTotalPriceState] = useState("");
    const auth = useContext(AuthContext)
	

    //Here we are making a dynamic onChangeHandler that'll accept a state updater
    const onChangeHandler = (e, setValue) => {
        console.log(e.target.value);
        setValue(e.target.value); //this represents any state updater (setName) that we passed in
      }; //end of func  
  
    const onSubmitHandler = async (e) => {
		e.preventDefault();

	  	const start = new Date(startDate);
  	 	const end = new Date(endDate);
  		const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
		  
		const serviceFee = property.price * days * 0.04;
		setServiceFeeState(serviceFee)
		const tax = property.price * days * 0.06;
		setTaxState(tax);
		const finalTotalPrice = property.price * days + serviceFee + tax;
		setTotalPriceState(finalTotalPrice);
		  
		console.log(`days: ${days}, Fee: ${serviceFee}, Tax: ${tax}, total: ${finalTotalPrice}`)

      	// Perform booking submission logic here
      	const newBooking = {
			guest: auth.userId,
			listing: property._id,
			address:property.address,
			city:property.city,
			image:property.images,
			startDate: startDate,
			endDate: endDate,
			totalPrice: finalTotalPrice
      	}
      	console.log(newBooking)
      	const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newBooking)
      	}
      	const responseData = await fetch("https://airbnb-main.onrender.com/booking" , options)
      	const newBookingObj = await responseData.json()
      	console.log(newBookingObj)
    };
    return (
      <div>
        <h2>Booking</h2>
        <form onSubmit={onSubmitHandler}>
          <div>
            <span>Start Date:</span>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e)=> onChangeHandler(e,setStartDate)}
              />
          </div>
          <div>
            <span>End Date:</span>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e)=>onChangeHandler(e,setEndDate)}
            />
          </div>
          <div>
            <span>Guest Count:</span>
            <input
              type="number"
              id="guest"
              value={guestCount}
              onChange={(e)=>onChangeHandler(e,setGuestCount)}
            />
          </div>
          <div>Service Fee: {serviceFeeState} </div>
          <div>Tax: {taxState} </div>
          <div>Total Price: {totalPriceState} </div>
          
          <button type="submit">Book Now</button>
        </form>
      </div>
    );
};
  
export default Booking

		  