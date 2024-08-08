import React, {useContext, useEffect, useState } from 'react'
import './Account.css'
import AccountInfo from '../components/Account/AccountInfo';
import CustomerOrders from '../components/Account/CustomerOrders';
import SideMenu from '../components/Account/SideMenu';
import { AuthContext } from '../context/auth-context';
import NewProduct from '../components/Account/NewProduct';
import InventoryList from '../components/Account/InventoryList';


function Account() {
	const auth = useContext(AuthContext)
    const [activeComponent, setActiveComponent] = useState(null);
	const [userState, setUserState] = useState(null);

	useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://capstone-ora-backend.onrender.com/user/${auth.userId}`);
                const userData = await response.json();
                setUserState(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [auth.userId]);

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
				{activeComponent === 'CustomerOrders' && <CustomerOrders userData={userState} />}
				{activeComponent === 'NewProduct' && <NewProduct />}
				{activeComponent === 'InventoryList' && <InventoryList />}
			</div>
		</div>
	);
}
		  
export default Account