import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';

const ReviewGiven = ({reviews}) => {
    if (!reviews || reviews.length === 0) {
        return <p>No Property Available</p>;
      }
    
      //console.log(reviews.description);
    
      const property = reviews.map((info, index) => (
        <Card style={{margin:'5px', borderRadius:'1em'}}className='comments-box '>
        <Card.Body className='review-comments'>
            <div className='name-date'>
            <p className='createdAt'> Created At: {new Date(info.createdAt).toLocaleDateString()}</p>
            </div>
          <Card.Text>
            <p style={{fontSize:"15px"}}>{info.comment}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      ));
        
      return <Row className='hostreviews' style={{ overflow: 'scroll', maxHeight: '400px','&::-webkit-scrollbar': { /* WebKit (Chrome, Safari, etc.) */
      display: 'none',
    }}}>{property}</Row>;
}

export default ReviewGiven