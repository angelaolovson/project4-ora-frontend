//import { NavLink } from "react-router-dom";
import "./MainNav.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect, useContext} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';
import SearchBar from "./SearchBar";
import { AuthContext } from "../../context/auth-context";


function MainNav() {

const [showSignUpModal, setShowSignUpModal] = useState(false);
const [showLogInModal, setShowLogInModal] = useState(false);
const [currentUser, setCurrentUser] = useState(" ");
//const [isLoggedIn, setIsLoggedIn] = useState(" ");

const handleSignUpModalOpen = () => setShowSignUpModal(true);
const handleSignUpModalClose = () => setShowSignUpModal(false);
const handleLogInModalOpen = () => setShowLogInModal(true);
const handleLogInModalClose = () => setShowLogInModal(false);
const auth = useContext(AuthContext)
//console.log("context state🥲😍🥲",auth)
// const handleLoginStatus = (isLoggedIn) => {
//   setIsLoggedIn(isLoggedIn);
// };

const handleCurrentUser = (data) => {
  setCurrentUser(data);
}



  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/">Airbnb Name?</Navbar.Brand>
          <SearchBar/>
          <NavDropdown title={auth.isLoggedIn ? "Welcome" : "User"} id="navbarScrollingDropdown" >
            {auth.isLoggedIn? (
              <>
                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/listing/new">Airbnb Your Home</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>auth.logout()}>Log Off</NavDropdown.Item>
              </>
             
            ):(
              <>
                <NavDropdown.Item onClick = {handleLogInModalOpen}>Log In</NavDropdown.Item>
                    <LogInModal 
                      show={showLogInModal}
                      handleClose ={handleLogInModalClose}
                    />
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
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>

  );
}

export default MainNav;
