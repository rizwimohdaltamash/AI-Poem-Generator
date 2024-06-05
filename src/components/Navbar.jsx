
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Fa500Px } from "react-icons/fa";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import navIcon from '../images/navicon.jpg'; 

const MyNavbar = () => {
  return (
   
    <Navbar  data-bs-theme="dark"  bg="black">
        <Container>
        {/* <img 
            src={navIcon} 
            alt="MedSync Icon" 
            style={{ width: '30px', height: '30px', marginRight: '10px',borderRadius:"50%" }} 
          /> */}
          
          <Fa500Px style={{backgroundColor:"dark",color:"red",marginRight:"7px",fontSize:"2rem"}} />
          <Navbar.Brand href="#home" style={{color:"#bb0000"}}>AIPoem-Generator</Navbar.Brand>
          
            
          <Nav className="me-auto"></Nav>
           
         
         

          <Nav>

             {/* <Nav.Link href="/">FirstQ</Nav.Link> */}
             {/* <Nav.Link href="/second">SecondQ</Nav.Link> */}
 
             
            
            {/* <Nav.Link href="/poem">Poem</Nav.Link> */}
            
          </Nav>

        </Container>
      </Navbar>
  )
}

export default MyNavbar;
