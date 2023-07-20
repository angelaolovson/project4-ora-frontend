import React from 'react'
import './SideMenu.css'
		  
function SideMenu({ handleComponentChange }) {
    return (
		<div className="sideMenu">
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('AccountInfo')}>Account Info</a>
			</div>
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('CustomerOrders')}>Orders</a>
			</div>
		</div>
	);
}
		  
export default SideMenu
		  