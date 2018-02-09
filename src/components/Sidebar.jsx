import React from 'react';
import {content_data} from '../data';
import {Link} from 'react-router-dom';  

export const Sidebar = () => {

	return (

		<aside  className="sidebar col-4 ">
			<SidebarNav />
		</aside>

	)

}

export const SidebarNav = () =>{

	var data = content_data;

	return (

		<div className = "sidebar-menu">
			<ul>
				{data.map((data) => <li key={data.id}><Link to={{pathname: "/" + data.title.replace(/ /g, '-').toLowerCase() + "/" + data.id}}>{data.title}</Link></li>)}
			</ul>
		</div>

	)

}
