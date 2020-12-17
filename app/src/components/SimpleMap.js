import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import CenterMarker from './CenterMarker';
import { isPointWithinRadius } from 'geolib';

class SimpleMap extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getMarkers() {
        if (!this.props.HDB_AvailabilityDataAvailable) {
            return;
        }

        console.log("getMarkers() in SimpleMap.js called")

        const displayedCarparks = [];
        let displayedCarparksOutput = [];
        let displayedLTACarparkAvailabilityOffline = this.props.LTACarparkAvailabilityOffline;


        // LTA Carparks
        for (const carpark of displayedLTACarparkAvailabilityOffline) {
            if (isPointWithinRadius(
                { latitude: carpark.Location.split(" ")[0], longitude: carpark.Location.split(" ")[1] }, // carpark coordinates
                { latitude: this.props.center.lat, longitude: this.props.center.lng }, // center coordinates
                1000 //checking radius in metres
            )) {
                for (const availabilityData of this.props.HDB_CarparkAvailabilityData) {
                    if (carpark.CarParkID === availabilityData.carpark_number) {
                        carpark["availableLots"] = availabilityData.carpark_info[0].lots_available;
                        carpark["numLots"] = availabilityData.carpark_info[0].total_lots;
                        const availableLots = parseInt(carpark.availableLots);
                        if (availableLots >= 50) {
                            carpark["color"] = "green";
                        } else if (availableLots >= 10 && availableLots < 50) {
                            carpark["color"] = "#edac2b";
                        } else if (availableLots > 0 && availableLots < 10) {
                            carpark["color"] = "#ed622b";
                        } else if (availableLots === 0) {
                            carpark["color"] = "red";
                        } else {
                            console.log("Error in calculating colour for " + carpark.CarParkID)
                        }
                    }
                }

                displayedCarparks.push(carpark);
            }
        }


        console.log(displayedCarparks);

        // let displayedLTACarparkAvailabilityOffline = this.props.LTACarparkAvailabilityOffline.map(
        displayedCarparksOutput = displayedCarparks.map(
            (carpark) => <Marker
                lat={carpark.Location.split(" ")[0]}
                lng={carpark.Location.split(" ")[1]}
                color={carpark.color ? carpark.color : "gray"}
                availableLots={carpark.availableLots}
                numLots={carpark.numLots}
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
                        <CenterMarker
                            lat={this.props.center.lat}
                            lng={this.props.center.lng}
                            showCenterMarker={this.props.showCenterMarker}
                        />
                        {this.getMarkers()}
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}

export default SimpleMap;