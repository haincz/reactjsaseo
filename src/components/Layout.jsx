import React from 'react';
import {Navbar} from './Navbar';

export const Layout = (props) => (

  <div>
      <header className="container">
           <Navbar />
      </header>
      <div className="container">
          {props.children}
      </div>
      <footer className="footer">
      </footer>
  </div>
)