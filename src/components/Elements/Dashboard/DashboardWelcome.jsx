import React from 'react';
import './Dashboard.scss';

import biker from './assets/biker.jpeg';

const DashboardWelcome = () => {
  return (
    <div className="dashboardWelcome__globalContainer">
      <div className="dashboardWelcome__titleContainer">
        <h1 className="dashboardWelcome__title">Welcome !</h1>
        <div
          className="dashboardWelcome__picture"
          style={{
            backgroundImage: `url(${biker})`,
          }}
        />
      </div>
      <div className="dashboardWelcome__mainContainer">
        <p>This is a map that displays many bikes stations in New York !</p>
        <p>You can use your mouse to drag the map and zoom with the scroll. </p>
        <p>
          If a station is interesting you can just click on it and all the
          informations about the station will be displayed here !
        </p>
        <p>Happy Riding !</p>
      </div>
    </div>
  );
};

export default DashboardWelcome;
