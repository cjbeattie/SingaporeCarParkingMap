import React, { useState } from 'react';
import { Route } from 'react-router-dom'
// import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import SimpleMap from './components/SimpleMap'
import About from "./About";
import LTACarparkAvailabilityOffline from './data/LTA_DataMall_Carpark_Availability_Prettified_Combined_151220'

function App() {
  const [center, setCenter] = useState({
    lat: 1.3521,
    lng: 103.8198
  });
  const [zoom, setZoom] = useState(12);

  const handleSearchFn = (place) => {
    console.log("searched!");
    console.log("place", place);
    setCenter({
      lat: place[0].geometry.location.lat(),
      lng: place[0].geometry.location.lng()
    });
    setZoom(18);
  }

  return (
    <div className="App">
      <Navigation handleSearchFn={handleSearchFn} />
      <Route path="/" exact>
        <SimpleMap LTACarparkAvailabilityOffline={LTACarparkAvailabilityOffline.value} center={center} zoom={zoom} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;


// Data.gov.sg test - Put in the App() above the return
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
