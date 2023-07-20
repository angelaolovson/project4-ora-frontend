import { useState } from 'react';
import './CustomerOrders.css'
import { Button } from 'react-bootstrap';
import PurchaseDetails from './PurchaseDetails';

function CustomerOrders({userData}) {
	const [activeOrder, setActiveOrder] = useState(null);
    
    const handleOpenModal = (orderId) => {
        setActiveOrder(orderId);
    };

    const handleCloseModal = () => {
        setActiveOrder(null);
    };
	
    return (
        <div className="customerorders">
            <div>Customer orders:</div>
            {userData.orders.map((order, index) => (
                <div key={index}>
                    <div>{order._id}</div>
                    <Button variant="outline-secondary" onClick={() => handleOpenModal(order._id)}>
                        Purchase Details
                    </Button>
                    {activeOrder === order._id && 
                    <PurchaseDetails
                        show={true}
                        handleClose={handleCloseModal}
                        order={order}
                    />}
                </div>
            ))}
        </div>
    )
}
		  
export default CustomerOrders
		  