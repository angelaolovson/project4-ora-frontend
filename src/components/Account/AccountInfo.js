import React, { useContext, useEffect, useState } from 'react'
import './AccountInfo.css'
import { AuthContext } from '../../context/auth-context'
import EditAccountInfo from './EditAccountInfo'
import { Button, Modal } from 'react-bootstrap'

function AccountInfo() {
	const auth = useContext(AuthContext)
	console.log(auth)

	//userData
	const[firstNameState, setFirstNameState] = useState('')
	const[lastNameState, setLastNameState] = useState('')
	const[phoneNumberState, setPhoneNumberState] = useState('')
	const[emailState, setEmailState] = useState('')

	const [showModal, setShowModal] = useState(false);
	const [AddModalState,setAddModal] = useState(null)
	const handleAddModalClose = ()=>setAddModal(null);
  	const handleAddModalOpen = (index)=>setAddModal(index);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	  

	useEffect(()=>{
        const fetchUser = async() => {
        try {
            const responseData = await fetch (`http://localhost:4000/user/${auth.userId}`);
            const userData = await responseData.json();
            console.log("***** each user data *****",userData);

            const {firstName,lastName, phoneNumber, email} = userData

            setFirstNameState(firstName);
            setLastNameState(lastName);
			setPhoneNumberState(phoneNumber);
			setEmailState(email);

        } catch(error) {
            console.log(error)
        }
        }
        fetchUser();
    }, [auth.userId]);

	console.log(firstNameState)


    return (
		<div className="accountinfo">
		  <div className="accountinfoTitle">Account info</div>
		  <div className="accountinfoNameContainer">
			<div>First Name: {firstNameState}</div>
			<div>Last Name: {lastNameState}</div>
		  </div>
		  <div className="accountinfoEmail">Email: {emailState}</div>
		  <div className="accountinfoPhone">Phone Number: {phoneNumberState}</div>
	  
		  <Button variant="outline-secondary" onClick={handleOpenModal}>
			Edit Account Info
		  </Button>
	  
		  <Modal show={showModal} onHide={handleCloseModal}>
			<Modal.Header closeButton>
			  <Modal.Title>Edit Account Info</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			  <EditAccountInfo handleClose={handleCloseModal} />
			</Modal.Body>
		  </Modal>
		</div>
	  );
	  
}
		  
export default AccountInfo
		  