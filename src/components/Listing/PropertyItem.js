import React from 'react'
import './PropertyItem.css'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

	  
function PropertyItem(props) {
	const {property} = props;
	const solidStar = '\u2605';

    return (
		
		<NavLink to={`/listing/${property._id}`} className="noUnderLine">
			<Card className="propertyitem" style={{ border: 'none' }}>
				<div className='imgContainer'>
					<Card.Img className='itemImg' variant="top" src={property.images[0]} />
				</div>
				<Card.Body className='propertyitemCardBody'>
					
					<div className='inlineLocationRating'>
						<Card.Text className='propertyitemLocation'>{property.city}, {property.country}</Card.Text>

						<Card.Text className='propertyitemRating'>
							{property.rating?(
								<>
								{solidStar}{parseFloat((property.rating).toFixed(2)).toFixed(2)}
								</>
								):(
								<h2></h2>
							)}
							
							</Card.Text>

					</div>
					
					<Card.Text className='propertyitemTitle'>{property.title}</Card.Text>

					<div className='inlinePrice'>
						<Card.Text className='propertyitemPriceNumber'>${property.price}</Card.Text>
						<Card.Text className='propertyitemPriceText'>night</Card.Text>
					</div>
				</Card.Body>
			</Card>
		</NavLink>		  
		
	)
}
		  
export default PropertyItem;
		  