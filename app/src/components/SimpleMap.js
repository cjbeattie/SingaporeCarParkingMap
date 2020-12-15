import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SearchBox from './SearchBox'


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 1.3521,
            lng: 103.8198
        },
        zoom: 12,
    };
    // this.state = { searchbox: null };



    handleSearch(placesResult) {
        console.log(placesResult[0]);

        //TOOD: Reload map and zoom 
    }

    // handleApiLoaded = (map, maps) => {
    //     // use map and maps objects
    //     componentDidMount() {
    //         this.setState({
    //             searchbox: <SearchBox
    //                 placeholder={"123 anywhere st."}
    //                 onPlacesChanged={this.handleSearch} />
    //         })
    //     }

    // };


    render() {
        let LTACarparkAvailabilityOfflineArr = this.props.LTACarparkAvailabilityOffline;

        let displayedLTACarparkAvailabilityOffline = LTACarparkAvailabilityOfflineArr.map((carpark) => <Marker lat={carpark.Location.split(" ")[0]} lng={carpark.Location.split(" ")[1]} name={carpark.CarParkID} color="red" />);

        //let mySearchbox = this.handleApiLoaded();

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                // yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}

                >
                    <SearchBox
                        placeholder={"123 anywhere st."}
                        onPlacesChanged={this.handleSearch} />
                    {/* <AnyReactComponent
                        lat={1.3521}
                        lng={103.8198}
                        text="My Marker"
                    /> */}
                    <Marker
                        lat={1.3521}
                        lng={103.8198}
                        name="My Marker"
                        color="blue"
                    />
                    {displayedLTACarparkAvailabilityOffline}
                    {/* {this.state.searchbox} */}

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;

// ...

// const handleApiLoaded = (map, maps) => {
//     // use map and maps objects
// };

// ...

// <GoogleMapReact
//     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//     defaultCenter={this.props.center}
//     defaultZoom={this.props.zoom}
//     yesIWantToUseGoogleMapApiInternals
//     onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
// >
//     <AnyReactComponent
//         lat={59.955413}
//         lng={30.337844}
//         text="My Marker"
//     />
// </GoogleMapReact>