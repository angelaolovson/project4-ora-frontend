import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import {AuthContext} from './context/auth-context';
import Home from './pages/Home';
import About from './pages/About';
import Wedding from './pages/Wedding';
import Bouquet from './pages/Bouquet';
import Selfcare from './pages/Selfcare';
import Products from './pages/Products';
import Footer from './components/Footer';
import EachProduct from './pages/EachProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import {CartProvider} from './context/CartContext';
import Account from './pages/Account';
import UpdateProduct from './components/Account/UpdateProduct';
import OrderReceipt from './pages/OrderReceipt ';
import WeddingGallery from './components/Wedding/WeddingGallery';
// import WeddingMenu from './components/Wedding/WeddingMenu';
import ServiceGuideline from './components/Wedding/ServiceGuideline';
import EachCouple from './components/Wedding/EachCouple';


function App() {

//authentication states
  const [tokenState, setTokenState]= useState(null)
  const [isLoggedInState, setIsLoggedInState]= useState(null)
  const [userIdState, setUserIdState]= useState(null)
  const [userRoleState, setUserRoleState]= useState(null)
  const [userDataState, setUserDataState]= useState(null)
  const navigate = useNavigate();

//handle login function
  const loginHandle = (userId, token, userData) => {
    setTokenState(token);
    setIsLoggedInState(true);
    setUserIdState(userId);
    setUserDataState(userData);
    localStorage.setItem("userData",JSON.stringify({
      userId,
      token,
      userData,
      // cart
    }))
  }

//handle logout function
  const logoutHandle = () => {
    setTokenState(null);
    setIsLoggedInState(false);
    setUserIdState(null);
    setUserDataState(false);
    localStorage.removeItem("userData");
    navigate('/')
  }

//set authentication global value
  const authcontextValue = {
    isLoggedIn: !!tokenState,
    token: tokenState,
    userId: userIdState,
    login: loginHandle,
    logout: logoutHandle
  }

  useEffect(() => {
    //get login take from local storage when mount!(Edit from main)
    const localData = JSON.parse(localStorage.getItem('userData'))
    //if there is data in local storage, set login state.
    if(localData){
      setTokenState(localData.token);
      setIsLoggedInState(true);
      setUserIdState(localData.userId);
      setUserDataState(localData.userData);
    }
  },[]);
  
  let routes = (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/bouquet/:subCategory" element={<Products />} />
      <Route path="/selfcare/:subCategory" element={<Products />} />
      <Route path="/product/:id" element={<EachProduct />} />
      <Route path="/product/:id/edit" element={<UpdateProduct />} />
      <Route path="/bouquet" element={<Bouquet />} />
      <Route path="/selfcare" element={<Selfcare />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/order/:id" element={<OrderReceipt />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/user/account" element={<Account />} />
      <Route path="/wedding" element={<Wedding />} /> 
      <Route path="/weddinggallery" element={<WeddingGallery />} />
      <Route path="/weddinggallery/:id" element={<EachCouple />} />
      <Route path="/serviceguideline" element={<ServiceGuideline />} />
    </Routes>
  );


  return (
    <AuthContext.Provider value={authcontextValue}>
      <CartProvider>
        <div className="bg-[#f5f1ea] font-montserrat">
          <header>
            <MainNav />
          </header>
              
          <main className='flex flex-col mt-[100px]'>
            {routes}
          </main>

          <Footer />       
        </div>
      </CartProvider>
    </AuthContext.Provider>

  );
}

export default App;