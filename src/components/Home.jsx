  	import React from 'react';
  	import {Link} from 'react-router-dom';  	
	
	export const HomeButton = ({data}) => {


			return (
				<div className="button">
  		  			<button>
  		  				<Link to={{pathname: "/test/" + data.id}}>Czytaj więcej</Link>
  		  			</button>
  		  		</div>

  		  		)
	}
		  		  	


	export const HomeListMedia = ({data}) => (
			
			<img src={data.image} alt={data.title} />
		)


	export const HomeHeader = () => {

		return (

			<div className="header">
				<img src="src/image/header.jpg" />
			</div>

			)
	}

  	export const HomeListDetail = (props) => {

  		var {data} = props

 		  	return	(

 		  		
	  	  			<div className="row">
	  	  		  		<div className="col-4">
	  	  		  			<HomeListMedia {...props} />
	  	  		  		</div>
	  	  		  		<div className="col-8">
	  	  			  		<h3>{data.title}</h3>
	  	  		  			<p>{data.lead} </p>
	  	  		  			<HomeButton {...props}/>
	  	  		  		</div>
	  	  			</div>
	  	  		)
  	}