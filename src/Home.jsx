import React from 'react';

import logo from './reactlogo.png';

function Home() {
  return (
    <main className="container">
      <div className="item">
        <img src={logo} alt="React Logo" />
      </div>
      <div className="item">
        <h1>Home page</h1>
      </div>
      <div className="item">
        <p>Welcome to your fresh React App &#127752;</p>
      </div>
    </main>
  );
}

export default Home;