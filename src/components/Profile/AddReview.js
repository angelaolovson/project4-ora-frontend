import React, {useState} from 'react';
import {Button, Modal, Form } from 'react-bootstrap';
import './Profile.css';
import { Rating } from 'react-simple-star-rating'


const AddReview = ({show,handleClose,bookingData}) => {

  const handleRating = (rate, setRating) => {
    setRating(rate);
    // Other logic
  };
   
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

        const responseData = await fetch(`https://airbnb-main.onrender.com/review`, options);
        //const responseData = await fetch(`https://capstone-ora-frontend.onrender.com/review`, options);

        const AddReviewData = await responseData.json();
        console.log(AddReviewData);
        handleClose();
        window.location.reload();
    }

  return (
    <div>
    <Modal show={show} onHide={handleClose} className='modal-background'>
     <Modal.Header closeButton onClick={()=>handleClose()}>
       <Modal.Title>Add Review</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form onSubmit ={handleSubmit}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Form.Label>Cleanliness</Form.Label>
         <Rating
              onClick={(rating)=>handleRating(rating,setcleanRating)}
              ratingValue = {cleanRatingState}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <Form.Label>Location</Form.Label>
           <Rating
              onClick={(rating)=>handleRating(rating,setlocationRating)}
              ratingValue = {locationRatingState}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Form.Label>Service</Form.Label>
         <Rating
              onClick={(rating)=>handleRating(rating,setserviceRating)}
              ratingValue = {serviceRatingState}
            />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Form.Label>Overall</Form.Label>
         <Rating
              onClick={(rating)=>handleRating(rating,setoverallRating)}
              ratingValue = {overallRatingState}
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