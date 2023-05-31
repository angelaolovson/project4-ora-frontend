import React from 'react'
import './HostInfo.css'
import '../../pages/Host'
import { NavLink } from 'react-router-dom'
function HostInfo({host}) {
	const solidStar = '\u2605';
    return (
		<div className="hostInfo">
			<div className='ImgAndDescription'>
				<div className="hostImgContainer"><img className="hostImg" src={host.image} alt="hostImg"/></div>
				<div className='hostDescriptionAndJob' >
					<div className='job' > {solidStar} {host.reviewsGiven.length} Reviews</div>
					<div className='job' >Occupation: {host.occupation} </div>
					<div className='description'>Description: {host.description} </div>
					<div className='description'>Learn more about <NavLink to = {`/user/${host._id}`} >{host.username}</NavLink> </div>
				</div>
			</div>
		</div>
	)
}
		  
export default HostInfo
		  