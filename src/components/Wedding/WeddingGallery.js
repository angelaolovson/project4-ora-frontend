import React, { useEffect, useState } from 'react'
import './WeddingGallery.css'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import EachCouple from './EachCouple';

function WeddingGallery() {
	const [weddingCouplesState, setWeddingCouplesState] = useState()
	const url = "http://localhost:4000/product?subCategory=weddingGallery";

	useEffect(() => {
		const fetchCouples = async () => {
		  try {
			let responseData = await fetch(url);
			let allCouples = await responseData.json();
		  //   console.log(allCouples);
			setWeddingCouplesState(allCouples);
		  } catch (error) {
			console.log(error);
		  }
		};
	
		fetchCouples();
	  }, []);
	  console.log(weddingCouplesState);

    return (
		<div className="weddinggallery">
			<Row xs={1} md={3} className="g-4">
				{/* Map through weddingCouplesState and use Col for each couple */}
				{weddingCouplesState && weddingCouplesState.map((couple, index) => (
				<Col key={index} className="mb-4">
					<Link className="weddinggalleryLink" to={`/weddinggallery/${couple._id}`}>
						<img
						src={couple.images[0]}
						alt={couple.title}
						className="img-fluid" // Bootstrap class for responsive images
						style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }} // Custom styles for the image
						/>
						<div>{couple.title}</div>
					</Link>
				</Col>
				))}
			</Row>
    </div>
	)
}
		  
export default WeddingGallery
		  