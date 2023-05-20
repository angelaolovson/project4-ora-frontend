//import { NavLink } from "react-router-dom";
import "./MainNav.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';
import SearchBar from "./SearchBar";


function MainNav() {

const [showSignUpModal, setShowSignUpModal] = useState(false);
const [showLogInModal, setShowLogInModal] = useState(false);
const [currentUser, setCurrentUser] = useState(" ");
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleSignUpModalOpen = () => setShowSignUpModal(true);
const handleSignUpModalClose = () => setShowSignUpModal(false);
const handleLogInModalOpen = () => setShowLogInModal(true);
const handleLogInModalClose = () => setShowLogInModal(false);

const handleLoginStatus = (isLoggedIn) => {
  setIsLoggedIn(isLoggedIn);
};

const handleCurrentUser = (data) => {
  setCurrentUser(data);
}

useEffect(() => {
  //get token from local storage
  const token = localStorage.getItem('token');
  const validateToken = async () => {
  if(token){
    try{
      const response = await fetch('https://airbnb-jade.onrender.com/user/validation',{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if(data.valid){
        handleLoginStatus(true);
        handleCurrentUser(data.user.username);
      } else {
        localStorage.removeItem('token');
      }
    } catch (error){
      console.log('Token validation error', error);
    }
  };
  validateToken();
}
},[]);

  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">Airbnb Name?</Navbar.Brand>
          <SearchBar/>
          <NavDropdown title={currentUser ? currentUser.username: "User"} id="navbarScrollingDropdown" >
            {isLoggedIn? (
              <>
                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/listing/new">Airbnb Your Home</NavDropdown.Item>
                <NavDropdown.Item href = "/user/logoff">Log Off</NavDropdown.Item>
              </>
             
            ):(
              <>
                <NavDropdown.Item onClick = {handleLogInModalOpen}>Log In</NavDropdown.Item>
                    <LogInModal 
                      show={showLogInModal}
                      handleClose ={handleLogInModalClose}
                      handleLoginStatus = {handleLoginStatus}
                      handleCurrentUser ={handleCurrentUser}/>
                <NavDropdown.Item onClick = {handleSignUpModalOpen}>Sign Up</NavDropdown.Item>
                    <SignUpModal 
                    show={showSignUpModal} 
                    handleClose = {handleSignUpModalClose}/>
              </>
            )}      
              <NavDropdown.Divider />
              <NavDropdown.Item href="/listing/new">
                Airbnb Your Home
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
