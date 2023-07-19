//import { NavLink } from "react-router-dom";
import "./MainNav.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useContext, useEffect} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';
import { AuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";


function MainNav() { 

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(" ");
  //const [isLoggedIn, setIsLoggedIn] = useState(" ");
  const [cartIdState,setCartIdState] = useState(null)

  const handleSignUpModalOpen = () => setShowSignUpModal(true);
  const handleSignUpModalClose = () => setShowSignUpModal(false);
  const handleLogInModalOpen = () => setShowLogInModal(true);
  const handleLogInModalClose = () => setShowLogInModal(false);
  const auth = useContext(AuthContext)
  console.log(auth)

  useEffect(()=> {
    const getUserData = JSON.parse(localStorage.getItem("userData"))
    if(getUserData && getUserData.userData.cart.length > 0){
      setCartIdState(getUserData.userData.cart[0]._id)
    }
  }, []);


  const handleCurrentUser = (data) => {
    setCurrentUser(data);
  }

  // console.log(currentUser)

    return (
      <div className="mainNavBar">
        <div className="logo">
          <a className="logoOra" href="/">
            <img className='logoImg' src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689738648/Ora/logo_hygqgk.png" alt="Ora Logo"/>
          </a>
        </div>

        <div className="navLinks">
          <div><Link className='navLink' to='/selfcare'>Selfcare</Link></div>
          <div><Link className='navLink' to='/bouquet'>Bouquet</Link></div>
          <div><Link className='navLink' to='/wedding'>Wedding</Link></div>
          <div><Link className='navLink' to='/about'>About</Link></div>
        </div>

        

        <div className="navRight">
          <div className="cartPath">
            <Link className="cartPathLink" 
              to={{ 
                pathname: cartIdState ?`/cart/${cartIdState}`: '/', 
                state: {cartId:cartIdState}
                }}>
              Cart
            </Link>
          </div>


          <Navbar className="navMain" expand="lg" >
            <div className="dropDown">
              <NavDropdown className="dropdownTitle" title={auth.isLoggedIn ? `Welcome` : "User"} id="navbarScrollingDropdown" >
                {auth.isLoggedIn? (
                  <>
                    {/* <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item> */}
                    <NavDropdown.Item onClick={()=>auth.logout()}>Log Off</NavDropdown.Item>
                  </>
                  ):(
                  <>
                    <NavDropdown.Item onClick = {handleLogInModalOpen}>Log In</NavDropdown.Item>
                        <LogInModal 
                          show={showLogInModal}
                          handleCurrentUser
                          handleClose ={handleLogInModalClose}/>
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
                  {auth.userId === "64b7561ce20f8019002809ad" && (
                  <NavDropdown.Item href="/product/new">
                    NewProduct
                  </NavDropdown.Item>
                  )}
              </NavDropdown>
            </div>         
          </Navbar>
        </div>
      </div>
    );
}

export default MainNav;
