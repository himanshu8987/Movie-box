import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SignIn.css";
import SignInBody from "../../components/SignInBody/SignInBody";
function SignIn(){
    return <div> 
        <Navbar showSignInButton = {false} show = {true}/>
        <SignInBody />

    </div>;
}
export default SignIn;