import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 1.3521,
            lng: 103.8198
        },
        zoom: 12
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GMP_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
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
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;