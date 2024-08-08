import React, { useState } from 'react'
import './NewProduct.css'
import { Button, Container, Form } from 'react-bootstrap';

function NewProduct() {
	const [titleState, setTitleState] = useState("");
	const [priceState, setPriceState] = useState("");
	const [imgState, setImgState] = useState(['','','','','']);
	const [descriptionState, setDescriptionState] = useState("");
	const [ingredientsState, setIngredientsState] = useState("");
	const [instructionState, setInstructionState] = useState("");
	const [colorState, setColorState] = useState("");
	const [scentsState, setScentsState] = useState("");
	const [categoryState, setCategoryState] = useState("");
	const [subCategoryState, setSubCategoryState] = useState("");
	const [inventoryCountState, setInventoryCountState] = useState("");
	

	//states handler
	const onChangeHandler = (e,setValue) => {
		setValue(e.target.value);
	}

	const handleImgChange = (e, index) => {
		const newImgUrls = [...imgState];
		newImgUrls[index] = e.target.value;
		setImgState(newImgUrls);
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const newListing = {
			title: titleState,
			price: priceState,
			images: imgState.filter((url)=>url.trim()!==""),
			description: descriptionState,
			ingredients: ingredientsState,
			instruction: instructionState,
			color: colorState,
			scents:scentsState,
			category:categoryState,
			subCategory:subCategoryState,
			inventoryCount:inventoryCountState
		}
		//console.log('new listing',newListing);
		
		try{   
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
			},
			body: JSON.stringify(newListing),
			};

			const responseData = await fetch(
				"https://capstone-ora-backend.onrender.com/product", options
			)
			// const responseData = await fetch(
			// 	"https://capstone-ora-backend.onrender.com/product", options
			// )
			const newProductObj = await responseData.json();
			console.log(newProductObj)
			
			window.location.reload()
		} catch (error){
			console.log(error)
		}
	};

	return (
		<Container >
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label style ={{marginTop:'70px'}}>Title</Form.Label>
				<Form.Control 
					type="text" 
					value ={titleState} 
					placeholder="Product Name" 
					onChange={(e) => onChangeHandler(e, setTitleState)}
					required/>
			</Form.Group>
			
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Price</Form.Label>
				<Form.Control 
					type="number" 
					placeholder="$" 
					value ={priceState}
					min="0" 
					onChange={(e) => onChangeHandler(e, setPriceState)}
					required/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
			<Form.Label>Category</Form.Label>
				<Form.Control 
					as="select" 
					defaultValue="selfcare"
					value ={categoryState}
					onChange={(e) => onChangeHandler(e, setCategoryState)}
					required>
					<option value="">Choose an option</option>
					<option value="selfcare">Selfcare</option>
					<option value="bouquet">Bouquet</option>
					<option value="wedding">Wedding</option>
				</Form.Control>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Label>SubCategory</Form.Label>
					<Form.Control 
						as="select" 
						defaultValue="candles"
						value ={subCategoryState}
						onChange={(e) => onChangeHandler(e, setSubCategoryState)}
						required>
						<option value="">Choose an option</option>
						<option value="candles">Candles</option>
						<option value="incense">Incense</option>
						<option value="hydrate">Hydrate</option>
						<option value="cleanse">Cleanse</option>
						<option value="freshFlowers">Fresh Flowers</option>
						<option value="driedFlowers">Dried Flowers</option>
						<option value="bridalBouquet">Bridal Bouquet</option>
						<option value="weddingGallery">Wedding Gallery</option>
				</Form.Control>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Product Description</Form.Label>
				<Form.Control 
					type="text" 
					value ={descriptionState} 
					placeholder="Product Description required for all" 
					onChange={(e) => onChangeHandler(e, setDescriptionState)}
					required/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Product Ingredients</Form.Label>
				<Form.Control 
					type="text" 
					value ={ingredientsState} 
					placeholder="Required for selfcares" 
					onChange={(e) => onChangeHandler(e, setIngredientsState)}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Product Instruction</Form.Label>
				<Form.Control 
					type="text" 
					value ={instructionState} 
					placeholder="Required for selfcares" 
					onChange={(e) => onChangeHandler(e, setInstructionState)}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Color</Form.Label>
				<Form.Control 
					type="text" 
					value ={colorState} 
					placeholder="Required for bouquets" 
					onChange={(e) => onChangeHandler(e, setColorState)}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Scents</Form.Label>
				<Form.Control 
					type="text" 
					value ={scentsState} 
					placeholder="Required for selfcares" 
					onChange={(e) => onChangeHandler(e, setScentsState)}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Inventory Unit Count</Form.Label>
				<Form.Control 
					type="number" 
					placeholder="Unit"
					min="0" 
					value ={inventoryCountState} 
					onChange={(e) => onChangeHandler(e, setInventoryCountState)}
					required/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Label>Images</Form.Label>
				<Form.Control type="text" placeholder="url" value ={imgState[0]} onChange={(e) => handleImgChange(e, 0)} />
				<Form.Control type="text" placeholder="url" value ={imgState[1]} onChange={(e) => handleImgChange(e, 1)} />
				<Form.Control type="text" placeholder="url" value ={imgState[2]} onChange={(e) => handleImgChange(e, 2)} />
				<Form.Control type="text" placeholder="url" value ={imgState[3]} onChange={(e) => handleImgChange(e, 3)} />
				<Form.Control type="text" placeholder="url" value ={imgState[4]} onChange={(e) => handleImgChange(e, 4)} />
				<Form.Control type="text" placeholder="url" value ={imgState[5]} onChange={(e) => handleImgChange(e, 5)} />
				<Form.Control type="text" placeholder="url" value ={imgState[6]} onChange={(e) => handleImgChange(e, 6)} />
				<Form.Control type="text" placeholder="url" value ={imgState[7]} onChange={(e) => handleImgChange(e, 7)} />
				<Form.Control type="text" placeholder="url" value ={imgState[8]} onChange={(e) => handleImgChange(e, 8)} />
				<Form.Control type="text" placeholder="url" value ={imgState[9]} onChange={(e) => handleImgChange(e, 9)} />
				<Form.Control type="text" placeholder="url" value ={imgState[10]} onChange={(e) => handleImgChange(e, 10)} />
				<Form.Control type="text" placeholder="url" value ={imgState[11]} onChange={(e) => handleImgChange(e, 11)} />
				<Form.Control type="text" placeholder="url" value ={imgState[12]} onChange={(e) => handleImgChange(e, 12)} />
				<Form.Control type="text" placeholder="url" value ={imgState[13]} onChange={(e) => handleImgChange(e, 13)} />
				<Form.Control type="text" placeholder="url" value ={imgState[14]} onChange={(e) => handleImgChange(e, 14)} />
				<Form.Control type="text" placeholder="url" value ={imgState[15]} onChange={(e) => handleImgChange(e, 15)} />
				<Form.Control type="text" placeholder="url" value ={imgState[16]} onChange={(e) => handleImgChange(e, 16)} />
				<Form.Control type="text" placeholder="url" value ={imgState[17]} onChange={(e) => handleImgChange(e, 17)} />
				<Form.Control type="text" placeholder="url" value ={imgState[18]} onChange={(e) => handleImgChange(e, 18)} />
				<Form.Control type="text" placeholder="url" value ={imgState[19]} onChange={(e) => handleImgChange(e, 19)} />
				<Form.Control type="text" placeholder="url" value ={imgState[20]} onChange={(e) => handleImgChange(e, 20)} />
			</Form.Group>

			<Button variant="outline-secondary" type="submit" style={{ marginBottom: '20px' }} >
				Create New Product
			</Button>
		</Form>
		</Container>
		
	)
}
		  
export default NewProduct
		  