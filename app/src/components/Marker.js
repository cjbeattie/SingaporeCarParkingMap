// from https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4

import React from 'react';
import './Marker.css';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Marker = (props) => {
    const { color, carparkInfo, name, text, tooltip, $hover } = props;

    if (!carparkInfo) {
        return (<div></div>)
    }

    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    const constructTooltip = () => {
        return (
            "hi"
        );

    }

    //console.log("MARKER IS RENDERING!!! ", carparkInfo.CarParkID);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{carparkInfo.CarParkID}</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging. right?
                {carparkInfo.Development}
            </Popover.Content>
        </Popover>
        // <Popover id="popover-basic">
        //     <Popover.Title as="h3">CARPARK INFO</Popover.Title>
        //     <Popover.Content>
        //         And here's some <strong>amazing</strong> content. It's very engaging. right?
        //     </Popover.Content>
        // </Popover>
    );


    // const greatPlaceStyleHover = { backgroundColor: "green !important" };
    // const greatPlaceStyle = { backgroundColor: "blue !important" };

    // const style = props.$hover ? greatPlaceStyleHover : greatPlaceStyle;
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>

            <div className={$hover ? "marker hover" : "marker"}
                onClick={handleClick}
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={constructTooltip()}
            >
                {/* <span className="circleText" title={tooltip}>
                {text}
            </span> */}
            </div>
        </OverlayTrigger>

    );
};

export default Marker;

