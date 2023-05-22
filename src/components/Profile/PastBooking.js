import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Profile.css';

const PastBooking = ({booking}) => {

    const currentDate= new Date();
    const pastBooking = booking.filter(booking => {
      const bookingDate = new Date(booking.startDate);
      return bookingDate < currentDate;
    });

console.log(pastBooking)
   
     const property = pastBooking.map((info, index) => {
       const startDate = new Date(info.startDate).toLocaleDateString();
       const endDate = new Date(info.endDate).toLocaleDateString();
       const createDate = new Date(info.createdAt).toLocaleDateString()
       return (
         <Card key={index} className='booking'>
         <NavLink to={`/listing/${info.listing}`}>
           <Card.Header as="h5">View Details</Card.Header>
         </NavLink>
       <Card.Body>
         <Card.Title>From {startDate} to {endDate} </Card.Title>
         <Card.Text>
             Total {info.totalPrice} USD
         </Card.Text>
         <p>Created at {createDate}</p>
         <Button variant="primary">Post Review</Button>
       </Card.Body>
     </Card>
       )
   });
      // No booking
      if (!booking || booking.length === 0) {
       return <p>No Property Available</p>;
     }
   
     return <Row className="hostListing">{property}</Row>;
   };

export default PastBooking;