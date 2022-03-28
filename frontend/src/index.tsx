import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Userlist from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';





const router =
  <Router>
    <Routes>
    <Route path='/' element={<App />}/> 
    <Route path='/api/users' element={< Userlist/>} />
    <Route path='/api/user/save' element={<Register />} />
    </Routes>
  </Router>

ReactDOM.render(router,
  document.getElementById('root')
);

reportWebVitals();
