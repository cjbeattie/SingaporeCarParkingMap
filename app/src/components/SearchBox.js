import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Loader } from '@googlemaps/js-api-loader';


// const loader = new Loader({
//   apiKey: process.env.REACT_APP_GMP_API_KEY,
//   version: "weekly",
//   libraries: ["places"]
// });

export default class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }
  render() {
    return <input ref="input" {...this.props} type="text" />;
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    window.google.maps.event.clearInstanceListeners(this.searchBox);
  }
}

