import React from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';
import Listing from './pages/Listing';
import Property from './pages/Property';
import NewProperty from './pages/NewProperty';
import UpdateProperty from './pages/UpdateProperty';
import Host from './pages/Host'
import Profile from './pages/Profile'


function App() {
  let routes;

  routes = (
    <Routes>
        <Route exact={true} path="/" element={<Listing />} />
        <Route path="/listing/:id" element={<Property />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/new" element={<NewProperty/>} />
        <Route path="/listing/:id/edit" element={<UpdateProperty/>} />
        <Route path="/user/:id" element = {<Host />} />
        {/* and more, not sure, will see */}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return (
    <div className="App">

      <header>
        <MainNav />
      </header>
      <main>{routes}</main>
    </div>
  );
}

export default App;

