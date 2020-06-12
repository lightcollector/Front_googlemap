import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }
  
  
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://maps.googleapis.com/maps/api/js?v=3&sensor=false&amp;libraries=places&key=AIzaSyAd3rxOMhtY0AO42ZYCG1u-jOcIiiwiY68";
    script.async = true;
    document.body.appendChild(script);

    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new GoogleMapReact.maps.places.SearchBox(input);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    GoogleMapReact.maps.event.removeListener(this.searchBoxListener);
  }

  render() {
    return <input ref="input" placeholder={this.props.placeholder} type="text"/>;
  } 

}

export default SearchBox;