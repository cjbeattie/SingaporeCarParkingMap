// from https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4

import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name, $hover } = props;

    // handleClick = () => {
    //     console.log(`You clicked on ${tooltip}`);
    // };

    // const greatPlaceStyleHover = { backgroundColor: "green !important" };
    // const greatPlaceStyle = { backgroundColor: "blue !important" };

    // const style = props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
        <div className="marker"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
        />
    );
};

export default Marker;

