import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './Marker.css';

const Marker = (props) => {
    const { color, carparkInfo, $hover } = props;

    if (!carparkInfo) {
        return (<div></div>)
    }

    const handleClick = () => {
        console.log(`You clicked on ${carparkInfo.CarParkID}`);
    };

    console.log("MARKER IS RENDERING!!! ");

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

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <div className={$hover ? "marker hover" : "marker"}
                onClick={handleClick}
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={carparkInfo.CarParkID}
            >
            </div>
        </OverlayTrigger>

    );
};

export default Marker;

