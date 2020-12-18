import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import SimpleMap from './components/SimpleMap'
import About from "./About";
import LTACarparkAvailabilityOffline from './data/LTA_DataMall_Carpark_Availability_Prettified_Combined_151220'
// import dataGovSg_hdb_carpark_information from './data/dataGovSg_hdb_carpark_information'

function App() {
  const [center, setCenter] = useState({
    lat: 1.3521,
    lng: 103.8198
  });
  const [zoom, setZoom] = useState(12);
  const [HDB_CarparkAvailabilityData, setHDB_CarparkAvailabilityData] = useState(null);
  const [HDB_AvailabilityDataAvailable, setHDB_AvailabilityDataAvailable] = useState(false);
  const [showCenterMarker, setShowCenterMarker] = useState(false);

  const getRealtimeData = () => {
    const url = `https://api.data.gov.sg/v1/transport/carpark-availability`

    axios.get(url)
      .then(response => {
        console.log("carpark availability response:", response.data.items[0].carpark_data)
        setHDB_CarparkAvailabilityData(response.data.items[0].carpark_data);
        setHDB_AvailabilityDataAvailable(true);
      })
      .catch((reason) => {
        console.log("Error", reason);
      });

    console.log("Realtime data updated!");
  }
  // Data.gov.sg Carpark Availability Data
  useEffect(() => {
    getRealtimeData();
    // const url = `https://api.data.gov.sg/v1/transport/carpark-availability`

    // axios.get(url)
    //   .then(response => {
    //     console.log("carpark availability response:", response.data.items[0].carpark_data)
    //     setHDB_CarparkAvailabilityData(response.data.items[0].carpark_data);
    //     setHDB_AvailabilityDataAvailable(true);
    //   })
    //   .catch((reason) => {
    //     console.log("Error", reason);
    //   });
  }, [])

  const handleSearchFn = (place) => {
    getRealtimeData();
    console.log("handleSearchFn() in App.js called");
    console.log("place", place);
    setCenter({
      lat: place[0].geometry.location.lat(),
      lng: place[0].geometry.location.lng()
    });
    setZoom(16);
    setShowCenterMarker(true);
  }

  const handleBrandClick = () => {
    console.log("Yay brand clicked in a function!")
    setCenter({
      lat: 1.3521,
      lng: 103.8198
    })
    setZoom(12);
    setShowCenterMarker(false);
  }

  const filterOnlyCars = () => {
    let tempArr = [];
    for (const carpark of LTACarparkAvailabilityOffline.value) {
      if (carpark.LotType === "C") {
        tempArr.push(carpark);
      }
    }
    return tempArr;
  }

  return (
    <div className="App">
      <Navigation handleSearchFn={handleSearchFn} handleBrandClick={handleBrandClick} />
      <Route path="/" exact>
        <SimpleMap
          // LTACarparkAvailabilityOffline={LTACarparkAvailabilityOffline.value}
          LTACarparkAvailabilityOffline={filterOnlyCars()}
          HDB_CarparkAvailabilityData={HDB_CarparkAvailabilityData}
          HDB_AvailabilityDataAvailable={HDB_AvailabilityDataAvailable}
          center={center}
          zoom={zoom}
          showCenterMarker={showCenterMarker} />

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
