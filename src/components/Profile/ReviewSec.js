import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Profile.css';

const ReviewSec = ({ review }) => {
  console.log({review})

  const reviewsGiven = review.map((info, index) => {

    const createDate = new Date(info.createdAt).toLocaleDateString();
    return (
      <Card key={index}>
        <NavLink to={`/listing/${info.listing}`}>
          <Card.Header as="h5">Location Details</Card.Header>
        </NavLink>
        <Card.Body>
          <Card.Title>{info.overallRating}</Card.Title>
          <Card.Text>{info.comment}</Card.Text>
          <p>Created at {createDate}</p>
          <Button variant="primary">Edit or Delete</Button>
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
