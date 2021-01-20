import React from 'react';
import axios from 'axios';

// Import components and stylesheet //
import Map from '../../Elements/Map/Map';
import './MainPage.scss';

class MainPage extends React.Component {
  constructor() {
    super();
    // State for the markers and the selected marker
    this.state = {
      selectedStation: null,
      stationList: [],
      stationStatus: [],
      generateMap: true,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
    this.setGenerateMap = this.setGenerateMap.bind(this);
    this.deselectMarker = this.deselectMarker.bind(this);
  }

  // Retrieving data from the API
  async componentDidMount() {
    const res1 = await axios.get(
      'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
    );
    this.setState({ stationList: res1.data.data.stations });
    const res2 = await axios.get(
      'https://gbfs.citibikenyc.com/gbfs/en/station_status.json'
    );
    this.setState({ stationStatus: res2.data.data.stations });
  }

  // When used select the marker data of the index paramaters
  setSelectedMarker(index) {
    const { stationList, stationStatus } = this.state;
    this.setState({
      selectedStation: {
        station: stationList[index],
        status: stationStatus.filter(
          (el) => el.station_id === stationList[index].station_id
        ),
      },
    });
  }

  // Change the state to generate or not the map
  setGenerateMap() {
    const { generateMap } = this.state;
    this.setState({ generateMap: !generateMap });
  }

  // when used set the selectedStation to null
  deselectMarker() {
    this.setState({ selectedStation: null });
  }

  render() {
    const { stationList, selectedStation, generateMap } = this.state;
    const { setSelectedMarker, setGenerateMap, deselectMarker } = this;
    return (
      <Map
        generateMap={generateMap}
        setGenerateMap={setGenerateMap}
        deselectMarker={deselectMarker}
        selectedStation={selectedStation}
        stationList={stationList}
        setSelectedMarker={setSelectedMarker}
      />
    );
  }
}

export default MainPage;
