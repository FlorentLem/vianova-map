/* eslint-disable react/prop-types */
import React from 'react';
import './Dashboard.scss';
import {
  FaPlug,
  FaBicycle,
  FaMoneyCheck,
  FaKey,
  FaArrowLeft,
} from 'react-icons/fa';
import stationBike from './assets/stationBike.jpg';

const DashboardData = ({ selectedStation, deselectMarker }) => {
  return (
    <div className="dashboardData__globalContainer">
      <button
        type="button"
        onClick={() => {
          deselectMarker();
        }}
      >
        <FaArrowLeft />
      </button>
      <div className="dashboardData__titleContainer">
        <h1 className="dashboardData__title">{selectedStation.station.name}</h1>
        <div
          className="dashboardData__picture"
          style={{
            backgroundImage: `url(${stationBike})`,
          }}
        />
        <span className="dashboardData__line" />
      </div>
      <div className="dashboardData__statusContainer">
        <h2>Station Status :</h2>
        <div className="dashboardData__status">
          <p>
            {selectedStation.status[0].station_status === 'active'
              ? 'Active'
              : 'Inactive'}
          </p>
          <div
            className={
              selectedStation.status[0].station_status === 'active'
                ? 'dashboardData__dotGreen'
                : 'dashboardData__dotRed'
            }
          />
        </div>
      </div>
      <div className="dashboardData__bikeContainer">
        <h3>Bikes available :</h3>
        <div className="dashboardData__bike">
          <p>
            <FaBicycle />
            {selectedStation.status[0].num_bikes_available}
          </p>
          <p>
            <FaPlug />
            {selectedStation.status[0].num_ebikes_available}
          </p>
        </div>
      </div>
      <div className="dashboardData__capacityContainer">
        <h3>Capacity : {selectedStation.station.capacity}</h3>
      </div>
      <div className="dashboardData__rentalContainer">
        <h3>Rental Methods :</h3>
        <div className="dashboardData__rentalGlobal">
          {selectedStation.station.rental_methods.includes('CREDITCARD') ? (
            <span>
              <FaMoneyCheck />
            </span>
          ) : (
            ''
          )}
          {selectedStation.station.rental_methods.includes('KEY') ? (
            <span>
              <FaKey />
            </span>
          ) : (
            ''
          )}
        </div>
        <div className="dashboardData__buttonContainer">
          <a href={selectedStation.station.rental_url}>Rent now !</a>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
