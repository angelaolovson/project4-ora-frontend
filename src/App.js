import React, {useState} from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';
import Listing from './pages/Listing';
import NewProperty from './pages/NewProperty';
import UpdateProperty from './pages/UpdateProperty';
import Host from './pages/Host';
import Profile from './pages/Profile';
import EachProperty from './pages/EachProperty';




function App() {
  const [currentUser, setCurrentUser] = useState('');

  const handleCurrentUser =(user) => {
    setCurrentUser(user);
  }
  
  let routes;


  routes = (
    <Routes>
        <Route exact={true} path="/" element={<Listing />} />
        <Route path="/listing/:id" element={<EachProperty />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/new" element={<NewProperty currentUser={currentUser}/>} />
        <Route path="/listing/:id/edit" element={<UpdateProperty/>} />
        <Route path="/user/:id" element = {<Host />} />
        {/* and more, not sure, will see */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );


  return (
    <div className="App">

      <header>
        <MainNav handleCurrentUser={handleCurrentUser}/>
      </header>
      <main>{routes}</main>
    </div>
  );
}

export default App;

