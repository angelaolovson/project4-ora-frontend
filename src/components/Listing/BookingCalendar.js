import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import './BookingCalendar.css'


const BookingCalendar = ({ bookings}) => {
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
                title: 'BOOKED',
                start: new Date(currentDate),
                allDay: true,
                classNames: ['booked-event'],
                display:'background',
                backgroundColor:'grey',
        
            })

            currentDate.setDate(currentDate.getDate()+1);
        }
    });
    
    return events;
}

      return (
        <div className='calendar'>
          <FullCalendar
            plugins={[dayGridPlugin, bootstrap5Plugin]}
            initialView = 'dayGridMonth'
            events={renderEvents()}
            themeSystem='bootstrap5'
            />
        </div>
      );
    
 };
        

export default BookingCalendar;