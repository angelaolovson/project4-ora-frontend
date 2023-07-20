import React from 'react'
import './SideMenu.css'
		  
function SideMenu({ handleComponentChange }) {
    return (
		<div className="sideMenu">
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('AccountInfo')}>Account Info</a>
			</div>
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('CustomerOrders')}>Purchase Orders</a>
			</div>
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('NewProduct')}>New Product</a>
			</div>
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('InventoryList')}>Inventory Manager</a>
			</div>
		</div>
	);
}
		  
export default SideMenu
		  