import React from 'react'
import './PropertyItem.css'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

	  
function PropertyItem(props) {
	const {property} = props

    return (
		
		<NavLink to={`/listing/${property._id}`}>
			<Card className="propertyitem" style={{ border: 'none' }}>
				<div className='imgContainer'>
					<Card.Img className='itemImg' variant="top" src={property.images[0]} />
				</div>
				<Card.Body className='cardBody'>
					<Card.Text className='cardTitle'>{property.city}, {property.country}</Card.Text>
					<Card.Text className='cardText'>{property.title}</Card.Text>
					<Card.Text className='cardText'>${property.price} night</Card.Text>
				</Card.Body>
			</Card>
		</NavLink>		  
		
	)
}
		  
export default PropertyItem;
		  