/*** 
 * Below are a bunch of resources that were used in order to implement the Maps API.
 * The free API key was obtained from an open source platform [MapBox].
*/
// https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/
// https://blog.mapbox.com/mapbox-gl-directions-plugin-320694594eae
// https://levelup.gitconnected.com/integrating-reactjs-mapbox-and-mapbox-directions-a654086a97fc

import React from 'react';
import './directions.css'; //import the styling for the map container
import './reset.css'; //standard import for css styling
// Imports that were required to access the API
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

//my access token as obtained from MapBox
mapboxgl.accessToken = "pk.eyJ1IjoiYWhhcmVlbSIsImEiOiJja21ueGUzZzQwbTBlMnZwZ2w2ZHg0ODhiIn0.2aiEBWaWhoBX4-8mqwe-JA";

class NewComponent extends React.Component {
  componentDidMount() {

    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-0.118092, 51.509865], /*As a default, the longitude and latitude of
      *the map were set to New York, however I have ammended this to the co-ordinates
      correspoding to the City of London
      */
      zoom: 12 // zoom paramter indicates the magnification that the map shown when screen loads
    });

    //the code below here implements the directions componenent 'starting to destination route'
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric', //The unit parameter determines the measurement system used for calculating the distance between two points on the map.
      profile: 'mapbox/driving'
      /**The profile parameter adjusts the route, list of directions, and estimated time of arrival 
       * based on the user’s mode of transportation. Options for the profile parameter include 
       * “mapbox/driving”, “mapbox/walking”, and “mapbox/cycling”. The “mapbox/driving-traffic” 
       * extension incorporates past and present traffic data when recommending a driving route.  */
    });
    map.addControl(directions, 'top-left');
  }
  render() {
    require('./directions.css')
    return (/** External Style Sheets provided by the API to style the map and 
      the directions component. Also, I added a link to go back to the home page
      within the html a tag that directs the user the root page i.e. index.jsx */
      <div> 
        <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
        rel="stylesheet"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
	      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type="text/css"></link>
        <a href='/'>Back to Home</a> 
      <div 
        ref={el => (this.mapWrapper = el)} 
        className="mapWrapper" 
      />
      </div>
      
    );
  }
  
}

export default NewComponent;

























