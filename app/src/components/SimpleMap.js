import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SearchBox from './SearchBox'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 1.3521,
            lng: 103.8198
        },
        zoom: 12,
    };

    handleSearch() {
        console.log("searched!");
    }



    // handleApiLoaded = (map, maps) => {
    //     // use map and maps objects
    // };


    render() {
        let LTACarparkAvailabilityOfflineArr = this.props.LTACarparkAvailabilityOffline;

        let displayedLTACarparkAvailabilityOffline = LTACarparkAvailabilityOfflineArr.map((carpark) => <Marker lat={carpark.Location.split(" ")[0]} lng={carpark.Location.split(" ")[1]} name={carpark.CarParkID} color="red" />);

        //let mySearchbox = this.handleApiLoaded();

        return (
            <>
                <div>
                    <SearchBox
                        placeholder={"123 anywhere st."}
                        onPlacesChanged={this.handleSearch} />
                </div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    // yesIWantToUseGoogleMapApiInternals
                    // onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                    >

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
                    </GoogleMapReact>
                </div>
            </>
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