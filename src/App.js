import React from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import MainNav from './components/Nav/MainNav';
import './App.css';
import Show from './pages/Show';
import Profile from './pages/Profile';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Host from './pages/Host';
import Index from './pages/Index';

function App() {
  let routes;

  routes = (
    <Routes>
        <Route exact={true} path="/" element={<Index/>} />
        <Route path="/listing/:id" element={<Show />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/new" element={<Create/>} />
        <Route path="/listing/:id/edit" element={<Edit/>} />
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
      <main>{Routes}</main>
    </div>
  );
}

export default App;

