import {Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';

// Component
import MyNavbar from './components/Navbar';


// Pages
import Firstq from './pages/Firstq';
import Secondq from './pages/Secondq';
import Poem from './pages/Poem';

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  
  

  return (
    <div>
    <MyNavbar/>

    <Routes>
     <Route path="/" element={<Firstq/>}/>
     <Route path="/second" element={<Secondq/>}/> 


    

    <Route path="/poem" element={<Poem/>}/>

     
    
    </Routes>

    </div>
    
  );
}

export default App;
