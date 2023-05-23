import React, {useState} from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Profile.css';
import EditReview from './EditReview';

const ReviewSec = ({ review }) => {
  //console.log({review})
  const [editModalState,setEditModal] = useState(null)
  const handleEditModalClose = ()=>setEditModal(null);
  const handleEditModalOpen = (index)=>setEditModal(index);

  const reviewsGiven = review.map((info, index) => {

    const cleanNow = (info.cleanlinessRating/5)*100;
    const locationNow = (info.locationRating/5)*100;
    const serviceNow = (info.serviceRating/5)*100;
    const overallNow = (info.overallRating/5)*100;
    const createDate = new Date(info.createdAt).toLocaleDateString();
    return (
      <Card key={index} className='review'>
        <NavLink to={`/listing/${info.listing}`}>
          <Card.Title as="h5">Location Details</Card.Title>
        </NavLink>
        <Card.Body>
          <Row>
            <Col className='rating-bar'>
              <Card.Text className='text-center'>Cleanliness</Card.Text>
              <div className='bar-num'>
              <ProgressBar variant="success" now={cleanNow} />
              <Card.Text>{info.cleanlinessRating}</Card.Text>
              </div>
            </Col>
            <Col className='rating-bar'>
              <Card.Text>Location</Card.Text>
              <div className='bar-num'>
              <ProgressBar variant="success" now={locationNow} />
              <Card.Text>{info.locationRating}</Card.Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='rating-bar'>
              <Card.Text>Service</Card.Text>
              <div className='bar-num'>
              <ProgressBar variant="success" now={serviceNow} />
              <Card.Text>{info.serviceRating}</Card.Text>
              </div>
            </Col>
            <Col className='rating-bar'>
            <Card.Text>Overall</Card.Text>
            <div className='bar-num'>
            <ProgressBar variant="success" now={overallNow} />
            <Card.Text>{info.overallRating}</Card.Text>
            </div>
       
            </Col>
          </Row>
          <Card.Text>Comment: {info.comment}</Card.Text>
          <p>Created at {createDate}</p>
          <Button 
          variant="primary"
          show = {editModalState === index ? 'true':'false'}
          onClick = {() =>handleEditModalOpen(index)}
          >Edit or Delete</Button>
          {editModalState === index && (
              <EditReview 
              show = {true}
              handleClose = {handleEditModalClose}
              reviewData ={info}
              />
          )}
        </Card.Body>
      </Card>
    );
  });

  // No reviews
  if (!reviewsGiven || reviewsGiven.length === 0) {
    return <p>No Reviews Available</p>;
  }

  return <Row className="hostListing">{reviewsGiven}</Row>;
};

export default ReviewSec;
