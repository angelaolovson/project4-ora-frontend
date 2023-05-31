import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const EditProfile = ({show,handleClose,profile}) => {
    const [usernameState, setUsername] = useState(`${profile.username}`);
    const [occupationState, setOccupation] = useState(`${profile.occupation}`);
    const [descriptionState, setDescription] = useState(`${profile.description}`);
    const [imageState, setImage] = useState(`${profile.image}`);
    const navigate = useNavigate();

    //onchange handler
    const onChangeHandler = (e,setValue) =>{
        //console.log(e.target.value)
        setValue(e.target.value);
    }

    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   const reader = new FileReader();
    //   // Do something with the selected image file
    //   reader.onloadend = () => {
    //     setImage(reader.result);
    //   };
  
    //   if (file) {
    //     reader.readAsDataURL(file);
    //   }
    // }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const updatedProfile = {
            username: usernameState,
            occupation: occupationState,
            description: descriptionState,
            image: imageState
        }

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfile),
        };

        //https://airbnb-main.onrender.com
        //const responseData = await fetch(`http://localhost:4000/user/${profile._id}`, options);
        const responseData = await fetch(`https://airbnb-main.onrender.com/user/${profile._id}`, options);

        const updatedProfileData = await responseData.json();
        console.log(updatedProfileData);
        handleClose();
        navigate('/user/profile');
    }


  return (
    <div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={()=>handleClose()}>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="test"
                placeholder="Mary"
                autoFocus
                value = {usernameState}
                onChange ={(e) => onChangeHandler(e,setUsername)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Host"
                autoFocus
                value = {occupationState}
                onChange ={(e) => onChangeHandler(e,setOccupation)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Introduce Yourself</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Describe yourself"
                autoFocus
                value = {descriptionState}
                onChange ={(e) => onChangeHandler(e,setDescription)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="text"
                placeholder= "image url"
                autoFocus
                value = {imageState}
                onChange ={(e) => onChangeHandler(e,setImage)}
              />
               {/* <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              /> */}
            </Form.Group>
            <Button variant="warning" size="lg" type='submit'>
           Update Profile
          </Button> 
            </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProfile