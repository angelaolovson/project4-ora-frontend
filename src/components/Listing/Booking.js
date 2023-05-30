import React, { useContext, useState } from 'react'
import './Booking.css'
import { AuthContext } from '../../context/auth-context'
import BookingCalendar from './BookingCalendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

	  
const Booking = (props) => {
    console.log(props)
    
    const {property} = props.property;
    const [isBooked, setIsBooked] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guestCount, setGuestCount] = useState('');
    const auth = useContext(AuthContext)
	const [showCalendar, setShowCalendar] = useState(false);
	const [bookingError, setBookingError] = useState('');
	

    const toggleCalendar = () => {
		setShowCalendar(!showCalendar);
	}

	//date picker

	const BookingDatePicker = () =>{
		const {bookings} = property
		const bookedDates = bookings?.map((info)=>(
		  {start: new Date(info.startDate), end: new Date(info.endDate)}
		  )) || [];
	
		const excludeDates = bookedDates.reduce((dates, range) => {
		  const {start, end} = range;
		  const currentDate = new Date(start);
		  while (currentDate <= end) {
			dates.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate()+1);
		  }
		  return dates;
		}, []);
	  
	  //datepicker onchange
	
	  const onChange = (dates)=>{
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	  }
	
	  
	  return (
		<DatePicker
		selected = {startDate}
		onChange={onChange}
		startDate = {startDate}
		endDate = {endDate}
		excludeDates={excludeDates}
		selectsRange
		selectsDisabledDaysInRange
		inline
		/>

	  )
	}

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
		
		if(newBookingObj.error){
			setBookingError(newBookingObj.error);
		} else {
			setIsBooked(true);
		}
		
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
						<button className="bookingBtn" onClick={toggleCalendar}>Pick Start Date</button>
						{/* <input
						type="date"
						id="startDate"
						value={startDate}
						onChange={(e)=> onChangeHandler(e,setStartDate)}
						/> */}
						{showCalendar && (
							<BookingDatePicker/>
						)}
					</div>
				</div>
				<div>
					<div>End Date</div>
					<div>
					<button className="bookingBtn">Pick End Date</button>
						{/* <input
						type="date"
						id="endDate"
						value={endDate}
						onChange={(e)=>onChangeHandler(e,setEndDate)}
						/> */}
					
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
		  {bookingError && <div className='bookingError'>{bookingError}</div>}
        </form>)}
      </div>
	  
	  </div>
    );
};
  
export default Booking