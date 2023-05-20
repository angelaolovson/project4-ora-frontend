import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LogInModal(props) {
  const {show, handleClose,handleLoginStatus,handleCurrentUser} = props;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('hi');

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const logIn = {
      email: email,
      password: password,
    };

try{
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logIn),
      };
      const responseData = await fetch(
        "https://airbnb-jade.onrender.com/user/login", options
      );

      const LoginObj = await responseData.json();
      
      if(responseData.ok) {
        //extract token and user
         const {token, currentUser} = LoginObj;

        // storage token in localStorage
         localStorage.setItem('token', token);
        
        //change Nav status
          handleLoginStatus(true);
          handleCurrentUser(currentUser.username)
          console.log("Login sucessful");
          handleClose();
      } else {
          setErrorMessage("Email or password do not match");
          console.log("Login failed:")
      }

} catch(error){
    console.error('Login error:',error)
}   
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit ={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value = {email}
                onChange ={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                value = {password}
                onChange ={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="warning" size="lg" type='submit'>
            Log In
          </Button> 
            </Form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogInModal;