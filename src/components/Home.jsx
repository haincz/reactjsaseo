  	import React from 'react';  	
	
	export const HomeButton =  () => (
		<div className="button">
  		  			<button>Czytaj więcej</button>
  		  		</div>
	)
		  		  	


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
	  	  		  			<p>{data.description} </p>
	  	  		  			<HomeButton />
	  	  		  		</div>
	  	  			</div>
	  	  		)
  	}