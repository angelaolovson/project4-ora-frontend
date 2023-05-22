import React, { useContext, useState } from 'react'
import './Booking.css'
import { AuthContext } from '../../context/auth-context'

	  
const Booking = (props) => {
    console.log(props)
    
    const {property} = props.property;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guestCount, setGuestCount] = useState('');
    const [eachPropertyState, setEachPropertyState] = useState(null);
    const auth = useContext(AuthContext)
    // console.log(auth)
	console.log(property)

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
		  
		console.log(days)
		const finalTotalPrice = property.price * days

		console.log(finalTotalPrice)

      	// Perform booking submission logic here
      	const newBooking = {
			guest: auth.userId,
			listing: e.property.id,
			address:e.property.address,
			city:e.property.city,
			image:e.property.images,
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
            <spam>Start Date:</spam>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e)=> onChangeHandler(e,setStartDate)}
              />
          </div>
          <div>
            <spam>End Date:</spam>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e)=>onChangeHandler(e,setEndDate)}
            />
          </div>
          <div>
            <spam>Guest Count:</spam>
            <input
              type="number"
              id="guest"
              value={guestCount}
              onChange={(e)=>onChangeHandler(e,setGuestCount)}
            />
          </div>
          <div>Total Price: {property.price} </div>
          
          <button type="submit">Book Now</button>
        </form>
      </div>
    );
};
  
export default Booking

		  