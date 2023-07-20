import React from 'react'
import './PurchaseDetails.css'
import { Modal } from 'react-bootstrap'

function PurchaseDetails({show,handleClose,order}) {
	console.log(order)
    return (
		<div className="purchasedetails">
			<Modal show={show} onHide={handleClose} className='modal-background'>
            <Modal.Header closeButton>
                <Modal.Title>Purchase Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
            </Modal.Body>

        </Modal>
					  
		</div>
	)
}
		  
export default PurchaseDetails
		  