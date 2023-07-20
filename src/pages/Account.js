import React, {useContext, useEffect, useState } from 'react'
import './Account.css'
import AccountInfo from '../components/Account/AccountInfo';
import CustomerOrders from '../components/Account/CustomerOrders';
import SideMenu from '../components/Account/SideMenu';
import { AuthContext } from '../context/auth-context';


function Account() {
	const auth = useContext(AuthContext)
    const [activeComponent, setActiveComponent] = useState(null);
	const [userState, setUserState] = useState(null);

	useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:4000/user/${auth.userId}`);
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
			</div>
		</div>
	);
}
		  
export default Account
		  