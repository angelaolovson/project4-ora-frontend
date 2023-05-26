import React, { useState } from 'react'
import './Filter.css'
import { Button, Form, Modal } from 'react-bootstrap';

function Filter({show,handleClose,filterData}) {
	const [price, setPrice] = useState(null);
	const [bedroomNumber, setBedroomNumber] = useState(null);
	const [bedNumber, setBedNumber] = useState(null);
	const [bathroomNumber, setBathroomNumber] = useState(null);
  
	const onChangeHandler = (e, setValue) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};
  
	const queryBuilder = async() => {
	  const queryObject = {
		price,
		bedroomNumber,
		bedNumber,
		bathroomNumber
	};
  
	let queryArr = []
	for (let key in queryObject){
		if(queryObject[key] !== null) {
			console.log(key)
			queryArr.push(`${key}=${queryObject[key]}`)
		}
	}
  
	console.log(queryArr);
	const queryString = queryArr.join("&")
	console.log(`http://localhost:4000/listing/?${queryString}`)
	const listings = await fetch(`http://localhost:4000/listing/?${queryString}`);
	console.log(listings);
	const data = await listings.json();
	console.log(data);
	filterData(data);
};
	const clearFilter = () => {
		setPrice(null);
		setBedroomNumber(null);
		setBedNumber(null);
		setBathroomNumber(null);
	};
  
	return (
		<>
		<Modal show={show} onHide={handleClose} className='modal-background'>
		  <Modal.Header closeButton onClick={handleClose}>
			<Modal.Title>Filters</Modal.Title>
		  </Modal.Header>
  
		  <Modal.Body>
			<Form>
			<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
				<Form.Label>Price</Form.Label>
				<Form.Control type='number' autoFocus value={price || ''} onChange={(e) => onChangeHandler(e, setPrice)} />
			</Form.Group>

			<Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
				<Form.Label>Bedrooms</Form.Label>
				<Form.Control type='number' autoFocus value={bedroomNumber || ''} onChange={(e) => onChangeHandler(e, setBedroomNumber)} />
			</Form.Group>

			<Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
				<Form.Label>Beds</Form.Label>
				<Form.Control type='number' autoFocus value={bedNumber || ''} onChange={(e) => onChangeHandler(e, setBedNumber)} />
			</Form.Group>

			<Form.Group className='mb-3' controlId='exampleForm.ControlInput4'>
				<Form.Label>Bathrooms</Form.Label>
				<Form.Control type='number' autoFocus value={bathroomNumber || ''} onChange={(e) => onChangeHandler(e, setBathroomNumber)} />
			</Form.Group>

			<Button variant='warning' size='lg' onClick={() => { queryBuilder(); handleClose(); }}>
				Apply
			</Button>
			<Button variant='secondary' size='lg' onClick={() =>{clearFilter(); handleClose();}}>
                Clear
			</Button>
			</Form>
		  </Modal.Body>
  
		  <Modal.Footer></Modal.Footer>
		</Modal>
	  </>
	)
  }	  
export default Filter