import { NavLink } from "react-router-dom";
import "./MainNav.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';



function MainNav() {
// const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showSignUpModal, setShowSignUpModal] = useState(false);
const [showLogInModal, setShowLogInModal] = useState(false);

const handleSignUpModalOpen = () => setShowSignUpModal(true);
const handleSignUpModalClose = () => setShowSignUpModal(false);
const handleLogInModalOpen = () => setShowLogInModal(true);
const handleLogInModalClose = () => setShowLogInModal(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">Airbnb Name?</Navbar.Brand>
            <Form className="d-flex">
            <Form.Group controlId="Location">
            <Form.Label className="label-sm">Location</Form.Label>
            <Form.Control
              type="search"
              placeholder="Where"
              className="me-2"
              aria-label="Search"
            />
            </Form.Group>
           
            <Form.Group controlId="startDate">
            <Form.Label className="label-sm">Check In</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Check In Date"
              name="startDate"
              className="me-2"
              aria-label="Search"
            />
            </Form.Group>
            
            <Form.Group controlId="endDate">
            <Form.Label className="label-sm">Check Out</Form.Label>
            <Form.Control
              type="Date"
              placeholder="Check Out Date"
              name="endDate"
              className="me-2"
              aria-label="Search"
            />
            </Form.Group>
           
            <Form.Group controlId="guestNumber">
            <Form.Label className="label-sm">Guests</Form.Label>
            <Form.Control
              type="number"
              placeholder="Guest Number"
              className="me-2"
              aria-label="Search"
            />
             </Form.Group>
           
            <Button variant="outline-danger" className="nav-btn">Search</Button>
          </Form>
          <NavDropdown title="User" id="navbarScrollingDropdown" >
              <NavDropdown.Item onClick = {handleLogInModalOpen}>Log In</NavDropdown.Item>
                <LogInModal show={showLogInModal} handleClose ={handleLogInModalClose}/>
              <NavDropdown.Item onClick = {handleSignUpModalOpen}>Sign Up</NavDropdown.Item>
                <SignUpModal show={showSignUpModal} handleClose = {handleSignUpModalClose}/>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                <a href="https://www.airbnb.com/host/homes" target="_blank" rel="noopener noreferrer">
                        Airbnb Your Home
                    </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                <a href="https://www.airbnb.com/help?audience=guest" target="_blank" rel="noopener noreferrer">
                        Help
                    </a>
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>

  );
}

export default MainNav;
