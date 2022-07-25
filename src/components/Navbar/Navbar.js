import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar({ showSignInButton,logout,show }) {

  const navigate = useNavigate();
   const[dark,setDark]= useState(false);
   const transitionNavBar = ()=>{
      if(window.scrollY >100){
         setDark(true);
      }
         else{
            setDark(false);
         }
      
   };
   useEffect (()=> {
      window.addEventListener("scroll",transitionNavBar);
   
   return ()=> {
      // it is a cleanup function
      window.removeEventListener("scroll",transitionNavBar);
   };},[]);

   const goToSignInPage = () => {
    navigate("/sign-in");

   }


    return <div className={`navbar_container ${show && "navbar_color"} ${dark && "navbar_dark"}`}>
        <img className="navbar_logo" src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(14)(410).jpg" alt="Logo" />
        {/*<Link to='/sign-in'>
        <button className="navbar_button" >Sign In</button>
        </Link>*/}
     {
        showSignInButton === false ? (' '): ( <button className="navbar_button" onClick={goToSignInPage} >Sign In</button>
     )} 
       
       {
        logout && <p className="navbar_icons"><AccountCircleIcon /></p>
       }
    </div>;

}
export default  Navbar;