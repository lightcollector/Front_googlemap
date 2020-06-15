import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bootstrapURLKeys } from '../config/bootstrapURLKeys';
import Marker from './Mark'
//const ComponentForMapRender = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.40360,
      lng: 2.15377
    },
    zoom: 13
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <ComponentForMapRender
            lat={41.40360}
            lng={2.15377}
            text=""
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;






















