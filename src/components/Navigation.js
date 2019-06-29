import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="http://localhost:3001/">Home</a>
        </div>
        <div>
          <a href="http://localhost:3001/about">About</a>
        </div>
        <div>
          <a href="http://localhost:3001/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
