import React from 'react'
import background from "../assets/bg.png";
import Navbar from '../components/NavBar';
import Footer from '../components/Footer'

const ContactScreen = () => {
    return (
    
        <div style={divStyle}>
     <Navbar />
    <div className="container my-12 mx-auto px-4 md:px-12" >

        <h1>ludnjhfgnkfg</h1>
      
   
 
    
     
    </div>
    <Footer/>
  
    </div>
   
  );
};



const divStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: 'noRepeat',
    //width: "100vw",
    //height: "100vh",
    backgroundImage: "url(" + background + ")",
  };
  

export default ContactScreen
