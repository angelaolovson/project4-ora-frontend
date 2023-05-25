import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link, useParams, NavLink } from "react-router-dom";

const HostListing = ({listing}) => {
    const solidStar = '\u2605'; 
    if (!listing || listing.length === 0) {
        return <p>No Property Available</p>;
      }
    
      //console.log(listing.description);
    
      const property = listing.map((info, index) => (
        <Col xs={12} sm={6} md={4} lg={3} xl={3} key={index} className='cardGrid'>
          <Card style ={{height: '100%',marginBottom:'10px'}} >
            <NavLink to={`/listing/${info._id}`}>
              <Card.Img variant="top" src={info.images[0]} style={{ height: '170px', objectFit: 'cover' }} /> 
            </NavLink>
            
            <Card.Body>
              <div style ={{height: '70%'}}>
              <Card.Title>{info.title}</Card.Title> 
              <Card.Text>{info.address}</Card.Text> 
              </div>
               
            </Card.Body>
            {solidStar}{info.rating.toFixed(2)}
          </Card>
        </Col>
      ));
        
       
    
      return <Row className='hostListing'>{property}</Row>;
}

export default HostListing