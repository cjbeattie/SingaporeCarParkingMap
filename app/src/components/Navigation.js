import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox'
import { NavLink, Route, Switch } from 'react-router-dom'



class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    // handleSearch(place) {
    //     console.log("searched!");
    //     console.log(place);
    //     this.setState({
    //         center: {
    //             lat: place[0].geometry.location.lat(),
    //             lng: place[0].geometry.location.lng()
    //         },
    //         zoom: 15
    //     });
    // }

    render() {
        return (
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="#home">Singapore Car Parking Map</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" className="nav-link">Map</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        {/* <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        <SearchBox
                            placeholder={"Enter address"}
                            onPlacesChanged={(place) => this.props.onSearchClick(place)}
                            classname="mr-sm-2" />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;