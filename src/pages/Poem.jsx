import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import SpinnerLoader from './SpinnerLoader';
import poemback from './poemback.png';

const Poem = () => {
  const [poem, setPoem] = useState('');
  const [error, setError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { name, favoriteWord } = location.state || {};

  const [loading,setLoading]=useState(false);

  
  
  
  useEffect(() => {
    

    const generatePoem = async () => {
      try {
        const response = await axios({
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDeshisrCmm1NHqaRTndP_HoU7FESLoxgw",
          method: "post",
          data: { contents: [{ parts: [{ text: `Write a poem of 100 words with  ${favoriteWord } and ${name}`}] }] }
        });

        setPoem(response.data.candidates[0].content.parts[0].text);
      } catch (err) {
        setError('Failed to generate poem');
       
      }
    };

    if (name,favoriteWord) {
      generatePoem();
    }
  }, [name,favoriteWord]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
   
   
    
    <div className="centered-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",backgroundImage: `url(${poemback})`}}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {poem ? (
        <div style={{border:"2px solid #FFAAA3",padding:"20px",borderRadius:"20px",backgroundColor:"#250A1E80",width:"70%"}}>
          <h2 style={{textAlign:"center",color:"#FFAAA3", borderRadius:"10px"}}>Your Poem</h2>
          <p style={{color:"#FFAAA3",textAlign:"center"}}>{poem}</p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleBackToHome} style={{ marginTop: "20px", borderRadius: "10px", padding: "10px", backgroundColor: "black", color: "#FFAAA3" }}>Back to Home</button>
          </div>
        </div>
      ) : (
      
        // <p>Generating your poem...</p>
        <SpinnerLoader/>
      )}
    </div>


   
  );
};

export default Poem;
