import React, { useContext } from 'react'
import './CustomerInfo.css'
import { AuthContext } from '../../context/auth-context';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function CustomerInfo() {
	const auth = useContext(AuthContext)
  	console.log(auth.userId)
	const navigate = useNavigate();

	//states handler
	const onChangeHandler = (e,setValue) => {
		setValue(e.target.value);
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const newOrder = {
			
		}
		//console.log('new listing',newOrder);
		
		try{   
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
			},
			body: JSON.stringify(newOrder),
			};

			const responseData = await fetch(
				"https://capstone-ora-backend.onrender.com/order", options
			)
			// const responseData = await fetch(
			// 	"https://capstone-ora-backend.onrender.com/order", options
			// )
			const newOrderObj = await responseData.json();
			console.log(newOrderObj)
			
			navigate('/')
		} catch (error){
			console.log(error)
		}
	};

    return (
		<div className="customerinfo">
			<div>CheckOut Info name, address, blablabla</div>
			<Container >
			{/* <Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label style ={{marginTop:'70px'}}>Title</Form.Label>
					<Form.Control 
						type="text" 
						value ={titleState} 
						placeholder="Product Name" 
						onChange={(e) => onChangeHandler(e, setTitleState)}
						required/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Place Order
				</Button>
			</Form> */}
		</Container>
					  
		</div>
	)
}
		  
export default CustomerInfo
		  