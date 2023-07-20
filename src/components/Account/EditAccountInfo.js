import React, {useEffect, useState } from 'react'
import './EditAccountInfo.css'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'

function EditAccountInfo({show,handleClose,userData}) {

	// Initialize states with userData
    const [firstNameState, setFirstNameState] = useState(userData?.firstName);
    const [lastNameState, setLastNameState] = useState(userData?.lastName);
    const [phoneNumberState, setPhoneNumberState] = useState(userData?.phoneNumber);
    const [addressState, setAddressState] = useState(userData?.address);

	// Update states when userData changes
    useEffect(() => {
        setFirstNameState(userData?.firstName);
        setLastNameState(userData?.lastName);
        setPhoneNumberState(userData?.phoneNumber);
        setAddressState(userData?.address);
    }, [userData]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const updateUserInfo = {
            firstName: firstNameState,
			lastName: lastNameState,
			phoneNumber: phoneNumberState,          
			address: addressState,           
        };
        console.log('updating user info',updateUserInfo);
    	///////////////fetch///////////////
        try{
			const options = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
			},
			body: JSON.stringify(updateUserInfo),
			};

			const responseData = await fetch(
			`http://localhost:4000/user/${userData._id}`, options
			)
			const updatedUserObj = await responseData.json();
			console.log(updatedUserObj)
			handleClose();
			window.location.reload();

			} catch (error){
			console.log(error)
        }
    
    };

    return (
        <Modal show={show} onHide={handleClose} className='modal-background'>
            <Modal.Header closeButton>
                <Modal.Title>Edit Account Info</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={firstNameState} onChange={e => setFirstNameState(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={lastNameState} onChange={e => setLastNameState(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" value={phoneNumberState} onChange={e => setPhoneNumberState(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={addressState} onChange={e => setAddressState(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type='submit'>
                        Update Account Info
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
		  
export default EditAccountInfo
		  