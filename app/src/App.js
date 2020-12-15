import './App.css';
import SimpleMap from './components/SimpleMap'
import axios from 'axios'
// const axios = require("axios").default;
import { useEffect } from "react";
import LTACarparkAvailabilityOffline from './data/LTA_DataMall_Carpark_Availability_Prettified_Combined_151220'
// import { Loader } from '@googlemaps/js-api-loader';

function App() {


  // const loader = new Loader({
  //   apiKey: process.env.REACT_APP_GMP_API_KEY,
  //   version: "weekly",
  //   libraries: ["places"]
  // });

  // const mapOptions = {
  //   // center: {
  //   //   lat: 0,
  //   //   lng: 0
  //   },
  //   zoom: 4
  // };


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
      <SimpleMap LTACarparkAvailabilityOffline={LTACarparkAvailabilityOffline.value} />
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
