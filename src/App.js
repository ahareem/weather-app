import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// Import all the pages we will need to route between:-
import MainPage from "./pages";
import NotFoundPage from "./pages/404"
import WeatherPage from "./pages/weather"
import NewComponent from "./pages/directions"
/**
 * In the App Page, we've implemented react-router-dom to make use of basic 
 * routing/navigating within our application. Rather than having everything in one 
 * page, we've used React Router to create a multi-page app. 
 */
class App extends Component {
  render(){
    return(
      //The link tage is used in other pages within our code and the router tag will 
      //then render to the matching route:
    <Router>
      <Switch /**Switch looks through all its children routes and returns the 
       * appropriate one when the Link tag is used elsewhere */>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/weather" component={WeatherPage}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Route exact path="/directions" component={NewComponent}/>
        <Redirect to="/404"/**Redirects to this page in case of an illegal error*//> 
      </Switch>
    </Router>
    );
  }
}

export default App;