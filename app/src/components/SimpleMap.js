import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import SearchBox from './SearchBox'


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     center: {
        //         lat: 1.3521,
        //         lng: 103.8198
        //     },
        //     zoom: 12,


        //     // isLocationMarkerEnabled: false,

        // }
    }
    // static defaultProps = {
    //     center: {
    //         lat: 1.3521,
    //         lng: 103.8198
    //     },
    //     zoom: 12,
    // };

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



    // handleApiLoaded = (map, maps) => {
    //     // use map and maps objects
    // };

    _distanceToMouse = (markerPos, mousePos, markerProps) => {
        const x = markerPos.x;
        // because of marker non symmetric,
        // we transform it central point to measure distance from marker circle center
        // you can change distance function to any other distance measure
        const y = markerPos.y;

        // it's just a simple example, you can tweak distance function as you wish
        return Math.sqrt((x - mousePos.x) * (x - mousePos.x) + (y - mousePos.y) * (y - mousePos.y));
    }
    render() {
        let LTACarparkAvailabilityOfflineArr = this.props.LTACarparkAvailabilityOffline;

        let displayedLTACarparkAvailabilityOffline = LTACarparkAvailabilityOfflineArr.map((carpark) => <Marker lat={carpark.Location.split(" ")[0]} lng={carpark.Location.split(" ")[1]} name={carpark.CarParkID} color="red" />);

        //let mySearchbox = this.handleApiLoaded();


        return (
            <>
                {/* <div>
                    <SearchBox
                        placeholder={"123 anywhere st."}
                        onPlacesChanged={(place) => this.handleSearch(place)} />
                </div> */}
                <div style={{ height: 'calc(100vh - 54px)', width: '100%' }}>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
                        // defaultCenter={this.props.center}
                        // defaultZoom={this.props.zoom}
                        center={this.props.center}
                        zoom={this.props.zoom}
                        hoverDistance={15}
                        distanceToMouse={this._distanceToMouse}
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