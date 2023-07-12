import React, {useState, useEffect} from 'react';
import {Routes, Navigate, Route, useNavigate} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';
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



function App() {

//authentication states
  const [tokenState, setTokenState]= useState(null)
  const [isLoggedInState, setIsLoggedInState]= useState(null)
  const [userIdState, setUserIdState]= useState(null)
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
      <Route path="/bouquet" element={<Bouquet />} />
      <Route path="/selfcare" element={<Selfcare />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart/:id" element={<Cart />} />
    </Routes>
  );


  return (
    <AuthContext.Provider value={authcontextValue}>
      <div className="App">
        <header>
          <MainNav />
        </header>
            
        <main>
          {routes}
        </main>

        <Footer />       
      </div>
    </AuthContext.Provider>

  );
}

export default App;