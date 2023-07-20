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
            <div className="customerordersTitle">Customer Orders</div>
            <div className="customerordersSubTitle">
                <div className="subTitlePo">#Order</div>
                <div className="subTitleTime">Purchase Time</div>
                <div className="subTitleDetails">Purchase Details</div>
            </div>
            <div className='emptyDiv'></div>
            {userData.orders.map((order, index) => (
                <div className='customerordersContainer' key={index}>
                    <div className='customerordersId'>{order._id}</div>
                    <div className='customerordersDate'>{order.createdAt}</div>
                    <Button className='detailsButton' variant="outline-secondary" onClick={() => handleOpenModal(order._id)}>
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
		  