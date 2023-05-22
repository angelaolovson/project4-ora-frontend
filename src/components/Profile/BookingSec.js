import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import Figure from 'react-bootstrap/Figure';

const BookingSec = ({ booking }) => {

  //filter the past booking
  const currentDate= new Date();
    const futureBooking = booking.filter(booking => {
      const bookingDate = new Date(booking.startDate);
      return bookingDate >= currentDate;
    });

console.log(futureBooking)

  const property = futureBooking.map((info, index) => {
    const startDate = new Date(info.startDate).toLocaleDateString(undefined,{month:'short', day: 'numeric', year:'numeric'});
    const endDate = new Date(info.endDate).toLocaleDateString(undefined,{month:'short', day: 'numeric', year:'numeric'});
    const createDate = new Date(info.createdAt).toLocaleDateString()
    return (
      <Card key={index} className='booking'>
        <Card.Body>
        <Row>
          <Col >
          <Figure>
              <Figure.Image
                className='profile-image'
                width={250}
                height={400}
                alt="171x180"
                src={info.image}
              />
            </Figure>
          </Col>
          <Col className='booking-col'>
          <NavLink to={`/listing/${info.listing}`}>
        <Card.Title as="h5">{info.city}</Card.Title>
        </NavLink>
          <Card.Title> {startDate} to {endDate}</Card.Title>
           <Card.Text className='text-left'>
            {info.address}
           </Card.Text>
          <Card.Text>
          Total {info.totalPrice} USD 
          </Card.Text>
          <Button variant="outline-secondary">Reschedule or Cancel</Button>
          </Col>
          </Row>
          <p>Created at {createDate}</p>
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
