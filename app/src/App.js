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






function App() {
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
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">Singapore Car Parking Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">Map</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <SearchBox
              placeholder={"123 anywhere st."}
              onPlacesChanged={(place) => this.handleSearch(place)} />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact>
        <SimpleMap LTACarparkAvailabilityOffline={LTACarparkAvailabilityOffline.value} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
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
