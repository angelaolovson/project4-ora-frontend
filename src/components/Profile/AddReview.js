import React, {useState} from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Profile.css';
import EditReview from './EditReview';

const AddReview = ({show,handleClose,bookingData}) => {
   
    const [cleanRatingState, setcleanRating] = useState(5);
    const [locationRatingState, setlocationRating] = useState(5);
    const [serviceRatingState, setserviceRating] = useState(5);
    const [overallRatingState, setoverallRating] = useState(5);
    const [commentState, setcomment]=useState(``);
   
    //onchange handler
    const onChangeHandler = (e, setValue) => {
        //console.log(e.target.value)
        setValue(e.target.value);
      };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const updatedReview = {
            reviewer: bookingData.guest,
            listing: bookingData.listing,
            cleanlinessRating: cleanRatingState,
            locationRating: locationRatingState,
            serviceRating: serviceRatingState,
            overallRating: overallRatingState,
            comment: commentState
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedReview),
        };

        const responseData = await fetch(`http://localhost:4000/review`, options);

        const AddReviewData = await responseData.json();
        console.log(AddReviewData);
        handleClose();
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
           placeholder="Add Comments"
             autoFocus
             value = {commentState}
             onChange ={(e) => onChangeHandler(e,setcomment)}/>
         </Form.Group>

         <Button variant="warning" size="lg" type='submit'>
            Post Review
        </Button> 
         </Form>
     </Modal.Body>
     <Modal.Footer>
     </Modal.Footer>
   </Modal>
 </div>
  )
}

export default AddReview