import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './Marker.css';
import { pure } from 'recompose';


const CenterMarker = (props) => {


    return (
        <div className="centerMarker"
        >
            {/* <span className="circleText">
                    {availableLots ? availableLots : ""}
                </span> */}
        </div>


    );
};

export default pure(CenterMarker);

