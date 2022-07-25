import axios from "axios";
import React, { useEffect } from "react";
import requests from "../Navbar/requests/Requests";
import "./Banner.css";
function Banner (){

   useEffect(() => {fetchData()},[])
    async function fetchData(){
        const request = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=6b2c6d04eddf105bce8699c23fa6ae19&language=en-US");
        console.log(request);
    };

    return <div className="banner"
    style = {{
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7s1s4w1vUFzjUWTcNK8K50Y7HFw4RPyQVQ&usqp=CAU")',
        backgroundPosition:'center center',
        backgroundSize:'cover',
    }}>
        <div className="banner_contents">
            <h1> Movie Name</h1>
            <div className="banner_buttons">
                <button>Play</button>
                <button>More information</button>
            </div>
            <h3>Netflix, Inc. is an American subscription streaming service and production company.
                 Launched on August 29, 1997, it offers a film and television series library
                  through distribution deals as well as its own productions, known as Netflix Originals. </h3>
        </div>
    </div>
}
export default Banner;