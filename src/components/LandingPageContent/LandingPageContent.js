import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageContent.css";
function LandingPageContent (){
    return <div className="landingpagecontent_container"> 
    <p className="landingpagecontent_title"> Unlimited films,Tv Programmes and more.
    </p>
    <p className="landingpagecontent_subtitle">Watch from anywhere. Entertainment at anytime</p>
    <p className="landingpagecontent_description">Ready to Watch ? Enter your email to create or restart your membership.{" "}</p>

    <div className="landingpagecontent_input">
        <input type='text'/>
        <Link to = "/sign-in">
             <button className="ladingpagecontent_button">Get Started</button>
        </Link>
       
    </div>
    </div>

}
export default LandingPageContent;