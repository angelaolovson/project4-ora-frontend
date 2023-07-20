import React, { useContext } from 'react'
import './SideMenu.css'
import { AuthContext } from '../../context/auth-context';
		  
function SideMenu({ handleComponentChange }) {
	const auth = useContext(AuthContext)
    return (
		<div className="sideMenu">
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('AccountInfo')}>Account Info</a>
			</div>
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('CustomerOrders')}>Purchase Orders</a>
			</div>
			{auth.userId === "64b7561ce20f8019002809ad" && (
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('NewProduct')}>New Product</a>
			</div>
			)}
			{auth.userId === "64b7561ce20f8019002809ad" && (
			<div className='sideMenuLinks'>
				<a onClick={() => handleComponentChange('InventoryList')}>Inventory Manager</a>
			</div>
			)}
		</div>
	);
}
		  
export default SideMenu
		  