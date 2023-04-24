import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './home';
import Query1 from './Query1';
import Query2 from './Query2';
import Query3 from './Query3';
import Query4 from './Query4';
import Query5 from './Query5';

const Main = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/query1" exact element={<Query1/>}/> 
          <Route path="/query2" exact element={<Query2/>}/> 
          <Route path="/query3" exact element={<Query3/>}/> 
          <Route path="/query4" exact element={<Query4/>}/> 
          <Route path="/query5" exact element={<Query5/>}/>

          
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
