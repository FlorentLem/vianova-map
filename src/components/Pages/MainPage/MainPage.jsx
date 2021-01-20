/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
// import stationList from '../../Elements/Map/data/stationsList.json';

// Import components and stylesheet //
import Map from '../../Elements/Map/Map';
import './MainPage.scss';

class MainPage extends React.Component {
  constructor() {
    super();
    // State for the markers and the selected marker
    this.state = {
      selectedMarker: null,
      marker: [],
      stationStatus: [],
      generateMap: true,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.setGenerateMap = this.setGenerateMap.bind(this);
  }

  // Retrieving data from the API
  async componentDidMount() {
    const res1 = await axios.get(
      'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
    );
    this.setState({ marker: res1.data.data.stations });
    const res2 = await axios.get(
      'https://gbfs.citibikenyc.com/gbfs/en/station_status.json'
    );
    this.setState({ stationStatus: res2.data.data.stations });
  }

  // When used select the marker data of the index paramaters
  setSelectedMarker(index) {
    const { marker } = this.state;
    this.setState({
      selectedMarker: {
        object: marker[index],
        id: index,
      },
    });
  }

  // Change the state to generate or not the map
  setGenerateMap() {
    const { generateMap } = this.state;
    this.setState({ generateMap: !generateMap });
  }

  render() {
    const { marker, selectedMarker, generateMap } = this.state;
    const { setSelectedMarker, setGenerateMap } = this;
    return (
      <Map
        generateMap={generateMap}
        setGenerateMap={setGenerateMap}
        selectedMarker={selectedMarker}
        stationList={marker}
        setSelectedMarker={setSelectedMarker}
      />
    );
  }
}

export default MainPage;
