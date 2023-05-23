import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditReview = ({show,handleClose,reviewData}) => {
   
    const [cleanRatingState, setcleanRating] = useState(`${reviewData.cleanlinessRating}`);
    const [locationRatingState, setlocationRating] = useState(`${reviewData.locationRating}`);
    const [serviceRatingState, setserviceRating] = useState(`${reviewData.serviceRating}`);
    const [overallRatingState, setoverallRating] = useState(`${reviewData.overallRating}`);
    const [commentState, setcomment]=useState(`${reviewData.comment}`);
   
    //onchange handler
    const onChangeHandler = (e, setValue) => {
        //console.log(e.target.value)
        setValue(e.target.value);
      };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const updatedReview = {
            guest: reviewData.guest,
            listing: reviewData.listing,
            cleanlinessRating: cleanRatingState,
            locationRating: locationRatingState,
            serviceRating: serviceRatingState,
            overallRating: overallRatingState,
            comment: commentState
        }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedReview),
        };

        const responseData = await fetch(`http://localhost:4000/review/${reviewData._id}`, options);

        const updatedReviewData = await responseData.json();
        console.log(updatedReviewData);
        handleClose();
        window.location.reload();
    }

    const onDeleteHandler = async (event) => {
        event.preventDefault();
        console.log("Delete review with ", reviewData._id)

        const options = {
            method: "DELETE",
        };

        const responseData = await fetch(`http://localhost:4000/review/${reviewData._id}`, options);
        const response = await responseData.json();
        console.log(response)
        window.location.reload();
    }
  return (
    <div>
    <Modal show={show} onHide={handleClose} className='modal-background'>
     <Modal.Header closeButton onClick={()=>handleClose()}>
       <Modal.Title>Update Review</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form onSubmit ={handleSubmit}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Cleanliness</Form.Label>
           <Form.Control
             type="number"
             min="1"
             max="5"
             autoFocus
             value = {cleanRatingState}
             onChange ={(e) => onChangeHandler(e,setcleanRating)}
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Location</Form.Label>
           <Form.Control
                type="number"
                min="1"
                max="5"
                autoFocus
                value={locationRatingState}
                onChange ={(e) => onChangeHandler(e,setlocationRating)}
                />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Service</Form.Label>
           <Form.Control
             type="number"
             min="1"
             max="5"
             autoFocus
             value = {serviceRatingState}
             onChange ={(e) => onChangeHandler(e,setserviceRating)}
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Overall</Form.Label>
           <Form.Control
             type="number"
             min="1"
             max="5"
             autoFocus
             value = {overallRatingState}
             onChange ={(e) => onChangeHandler(e,setoverallRating)}
           />
         </Form.Group>
         <Form.Group
           className="mb-3"
           controlId="exampleForm.ControlTextarea1"
         >
           <Form.Label>Comments:</Form.Label>
           <Form.Control 
           as="textarea" 
           rows={3} 
           placeholder="Describe yourself"
             autoFocus
             value = {commentState}
             onChange ={(e) => onChangeHandler(e,setcomment)}/>
         </Form.Group>

         <Button variant="warning" size="lg" type='submit'>
        Update Review
       </Button> 
       <Button variant="danger" size="lg" type='submit' onClick ={onDeleteHandler}>
        Delete
       </Button> 
         </Form>
     </Modal.Body>
     <Modal.Footer>
     </Modal.Footer>
   </Modal>
 </div>
  )
}

export default EditReview