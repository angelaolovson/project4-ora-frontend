import React, { useEffect, useState } from 'react'
import './Products.css'
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import ProductItem from '../components/ProductItem';



function Products() {
	const { subCategory } = useParams();
	
	const [productsState, setProductsState] = useState([]);
	const url = "http://localhost:4000/product";
	// const url = "https://capstone-ora-backend.onrender.com/product";
  
	useEffect(() => {
	  const fetchProducts = async () => {
		try {
		  let responseData = await fetch(url);
		  let allProducts = await responseData.json();
		//   console.log(allProducts);
		  setProductsState(allProducts);
		} catch (error) {
		  console.log(error);
		}
	  };
  
	  fetchProducts();
	}, [subCategory]);
	// console.log(subCategory);
  
	let filteredProductList = [];

	if (subCategory) {
	  filteredProductList = productsState.filter(
		(product) => product.subCategory === subCategory
	  );
	}
	// console.log(filteredProductList);

	let filteredProducts = filteredProductList.map((product, index) => (
		<Col key={index}>
          <ProductItem  product={product} />
        </Col>
	))

	let titleText;
	if (subCategory === "freshFlowers") {
		titleText = "Fresh Flowers";
	} else if (subCategory === "driedFlowers") {
		titleText = "Dried Flowers";
	} else if (subCategory === "candles") {
		titleText = "Candles";
	} else if(subCategory === "incense"){
		titleText = "Incense";
	} else if(subCategory === "hydrate"){
		titleText = "Hydrate";
	} else if(subCategory === "cleanse"){
		titleText = "Cleanse";
	}
  
	return (
	  <div className='productPage'>
		<div className='productPageTitle'>{titleText}</div>
		{/* Check if products are available */}
		{filteredProductList.length > 0 ? (
			<Row xs={1} md={3} className="g-4">
            	{filteredProducts}
          	</Row>
		) : (
		  <p>Coming soon!</p>
		)}
	  </div>
	);
  }
  
		  
export default Products
		  