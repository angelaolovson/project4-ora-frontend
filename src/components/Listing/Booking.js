import React, { useContext, useState } from 'react'
import './Booking.css'
import { AuthContext } from '../../context/auth-context'

	  
const Booking = (props) => {
    console.log(props)
    
    const {property} = props.property;
    const [isBooked, setIsBooked] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guestCount, setGuestCount] = useState('');
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
		  
		const serviceFee = parseFloat((property.price * days * 0.04).toFixed(2));
		const tax = parseFloat((property.price * days * 0.06).toFixed(2));
		const finalTotalPrice = parseFloat((property.price * days + serviceFee + tax).toFixed(2));
		
		  
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
		setIsBooked(true);
    };

	const start = new Date(startDate);
	const end = new Date(endDate);
	const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
	const serviceFee = parseFloat((property.price * days * 0.04).toFixed(2));
	const tax = parseFloat((property.price * days * 0.06).toFixed(2));
	const finalTotalPrice = parseFloat((property.price * days + serviceFee + tax).toFixed(2));
	


    return (
      <div className='bookingMain'>
        
		<div className='bookingForm'>
       {isBooked? (
	   <>
	   	<div className='rcptGreeting'>
			<span>🌴</span>
			<span>Thank you for booking</span>
			<span>🌴</span>
		</div>
		<hr/>
		<div className='rcptDate'>
			<div>Date</div>
			<div>{start.toLocaleDateString()} ~ {end.toLocaleDateString()}</div>
		</div>

       	{days === 1?(
			<div className='rcptNight'>
			<div>{days}</div>
			<div>night</div>
		</div>
		):(
			<div className='rcptNight'>
			<div>{days}</div>
			<div>nights</div>
		</div>
		) }
		
		<div className='rcptTtlPrice'>
			<div>Total Price</div>
			<div>$ {finalTotalPrice}</div>
		</div>
	   </>
	   ) : (<form onSubmit={onSubmitHandler}>
		<span className='bookingPrice'>$ {property.price}</span>
		<span> night</span>

          <div className='inputContainer'>
		  	
			<div className='inputDates'>
				<div>
					<div>Start Date</div>
					<div>
						<input
						type="date"
						id="startDate"
						value={startDate}
						onChange={(e)=> onChangeHandler(e,setStartDate)}
						/>
					</div>
				</div>
				<div>
					<div>End Date</div>
					<div>
						<input
						type="date"
						id="endDate"
						value={endDate}
						onChange={(e)=>onChangeHandler(e,setEndDate)}
						/>
					</div>
				</div>
			</div>
			<div>
				<div>Guest Count</div>
				<div>
					<input
					type="number"
					id="guest"
					value={guestCount}
					onChange={(e)=>onChangeHandler(e,setGuestCount)}
					/>
				</div>
			</div>
          </div>
		  <div className='priceDisplay'>
			<button className='bookingButton' type="submit">Book Now</button>
			<div className='serviceFee'>
				<div>Service Fee</div>
				<div>$ {serviceFee || 0}</div>
			</div>
			<div className='taxes'>
				<div>Taxes</div>
				<div>$ {tax || 0} </div>
			</div>
			<hr />
			<div className='ttlPrice'>
				<div>Total Price</div>
				<div>$ {finalTotalPrice || 0}</div>
			</div>
		  </div>
        </form>)}
      </div>
	  
	  </div>
    );
};
  
export default Booking