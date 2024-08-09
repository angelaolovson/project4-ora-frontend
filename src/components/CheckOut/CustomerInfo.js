import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth-context';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function CustomerInfo() {
	const auth = useContext(AuthContext)
	const {cartState} = useContext(CartContext);
	const navigate = useNavigate();
  	console.log(auth.userId)
	console.log(cartState)

	//userData
	const[firstNameState, setFirstNameState] = useState('')
	const[lastNameState, setLastNameState] = useState('')
	const[phoneNumberState, setPhoneNumberState] = useState('')
	const[emailState, setEmailState] = useState('')
	//receiverInfo
	const[receiverFirstNameState, setreceiverFirstNameState] = useState('')
	const[receiverLastNameState, setreceiverLastNameState] = useState('')
	const[receiverPhoneNumberState, setreceiverPhoneNumberState] = useState('')
	const[receiverEmailState, setreceiverEmailState] = useState('')	

	useEffect(()=>{
        const fetchUser = async() => {
        try {
            const responseData = await fetch (`https://capstone-ora-backend.onrender.com/user/${auth.userId}`);
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

	//states handler
	const onChangeHandler = (e,setValue) => {
		setValue(e.target.value);
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const newOrder = {
		  user: auth.userId,
		  cart: cartState._id,
		  receiver: {
			firstName: receiverFirstNameState,
			lastName: receiverLastNameState,
			phoneNumber: receiverPhoneNumberState,
			email: receiverEmailState,
		  },
		};
	  
		try {
		  const options = {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(newOrder),
		  };
	  
		  const responseData = await fetch(
			"https://capstone-ora-backend.onrender.com/order",
			options
		  );
	  
		  const newOrderObj = await responseData.json();
		  console.log(newOrderObj);
	  
		  navigate('/');
		} catch (error) {
		  console.log(error);
		}
	  };

    return (
		<div className="w-[50%]">
			<div className='text-2xl font-bold mb-4'>Customer Infomation</div>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label style ={{marginTop:'70px'}}>First Name</Form.Label>
						<Form.Control 
							type="text" 
							value ={receiverFirstNameState} 
							placeholder={firstNameState} 
							onChange={(e) => onChangeHandler(e, setreceiverFirstNameState)}
							required/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label style ={{marginTop:'70px'}}>Last Name</Form.Label>
						<Form.Control 
							type="text" 
							value ={receiverLastNameState} 
							placeholder={lastNameState} 
							onChange={(e) => onChangeHandler(e, setreceiverLastNameState)}
							required/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label style ={{marginTop:'70px'}}>Email</Form.Label>
						<Form.Control 
							type="text" 
							value ={receiverEmailState} 
							placeholder={emailState} 
							onChange={(e) => onChangeHandler(e, setreceiverEmailState)}
							required/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label style ={{marginTop:'70px'}}>Phone Number</Form.Label>
						<Form.Control 
							type="tel" 
							value ={receiverPhoneNumberState} 
							placeholder={phoneNumberState} 
							onChange={(e) => onChangeHandler(e, setreceiverPhoneNumberState)}
							required/>
					</Form.Group>

					<Button variant="outline-secondary" type="submit">
						Place Order
					</Button>
				</Form>
			</Container>	  
		</div>
	)
}
		  
export default CustomerInfo
		  