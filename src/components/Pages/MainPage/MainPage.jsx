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
    this.state = {
      selectedMarker: null,
      marker: [],
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
      .then((res) => res.data)
      .then((data) => {
        this.setState({ marker: data.data.stations });
      });
  }

  setSelectedMarker(index) {
    const { marker } = this.state;
    this.setState({
      selectedMarker: {
        object: marker.data.stations[index],
        id: index,
      },
    });
  }

  render() {
    const { marker } = this.state;
    return <Map stationList={marker} />;
  }
}

export default MainPage;
