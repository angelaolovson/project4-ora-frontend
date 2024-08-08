import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'


function ProductItem({product}) {
    return (
		<NavLink to={`/product/${product._id}`} className="noUnderLine">

			<Card className="flex">
				<div>
					<Card.Img variant="top" src={product.images[0]} />
				</div>
				<Card.Body>				
					<Card.Text className='font-bold'>{product.title}</Card.Text>
					<Card.Text>${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</NavLink>	
	)
}	  
export default ProductItem
		  