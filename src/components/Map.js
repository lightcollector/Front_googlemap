import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const ComponentForMapRender = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAd3rxOMhtY0AO42ZYCG1u-jOcIiiwiY68" }}
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
  




















  
