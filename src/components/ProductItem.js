import React from 'react'
import './ProductItem.css'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'


function ProductItem({product}) {
	
    return (
		// <div className="productitem"><div>{product.title} </div></div>
		<NavLink to={`/product/${product._id}`} className="noUnderLine">

			<Card className="productitem" style={{ border: 'none' }}>
				<div className='productItemImgContainer'>
					<Card.Img className='productItemItemImg' variant="top" src={product.images[0]} />
				</div>
				<Card.Body className='productItemCardBody'>				
					<Card.Text className='productitemTitle'>{product.title}</Card.Text>
					<Card.Text className='productitemPriceNumber'>${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</NavLink>	
	)
}
		  
export default ProductItem
		  