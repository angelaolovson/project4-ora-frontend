import React, {useState, useEffect} from 'react';
import {Routes, Navigate, Route, useNavigate} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';
import Listing from './pages/Listing';
import NewProperty from './pages/NewProperty';
import UpdateProperty from './pages/UpdateProperty';
import Host from './pages/Host';
import Profile from './pages/Profile';
import EachProperty from './pages/EachProperty';
import {AuthContext} from './context/auth-context';
import Search from './pages/Search';



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
    //get login take from local storage when mount
    const localData = JSON.parse(localStorage.getItem('userData'))
    //if there is data in local storage, set login state
    if(localData){
      setTokenState(localData.token);
      setIsLoggedInState(true);
      setUserIdState(localData.userId);
      setUserDataState(localData.userData);
    }
  },[]);
  
  let routes = (
    <Routes>
        <Route exact={true} path="/" element={<Listing />} />
        <Route path="/listing/:id" element={<EachProperty />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/new" element={<NewProperty/>} />
        <Route path="/listing/:id/edit" element={<UpdateProperty/>} />
        <Route path="/user/:id" element = {<Host />} />
        <Route path="/listing/search" element = {<Search />} />
        {/* and more, not sure, will see */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );


  return (
    <AuthContext.Provider value={authcontextValue}>
      <div className="App">
          <header>
            <MainNav/>
          </header>
          <main>{routes}</main>
      </div>
    </AuthContext.Provider>

  );
}

export default App;