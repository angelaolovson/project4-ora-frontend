import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../context/auth-context';
function SignUpModal({show,handleClose}) {
  ////////////////////states and props////////////////////

  const [username, setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useContext(AuthContext)
  console.log(auth)

  ///////////////handle submit function///////////////////
  const handleSubmit = async (event) => {
    event.preventDefault();
    const signUp = {
      username: username,
      email: email,
      password: password,
    }

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUp),
      };
      const responseData = await fetch(
        "http://localhost:4000/user/signup", options
      );

      const signUpObj = await responseData.json();
      console.log(signUpObj)
      
      // if(responseData.ok) {
      //   // set the auth with successfully login info
      //   auth.login(LoginObj.currentUser.id,LoginObj.token,LoginObj.currentUser)
   
      //   console.log(LoginObj)
      //   console.log("Login sucessful");
      //   //close modal
      //    handleClose();
      // } else {
      //     setErrorMessage("Email or password do not match");
      //     console.log("Login failed:")
      // }

} catch(error){
    console.error('Login error:',error)
}   
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" size="lg" onClick={handleClose}>
            Create an account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModal;