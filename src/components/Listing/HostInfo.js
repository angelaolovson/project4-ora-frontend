import React from 'react'
import './HostInfo.css'
import '../../pages/Host'
import Host from '../../pages/Host'
function HostInfo({host}) {
    return (
		<div className="host">
			<h2>Host: {host.username} </h2>
			<Host />
			
		</div>
	)
}
		  
export default HostInfo
		  