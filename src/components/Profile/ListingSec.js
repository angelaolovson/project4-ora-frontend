import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import {  NavLink } from "react-router-dom";
import './Profile.css'


const ListingSec = ({ listing }) => {
  if (!listing || listing.length === 0) {
    return <p>No Property Available</p>;
  }

  //console.log(listing.description);

  const property = listing.map((info, index) => (
    <Col xs={12} sm={4} md={4} lg={6} xl={2} key={index} className='cardGrid'>
      <Card style ={{height: '100%',marginBottom:'10px'}} >
        <NavLink to={`/listing/${info._id}`}>
          <Card.Img variant="top" src={info.images[0]} style={{ height: '170px', objectFit: 'cover' }} /> 
        </NavLink>
        
        <Card.Body>
          <div style ={{height: '70%'}}>
          {/* <Card.Title>{info.title}</Card.Title>  */}
          <Card.Text>{info.address}</Card.Text> 
          </div>
          <NavLink to={`/listing/${info._id}/edit`} >
            <Button variant="outline-secondary">Edit or Delete</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  ));
    
   

  return <Row className='hostListing'>{property}</Row>;
};

export default ListingSec;