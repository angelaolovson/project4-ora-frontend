import './CustomerOrders.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomerOrders({userData}) {
    console.log(userData)
	
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
                    <Button className='detailsButton' variant="outline-secondary">
                        <Link 
                            to={{
                                pathname: `/order/${order._id}`
                            }}
                        >
                            Receipt
                        </Link>
                    </Button>
                </div>
            ))}
        </div>
    )
}
		  
export default CustomerOrders
		  