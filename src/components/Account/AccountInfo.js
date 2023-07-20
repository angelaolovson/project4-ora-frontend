import React, { useContext, useEffect, useState } from 'react'
import './AccountInfo.css'
import { AuthContext } from '../../context/auth-context'
import EditAccountInfo from './EditAccountInfo'
import { Button} from 'react-bootstrap'

function AccountInfo() {
	const auth = useContext(AuthContext)
	const [userState, setUserState] = useState(null);
    const [showModal, setShowModal] = useState(false);

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

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="accountinfo">
            <div className="accountinfoTitle">Account info</div>
            <div className="accountinfoNameContainer">
                <div>First Name: {userState?.firstName}</div>
                <div>Last Name: {userState?.lastName}</div>
            </div>
            <div className="accountinfoEmail">Email: {userState?.email}</div>
            <div className="accountinfoPhone">Phone Number: {userState?.phoneNumber}</div>
            <Button variant="outline-secondary" onClick={handleOpenModal}>
                Edit Account Info
            </Button>
            {showModal && 
            <EditAccountInfo
                show={true}
                handleClose={handleCloseModal}
                userData={userState}
            />}
        </div>
    );
	  
}
		  
export default AccountInfo
		  