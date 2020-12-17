import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { isPointWithinRadius } from 'geolib';

class SimpleMap extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getMarkers() {
        console.log("getMarkers() in SimpleMap.js called")

        const displayedCarparks = [];
        let displayedCarparksOutput = [];
        let displayedLTACarparkAvailabilityOffline = this.props.LTACarparkAvailabilityOffline;

        for (const carpark of displayedLTACarparkAvailabilityOffline) {
            if (isPointWithinRadius(
                { latitude: carpark.Location.split(" ")[0], longitude: carpark.Location.split(" ")[1] }, // carpark coordinates
                { latitude: this.props.center.lat, longitude: this.props.center.lng }, // center coordinates
                1000 //checking radius in metres
            )) {
                displayedCarparks.push(carpark);
                // console.log("carpark displayed: ", carpark)
            }
        }

        console.log(displayedCarparks);

        // let displayedLTACarparkAvailabilityOffline = this.props.LTACarparkAvailabilityOffline.map(
        displayedCarparksOutput = displayedCarparks.map(
            (carpark) => <Marker
                lat={carpark.Location.split(" ")[0]}
                lng={carpark.Location.split(" ")[1]}
                color="red"
                carparkInfo={carpark}
                key={carpark.CarParkID + carpark.LotType} />);

        return displayedCarparksOutput;
    }


    render() {
        console.log("SIMPLE MAP IS RENDERING!!!!")


        return (
            <>
                <div style={{ height: 'calc(100vh - 54px)', width: '100%' }}>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
                        center={this.props.center}
                        zoom={this.props.zoom}
                    // hoverDistance={15}
                    // distanceToMouse={this._distanceToMouse}
                    >
                        {/* <Marker
                            lat={1.3521}
                            lng={103.8198}
                            name="My Marker"
                            color="blue"
                        /> */}
                        {this.getMarkers()}
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}

export default SimpleMap;