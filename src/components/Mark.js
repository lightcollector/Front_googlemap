import React, { Component } from 'react';
import Marker from 'google-map-react';


class Mark extends Component {
    constructor(props){
        super(props);
        this.state = {
            storedMarkers: []
        };
        this.updateMarkers = this.updateMarkers.bind(this);
    }

    updateMarkers() {        
        this.setState(
            {
                storedMarkers: this.props.markers
            }
        );
        console.log (this.state);
    }

    componentDidMount() {
        this.setState(
            {
                storedMarkers: this.props.markers
            }
        );
    }

    render() {
        return ( 
            // button for tries temporal purpouse
            //<button onClick={() => { this.updateMarkers() }}> botonsín </button>
            
            this.state.storedMarkers.map((mrk) => 
                <Marker
                    lat={mrk.lat}
                    lng={mrk.lng}
                /> 
            )
        );
    }
}

export default Mark;






















