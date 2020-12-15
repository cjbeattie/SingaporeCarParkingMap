import './App.css';
import SimpleMap from './components/SimpleMap'
import axios from 'axios'
// const axios = require("axios").default;
import { useEffect } from "react";

function App() {


  useEffect(() => {
    const url = `https://api.data.gov.sg/v1/transport/carpark-availability`

    axios.get(url)
      .then(response => {
        console.log("response", response)
      })
      .catch((reason) => {
        console.log("Error", reason);
      });
  }, [])


  return (
    <div className="App">
      <SimpleMap />
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
