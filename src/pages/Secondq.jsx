import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import poemback from './poemback.png';

const Secondq = () => {
  const [favoriteWord, setFavoriteWord] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const handleNext = () => {
    navigate('/poem', { state: { name, favoriteWord } });
  };

  return (
    <div className="centered-container" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundImage: `url(${poemback})`}}>
      <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} style={{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid #FFAAA3",borderRadius:"20px",backgroundColor:"#250A1E80",padding:"10px"}}>
        <div>
          <label style={{margin:"10px"}}>
            <h3 style={{color:"#FFAAA3",textAlign:"center"}}> Your favorite Word?</h3>
           
            <br />
            <input
               style={{width:"641px",height:"50px",borderRadius:"22px"}}
              type="text"
              placeholder="Enter your favourite word"
              value={favoriteWord}
              onChange={(e) => setFavoriteWord(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" style={{marginBottom:"10px",borderRadius:"20px",width:"641px",backgroundColor:"black"}}>Generate Poem</button>
      </form>
    </div>
  );
};

export default Secondq;
