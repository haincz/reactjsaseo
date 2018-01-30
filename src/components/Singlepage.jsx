import React from 'react';
import {content_data} from '../data';



  export const SinglePage = ({ match }) => {

    var data = content_data;
    var pageId = data[match.params.id];

    console.log(pageId.description)


  		return (
  		
  		<div>		  	
 		  	<div>			
 		  		<h1 className="header">{pageId.title}</h1>		
  			</div>
  			<div className="content">
  			
  				<p dangerouslySetInnerHTML={ { __html: pageId.description} }></p>

  			</div>
  		</div>
  		)

  	}