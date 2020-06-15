import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import store from '../redux/store'
import { addMarker } from '../redux/actions'

class SearchBox extends Component {
  static propTypes = {
    mapsapi: PropTypes.shape({
      places: PropTypes.shape({
        SearchBox: PropTypes.func,
      }),
      event: PropTypes.shape({
        clearInstanceListeners: PropTypes.func,
      }),
    }).isRequired,
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Search...',
    onPlacesChanged: null,
  };

  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  componentDidMount() {
    const {
      mapsapi: { places },
    } = this.props;

    this.searchBox = new places.SearchBox(this.searchInput.current);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    const {
      mapsapi: { event },
    } = this.props;

    event.clearInstanceListeners(this.searchBox);
  }



  onPlacesChanged = ({ map, addplace } = this.props) => {
    
    //get info from the selected place by the user
    const place = this.searchBox.getPlaces();
    if (place.length !== 0) {
      // centering the map's view on the selected place
      if (place[0].geometry.viewport) {
        map.fitBounds(place[0].geometry.viewport);
        map.setCenter(place[0].geometry.location);
        map.setZoom(13);
      } else {
        map.setCenter(place[0].geometry.location);
        map.setZoom(12);
      }

      let markerToAdd = {
        name: place[0].name,
        lat: place[0].geometry.location.lat(),
        lng: place[0].geometry.location.lng()
      }

      //console.log(place[0].geometry.decodePath);

      store.dispatch(addMarker(markerToAdd));
  }
    this.clearSearchBox();
    
  };

  clearSearchBox() {
    this.searchBox.value = '';
    document.getElementsByTagName('input').value = '';
  }

  render() {
    const { placeholder } = this.props;

    return (
      <input
        ref={this.searchInput}
        placeholder={placeholder}
        type="text"
      />
    );
  }
}

export default SearchBox;