import React from "react";
import {Link} from "react-router-dom";
// icons code taken from: https://codepen.io/joshbader/pen/EjXgqr
// along with the css styling under weathericons.css
import './stylesheet.css';
import './weathericons.css';

//Home Page Code
const MainPage = () => {
    return(
        <div className="app">
        <h1><Link to="/weather">Get Weather</Link></h1> 
        {/* The code above routes to the weather.jsx page */}
        <h1><a href="/directions">Get Directions</a></h1>
        {/* The code above routess to the directions.jsx page */}
            <div class="icon sun-shower">
            <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
            <div class="rain"></div>
            </div>

            <div class="icon thunder-storm">
            <div class="cloud"></div>
            <div class="lightning">
                <div class="bolt"></div>
                <div class="bolt"></div>
            </div>
            </div>

            <div class="icon cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
            </div>

            <div class="icon flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
            </div>

            <div class="icon sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
            </div>

            <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
            </div>
        </div>
    );
};

export default MainPage;
