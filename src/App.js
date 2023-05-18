import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './pages/Index';
import Show from './pages/Show';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Host from './pages/Host';
import MainNav from './components/Nav/MainNav';

import './App.css';

function App() {
  let routes;

  routes = (
    <Router>
      <Switch>
        <Route exact={true} path="/" element={<Index/>} />
        <Route path="/listing/:id" element={<Show />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/listing/new" element={<Create />} />
        <Route path="/listing/:id/edit" element={<Edit />} />
        <Route path="/user/:id" element = {<Host />} />
        {/* and more, not sure, will see */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Switch>  
    </Router>
  );

  return (
    <div className="App">
      App.js
      <header>
        <MainNav />
      </header>
      <main>{routes}</main>
    </div>
  );
}

export default App;

