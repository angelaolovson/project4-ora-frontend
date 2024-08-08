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
  // const [currentUser, setCurrentUser] = useState(" ");
  //const [isLoggedIn, setIsLoggedIn] = useState(" ");
  const [cartIdState,setCartIdState] = useState(null)

  const handleSignUpModalOpen = () => setShowSignUpModal(true);
  const handleSignUpModalClose = () => setShowSignUpModal(false);
  const handleLogInModalOpen = () => setShowLogInModal(true);
  const handleLogInModalClose = () => setShowLogInModal(false);
  const auth = useContext(AuthContext)
  console.log(auth)

  // dropdown menu for Links
  const [showDropdown, setShowDropdown] = useState(false);
  // Event handlers for showing/hiding the dropdown
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  useEffect(()=> {
    const getUserData = JSON.parse(localStorage.getItem("userData"))
    if(getUserData && getUserData.userData.cart.length > 0){
      setCartIdState(getUserData.userData.cart[0]._id)
    }
  }, []);

  // const handleCurrentUser = (data) => {
  //   setCurrentUser(data);
  // }

    return (
      <div className="flex bg-[#F2ECE2] fixed top-0 right-0 left-0 z-[1000] items-center h-[100px]">
        <div className="flex w-[15%]">
          <a href="/">
            <img className='h-16 mx-4' src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1689738648/Ora/logo_hygqgk.png" alt="Ora Logo"/>
          </a>
        </div>

        <div className="flex w-[70%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div><Link className='m-4' to='/selfcare'>Selfcare</Link></div>
          <div><Link className='m-4' to='/bouquet'>Bouquet</Link></div>
          <div><Link className='m-4' to='/wedding'>Wedding</Link></div>
          <div><Link className='m-4' to='/about'>About</Link></div>
        </div>

        <div className="flex items-center w-[15%] justify-around">
          <Link 
            to={{ 
              pathname: cartIdState ?`/cart/${cartIdState}`: '/', 
              state: {cartId:cartIdState}
              }}>
            Cart
          </Link>

          <Navbar className="flex" expand="lg" >
            <div className="flex">
              <NavDropdown title={auth.isLoggedIn ? `Welcome` : "User"} id="navbarScrollingDropdown" >
                {auth.isLoggedIn? (
                  <>
                    {/* <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item> */}
                    <NavDropdown.Item href="/user/account">Account</NavDropdown.Item>
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
              </NavDropdown>
            </div>         
          </Navbar>
        </div>
      </div>
    );
}

export default MainNav;
