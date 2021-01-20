import React from 'react';
import './VianovaLogo.scss';

import logo from './assets/vianova.png';

const VianovaLogo = () => {
  return (
    <div
      className="vianovaLogo"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    />
  );
};

export default VianovaLogo;
