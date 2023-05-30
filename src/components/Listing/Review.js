import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import './Review.css'
import { Col, ProgressBar, Row } from 'react-bootstrap';

		  
function Review({reviews, rating}) {
	const solidStar = '\u2605';
    const outlineStar = '\u2606';
	//get average rating
	const totalReviewCount = reviews.length;
	const totalCleanRating = reviews.reduce((sum, review)=> sum+review.cleanlinessRating, 0);
	const averageCleanRating = (totalCleanRating/totalReviewCount).toFixed(2);
	const cleanNow = (averageCleanRating/5)*100;

	const totalLocationRating = reviews.reduce((sum, review) => sum+review.locationRating, 0);
	const averageLocationRating = (totalLocationRating/totalReviewCount).toFixed(2);
	const locationNow = (averageLocationRating/5)*100;

	const totalServiceRating = reviews.reduce((sum, review)=> sum+ review.serviceRating, 0);
	const averageServiceRating = (totalServiceRating/totalReviewCount).toFixed(2);
	const serviceNow = (averageServiceRating/5)*100;

	const overallNow = (rating/5)*100;

	const reviewList = reviews.map((info, index) => {
		return (
			<Card className='comments-box '>
			<Card.Body className='review-comments'>
			  <Card.Title className='title'>
				<div className='reviewer-pro'>
				<Card.Img variant="top" src={info.image} style={{ width: '100%' }} />
				</div>
				<div className='name-date'>
				{info.username}
				<p className='createdAt'> Created At: {new Date(info.createdAt).toLocaleDateString()}</p>
				</div>
			  </Card.Title>
			  <Card.Text>
				{info.comment}
			  </Card.Text>
			</Card.Body>
		  </Card>
		)
	})
    return (
		<div className="reviewCard">
			<div >
			{reviews.length < 2 ?(
			<div className='reviewNumber'>{outlineStar}{reviews.length} Review</div>
			):(
			<div className='reviewNumber'>{outlineStar}{reviews.length} Reviews</div> 
			) }  
			 
			<Row>
            <Col className='rating-bar'>
              <Card.Text style={{ margin: '0' }}>Cleanliness</Card.Text>
              <div className='bar-num'>
              <ProgressBar variant="black" style={{ height: '5px' }} now={cleanNow} />
              <Card.Text>{averageCleanRating}</Card.Text>
              </div>
            </Col>
            <Col className='rating-bar'>
              <Card.Text style={{ margin: '0' }}>Location</Card.Text>
              <div className='bar-num'>
              <ProgressBar variant="black" style={{ height: '5px' }} now={locationNow} />
              <Card.Text>{averageLocationRating}</Card.Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='rating-bar'>
              <Card.Text style={{ margin: '0' }}>Service</Card.Text>
              <div className='bar-num'>
              <ProgressBar   variant="black" style={{ height: '5px' }} now={serviceNow} />
              <Card.Text>{averageServiceRating}</Card.Text>
              </div>
            </Col>
            <Col className='rating-bar'>
            <Card.Text style={{ margin: '0' }}>Overall</Card.Text>
            <div className='bar-num'>
            <ProgressBar variant="black" style={{ height: '5px' }} now={overallNow} />
            <Card.Text>{rating.toFixed(2)}</Card.Text>
            </div>
            </Col>
          </Row>
		  </div>
		  <div className='comments review-container-scroll'>
			{reviewList}
		  </div>
		</div>
	)
}
		  
export default Review
		  