import React, { useEffect, useState } from 'react'
import './InventoryList.css'
 
function InventoryList() {
	const [productState, setProductState] = useState()

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

    return (
		<div className="inventorylist">
			<div>Products</div>
					  
		</div>
	)
}
		  
export default InventoryList
		  