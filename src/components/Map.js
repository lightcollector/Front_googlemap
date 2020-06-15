import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bootstrapURLKeys } from '../config/bootstrapURLKeys';
import { connect } from 'react-redux'
import Mark from './Mark'
import './styles.css';
import SearchBox from './SearchBox'

// Giving the component acces to the store state, which has the markers info
const mapStateToProps = (state) => {
  return {
    storedMarkers: state.markers
  }
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedMarkers: [],
      mapsApiLoaded: false,
      mapInstance: null,
      mapsapi: null,
    };

  }
  static defaultProps = {
    center: {
      lat: 41.40360,
      lng: 2.15377
    },
    zoom: 13
  };

  // loading the Google Maps Api to access the methods and variables
  // we will pass this map object and api to the children rendered, so everything works together in the same map
  apiLoaded = (map, maps) => {
      this.setState({
        mapsApiLoaded: true,
        mapInstance: map,
        mapsapi: maps,
      })
  };


  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => { this.apiLoaded(map, maps); }}
        >
          {this.props.storedMarkers.map((mark, index) => (
            <Mark
              key={index}
              name={mark.lat}
              lat={mark.lat}
              lng={mark.lng}
            />
          ))}
          {this.state.mapsApiLoaded && <SearchBox className="searchbox" map={this.state.mapInstance} mapsapi={this.state.mapsapi} />}
        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);






















