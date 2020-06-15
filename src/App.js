import React from 'react';
import Map from './components/Map.js';
import SearchBox from './components/SearchBox.js';
import Mark from './components/Mark'
import { useSelector } from 'react-redux'

function App() {
  
  // getting markers from state
  const storedMarkers = [useSelector(state => state.markers)];
  console.log(storedMarkers);

  return (
    <div className="App">
      <div >
      <Map />
      <Mark markers={storedMarkers}/>
      </div>
    </div>

    
  );
}

export default App;
