/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prop-types */
import ReactMapboxGl, { Layer, Source, Image } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import './Map.scss';

// Import components
import DashboardData from '../Dashboard/DashboardData';
import DashboardWelcome from '../Dashboard/DashboardWelcome';
import VianovaLogo from '../VianovaLogo/VianovaLogo';

// Import Geojson data to display
import districtNY from './data/districtNewYork.geojson';

// Providing token to generate the map
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A',
});

class MapGenerate extends Component {
  constructor(props) {
    super(props);
    // State for initial map positions when loading the web-app as well as the initial zoom
    this.state = {
      lat: 40.699231753990865,
      lng: -74.0483786650457,
      zooom: 10,
      coordMark: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { stationList } = this.props;
    if (prevProps.stationList !== stationList) {
      const coord = stationList.map((el, index) => {
        return {
          type: 'Feature',
          properties: {
            id: index,
            location: el.name,
          },
          geometry: {
            type: 'Point',
            coordinates: [el.lon, el.lat],
          },
        };
      });
      this.setState({ coordMark: coord });
    }
  }

  render() {
    const { selectedStation, deselectMarker, setSelectedMarker } = this.props;
    const { zooom, lat, lng, coordMark } = this.state;
    return (
      // assigning the container for the map to generate
      <div>
        {selectedStation === null ? (
          <DashboardWelcome />
        ) : (
          <DashboardData
            selectedStation={selectedStation}
            deselectMarker={deselectMarker}
          />
        )}
        <Map
          className="map__globalContainer"
          style="mapbox://styles/florentlem/ckk45dsav4tov17nl6ecgboqu"
          zoom={[zooom]}
          center={[lng, lat]}
          attributionControl={false}
        >
          <Source
            id="new york"
            geoJsonSource={{
              type: 'geojson',
              data: districtNY,
            }}
          />
          <Layer
            id="new york"
            sourceId="new york"
            type="fill"
            maxZoom={12}
            minZoom={9}
            paint={{
              'fill-color': '#FFF',
              'fill-opacity': 0.8,
            }}
          />
          <Image
            id="custom_marker"
            url="https://i.ibb.co/5FmLPNK/marker-Station.png"
          />
          <Source
            id="markers"
            geoJsonSource={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: coordMark,
              },
            }}
          />
          <Layer
            id="marker"
            sourceId="markers"
            type="symbol"
            layout={{
              'icon-image': 'custom_marker',
              'icon-size': 0.06,
            }}
            minZoom={12}
            onClick={(e) => {
              const idd = e.features[0].properties.id;
              setSelectedMarker(idd);
            }}
          />
        </Map>
        <VianovaLogo />
      </div>
    );
  }
}

export default MapGenerate;
