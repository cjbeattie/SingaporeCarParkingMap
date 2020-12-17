import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class SimpleMap extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getMarkers() {
        console.log("getMarkers() in SimpleMap.js called")
        let displayedLTACarparkAvailabilityOffline = this.props.LTACarparkAvailabilityOffline.map(
            (carpark) => <Marker
                lat={carpark.Location.split(" ")[0]}
                lng={carpark.Location.split(" ")[1]}
                color="red"
                carparkInfo={carpark}
                key={carpark.CarParkID + carpark.LotType} />);

        return displayedLTACarparkAvailabilityOffline;
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