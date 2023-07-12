//import { NavLink } from "react-router-dom";
import "./MainNav.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useContext} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';
import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";


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


const handleCurrentUser = (data) => {
  setCurrentUser(data);
}

console.log(currentUser)

  return (
    <div className="mainNavBar">
    <Navbar className="navMain" expand="lg" fixed="top">
      <div className="logo">
					<a className="logoOra" href="/">
						<img className='logoImg' src="https://orabytangni.com/cdn/shop/files/Ora_Logo_Export_2x_ea2e924f-9fd4-4936-ad0e-b151974dcf6b_180x.png?v=1614324752" alt="Ora Logo"/>
					</a>
				</div>
        <div className="navLinks">
					<div><Link className='navLink' to='/selfcare'>Selfcare</Link></div>
					<div><Link className='navLink' to='/bouquet'>Bouquet</Link></div>
					<div><Link className='navLink' to='/wedding'>Wedding</Link></div>
					<div><Link className='navLink' to='/about'>About</Link></div>
				</div>
      <div className="dropDown">
          <NavDropdown className="dropdownTitle" title={auth.isLoggedIn ? `Welcome` : "User"} id="navbarScrollingDropdown" >
            {auth.isLoggedIn? (
              <>
                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>auth.logout()}>Log Off</NavDropdown.Item>
              </>
             
            ):(
              <>
                <NavDropdown.Item onClick = {handleLogInModalOpen}>Log In</NavDropdown.Item>
                    <LogInModal 
                      show={showLogInModal}
                      handleCurrentUser
                      handleClose ={handleLogInModalClose}
                    />
                <NavDropdown.Item onClick = {handleSignUpModalOpen}>Sign Up</NavDropdown.Item>
                    <SignUpModal 
                    show={showSignUpModal} 
                    handleClose = {handleSignUpModalClose}/>
              </>
            )}      
              <NavDropdown.Divider />
              <NavDropdown.Item href="/order">
                Order
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div><Link to='/cart/'>Cart</Link></div>
    </Navbar>
    <div className="emptyDiv"></div>
    </div>
  );
}

export default MainNav;
