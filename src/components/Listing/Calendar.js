import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';

const Calendar = ({ bookings}) => {
    //console.log({bookings})
  const renderEvents = () => {
    // Generate or fetch calendar dates
    const events = [];

    bookings.forEach((booking) => {
        const {startDate,endDate} = booking;

        const startBooking = new Date(startDate);
        const endBooking = new Date(endDate);

        const currentDate = new Date(startBooking);

        while(currentDate <= endBooking){
            events.push({
                title: 'Booked',
                start: new Date(currentDate),
                allDay: true,
                classNames: ['booked-event'],
            })

            currentDate.setDate(currentDate.getDate()+1);
        }
    });
    
    return events;
}

      return (
        <div className='calendar'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={renderEvents()}
            />
        </div>
      );
    
 };
        

export default Calendar;