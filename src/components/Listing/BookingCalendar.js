import React, {useState} from 'react';
import './BookingCalendar.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const BookingCalendar = ({ bookings}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

 
    
 
 const BookingDatePicker = () =>{

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
  renderCustomHeader={({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div style={{width: '100%'}}>
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
        onClick={decreaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
          }
        >
          {"<"}
        </span>
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <button
        aria-label="Next Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--next"
        }
        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
        onClick={increaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
          }
        >
          {">"}
        </span>
      </button>
    </div>
  )}
  selected={startDate}
  onChange={onChange}
  monthsShown={2}
  startDate = {startDate}
   endDate = {endDate}
   excludeDates={excludeDates}
   selectsRange
   selectsDisabledDaysInRange
   inline
/>
)
}

return (
  <div className='bookingCalendar'>
    <BookingDatePicker />
  </div>
)
}

export default BookingCalendar;