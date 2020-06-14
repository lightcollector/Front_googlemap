import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bootstrapURLKeys } from '../config/bootstrapURLKeys';

const ComponentForMapRender = ({ text }) => <div>{text}</div>;

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
          bootstrapURLKeys={ bootstrapURLKeys }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <ComponentForMapRender
            lat={41.40360}
            lng={2.15377}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
  




















  
