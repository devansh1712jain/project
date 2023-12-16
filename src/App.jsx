import React, {useState} from 'react';
import './App.css';
import ComponentA from './ComponentA';
import FuntionalComponent from './ComponentA/partial/FuntionalComponent';
import Users from './Users';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from './CustomNavbar';
import Login from './Login';
import Signup from './Signup';
import Routing from './Routing';

function App() {
// const greeting = 'Learning React';

//  const [greeting, setGreeting] = useState('Learning Hooks!!!');
  const [showComponent, setshowComponent] = useState(true);
  return (
    <>
      <BrowserRouter>
      <MyNavbar/>
        <Routes>
          <Route path =''  element= {showComponent?<Users/>:<></>}/>
          <Route path ='/routing'  element= {<Routing/>}/>
          <Route path='/user'>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
