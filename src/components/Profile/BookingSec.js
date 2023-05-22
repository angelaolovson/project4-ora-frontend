import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Profile.css';

const BookingSec = ({ booking }) => {

  //filter the past booking
  const currentDate= new Date();
    const futureBooking = booking.filter(booking => {
      const bookingDate = new Date(booking.startDate);
      return bookingDate >= currentDate;
    });

console.log(futureBooking)

  const property = futureBooking.map((info, index) => {
    const startDate = new Date(info.startDate).toLocaleDateString();
    const endDate = new Date(info.endDate).toLocaleDateString();
    const createDate = new Date(info.createdAt).toLocaleDateString()
    return (
      <Card key={index}>
      <NavLink to={`/listing/${info.listing}`}>
        <Card.Header as="h5">Location Details</Card.Header>
      </NavLink>
    <Card.Body>
      <Card.Title>From {startDate} to {endDate}</Card.Title>
      <Card.Text>
       Total {info.totalPrice} USD 
      </Card.Text>
      
      <p>Created at {createDate}</p>
      <Button variant="primary">Edit or Delete</Button>
    </Card.Body>
  </Card>
    )
});
   // No booking
   if (!futureBooking || futureBooking.length === 0) {
    return <p>No Future Booking Coming</p>;
  }

  return <Row className="hostListing">{property}</Row>;
};

export default BookingSec;
