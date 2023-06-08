import React, {useContext} from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import DeleteSaved from './DeleteSaved';

const SaveListing = ({listing}) => {

    if (!listing || listing.length === 0) {
        return <p>No Property Available</p>;
      }

      //console.log(listing.description);
    
      const property = listing.map((info, index) => (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} style={{marginBottom: 0}} className='cardGrid'>
          		<NavLink to={`/listing/${info._id}`} style={{ textDecoration: 'none'}}>
                <Card className="propertyitem" style={{marginBottom: 0, border: 'none' }}>
                  <div className='imgContainer'>
                    <Card.Img className='itemImg' variant="top" src={info.images[0]} />
                  </div>
                  <Card.Body style={{ marginBottom: 0, padding: 5}} className='cardBody'>
                    <Card.Text style={{marginBottom: 5, fontWeight: 'bold' }} className='cardTitle'>{info.city}, {info.country}</Card.Text>
                    <Card.Text  style={{marginBottom: 5}} className='cardText'>{info.types}</Card.Text>
                    <DeleteSaved id={info._id}/>
                  </Card.Body>
                </Card>
              </NavLink>	
        </Col>
      ));
        
       
    
      return <Row className='hostListing'>{property}</Row>;

}

export default SaveListing