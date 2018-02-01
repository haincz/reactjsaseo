import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = (props) => (
<nav className="row">
	<ul className="nav">
		<li>
			<NavLink to="/">Strona Główna</NavLink>
		</li>
		<li>
			<NavLink to="/about">O mnie</NavLink>
		</li>
		<li>
			<NavLink to="/contact">Kontakt</NavLink>
		</li>
	</ul>
</nav>
)
