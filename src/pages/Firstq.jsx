import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import poemback from './poemback.png';

const Firstq = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/second', { state: { name } });
  };

  return (
    
        <div  className="centered-container"   style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundImage: `url(${poemback})` }}>
      <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} style={{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid #FFAAA3",borderRadius:"20px",backgroundColor:"#250A1E80",padding:"10px"}}>
        <div >
          <label style={{margin:"10px"}}>
            <h3 style={{color:"#FFAAA3",textAlign:"center"}}>What is your Name?</h3>
            
            <br />
            <input
              style={{width:"641px",height:"50px",borderRadius:"22px"}}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label >
        </div>
        <button type="submit" style={{marginBottom:"10px",borderRadius:"20px",width:"641px",backgroundColor:"black"}}>Next</button>
      </form>
    </div>
   

    
  );
};

export default Firstq;
