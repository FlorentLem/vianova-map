/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import './Map.scss';

// Import mapboxgl library
import mapboxgl from 'mapbox-gl';

// Import Geojson data to display
import districtNY from './data/districtNewYork.geojson';

// Providing token to generate the map
mapboxgl.accessToken =
  'pk.eyJ1IjoiZmxvcmVudGxlbSIsImEiOiJja2hveDNuYzcxNWY5MndteDM2djE3NnlxIn0.UuP-JCIEimNyvaSefaRr9A';

class Map extends Component {
  constructor(props) {
    super(props);
    // State for initial map positions when loading the web-app as well as the initial zoom
    this.state = {
      lat: 40.699231753990865,
      lng: -74.0483786650457,
      zooom: 10,
    };
  }

  // ComponentDidMount for generating the map when loading the page
  componentDidMount() {
    // Destructuring usefull items
    const { lat, lng, zooom } = this.state;
    const { mapContainer } = this;

    // Generating a new map with the mapboxgl.Map method where we give the style, the container of the map as well as the state values
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/florentlem/ckk45dsav4tov17nl6ecgboqu',
      center: [lng, lat],
      zoom: zooom,
      attributionControl: false,
    });

    // Creating district layer with the geojson file as a source
    map.on('load', () => {
      map.addSource('new york', {
        type: 'geojson',
        data: districtNY,
      });
      map.addLayer({
        id: 'new york',
        type: 'fill',
        source: 'new york',
        layout: {},
        maxzoom: 12,
        minzoom: 9,
        paint: {
          'fill-color': '#FFF',
          'fill-opacity': 0.8,
        },
      });
    });
  }

  render() {
    return (
      // assigning the container for the map to generate
      <div
        ref={(el) => (this.mapContainer = el)}
        className="map__globalContainer"
      />
    );
  }
}

export default Map;
