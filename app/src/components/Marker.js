import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './Marker.css';
import { pure } from 'recompose';


const Marker = (props) => {
    const { color, carparkInfo, availableLots, numLots, $hover } = props;

    // if (!carparkInfo) {
    //     return (<div></div>)
    // }

    const handleClick = () => {
        console.log(`You clicked on ${carparkInfo.CarParkID}`);
    };

    console.log("MARKER IS RENDERING!!! ");

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{carparkInfo.Development}</Popover.Title>
            <Popover.Content>
                <strong>ID: </strong>{carparkInfo.CarParkID}<br />
                <strong>Total Number of Lots: </strong>{numLots ? numLots : carparkInfo.AvailableLots}<br />
                {availableLots ? <><strong>Number of Available Lots: </strong>{availableLots}</> : <><strong>Number of Available Lots: </strong>Unavailable</>}
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

export default pure(Marker);

