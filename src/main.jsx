import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom';

import './style.css';

import {HomeList, App} from './components/App';
import {home_data} from './homedata';
import {Layout} from './components/Layout';
import {Contact} from './components/Contact';
import {AboutMe} from './components/About';




ReactDOM.render(

	<Router>
    	<Layout>
	      	<Route exact path="/" component={HomeList} />
	      	<Route path="/about" component={AboutMe} />
	      	<Route path="/contact" component={Contact} />
    	</Layout>
  	</Router>

  

  ,document.getElementById('root'));