import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LogInModal({show, handleClose}) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const logIn = {
      email: email,
      password: password,
    };

    console.log("New Person, yo: ", logIn);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logIn),
    };
    const responseData = await fetch(
      "https://airbnb-jade.onrender.com/user/login",
      options
    );

    const newPersonObj = await responseData.json();
    console.log(newPersonObj);
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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                value = {password}
                onChange ={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="warning" size="lg" onClick={handleClose}>
            Log In
          </Button> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogInModal;