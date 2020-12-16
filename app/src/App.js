import React, { useEffect, useState } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap'
// import axios from 'axios'
// const axios = require("axios").default;
// import { useEffect } from "react";
import LTACarparkAvailabilityOffline from './data/LTA_DataMall_Carpark_Availability_Prettified_Combined_151220'
import { NavLink, Route, Switch } from 'react-router-dom'
import About from "./About";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox'
import Navigation from './components/Navigation'
// import MainMapBlock from './old-examples-master/web/flux/components/examples/x_main/main_map_block'






function App() {
  const [center, setCenter] = useState({
    lat: 1.3521,
    lng: 103.8198
  });
  const [zoom, setZoom] = useState(12);

  const handleSearch = (place) => {
    console.log("searched!");
    console.log("place", place);
    setCenter({
      lat: place[0].geometry.location.lat(),
      lng: place[0].geometry.location.lng()
    });
    setZoom(18);
    // this.setState({
    //   center: {
    //     lat: place[0].geometry.location.lat(),
    //     lng: place[0].geometry.location.lng()
    //   },
    //   zoom: 15
    // });
  }

  // Data.gov.sg test
  // useEffect(() => {
  //   const url = `https://api.data.gov.sg/v1/transport/carpark-availability`

  //   axios.get(url)
  //     .then(response => {
  //       console.log("response", response)
  //     })
  //     .catch((reason) => {
  //       console.log("Error", reason);
  //     });
  // }, [])


  return (
    <div className="App">
      <Navigation onSearchClick={handleSearch} />
      <Route path="/" exact>
        <SimpleMap LTACarparkAvailabilityOffline={LTACarparkAvailabilityOffline.value} center={center} zoom={zoom} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {/* <MainMapBlock /> */}
    </div>
  );
}

export default App;

// LTA Datamall API setup - revisit when I can do servers.

  // const url = `http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2`

  // const header = {
  //   headers: {
  //     AccountKey: process.env.REACT_APP_LTA_API_KEY,
  //     accept: 'application/json'
  //   }
  // }

  // axios.get(url, header)
  //   .then(response => {
  //     console.log("response", response)
  //   })
  //   .catch((reason) => {
  //     console.log("Error", reason);
  //   });
