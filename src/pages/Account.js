import React, { useContext, useState } from 'react'
import './Account.css'
import AccountInfo from '../components/Account/AccountInfo';
import CustomerOrders from '../components/Account/CustomerOrders';
import SideMenu from '../components/Account/SideMenu';



function Account() {

    const [activeComponent, setActiveComponent] = useState(null);

	const handleComponentChange = (componentName) => {
		setActiveComponent(componentName);
	};

	return (
		<div className="account">
			<div className="accountLeftDiv">
				<SideMenu handleComponentChange={handleComponentChange} />
			</div>
			<div className='emptyBar'></div>
			<div className="accountRightDiv">
				{activeComponent === 'AccountInfo' && <AccountInfo />}
				{activeComponent === 'CustomerOrders' && <CustomerOrders />}
			</div>
		</div>
	);
}
		  
export default Account
		  