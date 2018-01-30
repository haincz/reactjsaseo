import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom';

import './style.css';

import {HomeList, App} from './components/App';
import {content_data} from './data';
import {Layout} from './components/Layout';
import {Contact} from './components/Contact';
import {AboutMe} from './components/About';
import {SinglePage} from './components/Singlepage'
import {HomeListDetail} from './components/Home'



ReactDOM.render(

	<Router>
    	<Layout>
	      	<Route exact path="/" component={HomeList} />
	      	<Route path="/about" component={AboutMe} />
	      	<Route path="/contact" component={Contact} />
	      	<Route path="/test/:id" component={SinglePage}/>
    	</Layout>
  	</Router>

  

  ,document.getElementById('root'));