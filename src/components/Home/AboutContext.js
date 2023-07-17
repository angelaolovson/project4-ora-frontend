import React from 'react'
import './AboutContext.css'
import { Link } from 'react-router-dom'

function AboutContext() {
    return (
		<div className="aboutcontext">
			<div className='aboutcontextLeft'>
				<div className='aboutcontextLeft1'>Ora's Story</div>
				<div className='aboutcontextLeft2'>We are a boutique floral studio with an emphasis on local flowers, and botanical skincare based in New York City.</div>
				<div className='aboutcontextContainer'>
				<Link className='aboutcontextLink' to='/about'>Learn More</Link>
			</div>
			</div>
			<div className='aboutcontextRight'>
				<img className="aboutcontextImg" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689377970/Ora/freshFlowers/La_Casa_uknbds.jpg" alt=""/>
			</div>
					  
		</div>
	)
}
		  
export default AboutContext
		  