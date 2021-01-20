import React from 'react';
// import axios from 'axios';
import stationList from '../../Elements/Map/data/stationsList.json';

// Import components and stylesheet //

import Map from '../../Elements/Map/Map';
import './MainPage.scss';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMarker: null,
    };
    this.setSelectedMarker = this.setSelectedMarker.bind(this);
  }

  // componentDidMount() {
  //   array = {};
  //   axios
  //     .get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
  //     .then((res) => {
  //       array = { res };
  //     });
  //   this.setState({ stationList: array });
  //   console.log(this.state.stationList);
  //   console.log(array);
  // }

  setSelectedMarker(index) {
    this.setState({
      selectedMarker: {
        object: stationList.data.stations[index],
        id: index,
      },
    });
  }

  render() {
    // const { stationList } = this.state;
    // console.log(stationList);
    return (
      <div>
        <Map stationList={stationList.data.stations} />
      </div>
    );
  }
}

export default MainPage;
