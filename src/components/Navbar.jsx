import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = (props) => (
<nav className="row">
  <div className="container-fluid">

	<ul className="nav">
		<li>
			<NavLink to="/" className="navbar">Strona Główna</NavLink>
		</li>
		<li>
			<NavLink activeClassName="active" to="/about">O mnie</NavLink>
		</li>
		<li>
			<NavLink activeClassName="active" to="/contact">Kontakt</NavLink>
		</li>
	</ul>
  </div>
</nav>
)
