import React from 'react'
import './SecondSlideContext.css'
import { Link } from 'react-router-dom'

function SecondSlideContext() {
    return (
		<div className="secondslidecontext">
			<div className="secondslidecontext1">ORA LA CASA DE LAS FLORES</div>
			<div className="secondslidecontext2">From romantic floristry to botanical skincare, we've got you covered!</div>
			<div className="secondslidecontext3">Ora by Tangni is the botanical skincare of the La Casa family - all products are sourced from only the best found in nature.</div>
			<div className='secondslidecontextLinkContainer'>
				<Link className='secondslidecontextLink' to='/selfcare'>Explore</Link>
			</div>	  
		</div>
	)
}
		  
export default SecondSlideContext
		  