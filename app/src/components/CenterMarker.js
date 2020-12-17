import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './Marker.css';
import { pure } from 'recompose';


const CenterMarker = (props) => {

    return (props.showCenterMarker ? <div className="centerMarker"></div> : <div></div>);
};

export default pure(CenterMarker);

