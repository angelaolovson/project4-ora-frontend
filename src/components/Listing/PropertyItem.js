import React from 'react'
import './PropertyItem.css'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

	  
function PropertyItem(props) {
	const {property} = props

    return (
		
		<NavLink to={`/${property._id}`}>
			<Card className="propertyitem">
				<Card.Img variant="top" src={property.images[0]} />
				<Card.Body>
					<Card.Title className='cardTitle'>{property.title}</Card.Title>
					<Card.Text className='cardText'>${property.price} night</Card.Text>
				</Card.Body>
			</Card>
		</NavLink>		  
		
	)
}
		  
export default PropertyItem;
		  