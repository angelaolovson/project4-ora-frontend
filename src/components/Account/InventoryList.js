import React, { useEffect, useState } from 'react'
import './InventoryList.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function InventoryList() {
	const [productState, setProductState] = useState([])

	useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/product');
                const productsData = await response.json();
                setProductState(productsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

	// Group products by category
    const groupedProducts = productState.reduce((grouped, product) => {
        const category = product.category;

        if (!grouped[category]) {
            grouped[category] = [];
        }

        grouped[category].push(product);
        return grouped;
    }, {});

    return (
        <div className="inventorylist">
            <div className="inventorylistTitleContainer">
                <div className="inventorylistTitleContainer1">Image</div>
                <div className="inventorylistTitleContainer2">Cateegory</div>
                <div className="inventorylistTitleContainer3">SubCategory</div>
                <div className="inventorylistTitleContainer4">Name</div>
                <div className="inventorylistTitleContainer5">Price</div>
                <div className="inventorylistTitleContainer6">Qty OH</div>
                <div className="inventorylistTitleContainer7">Link</div>
            </div>
            {Object.entries(groupedProducts).map(([category, products]) => (
                <div key={category}>
                    {/* <h2>{category}</h2> */}
                    {products.map(product => (
                        <div className="OHList" key={product._id}>
                            <div className="OHListImgContainer">
                                <img className="OHListImg" src={product.images[0]} alt={product.title} />
                            </div>
                            
							<div className="OHListCat">{product.category}</div>
							<div className="OHListSubCat">{product.subCategory}</div>
							<div className="OHListName">{product.title}</div>
							<div className="OHListPrice">${product.price}</div>
							<div className="OHListqtyCount">{product.inventoryCount}</div>
							<div className="OHListLinks">
                            <Button variant="outline-secondary">
                                <Link to={`/product/${product._id}/edit`}>
                                    Edit
                                </Link>
                            </Button>

							</div>
                           
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
	
}
		  
export default InventoryList
		  