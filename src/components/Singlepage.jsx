import React from 'react';
import {content_data} from '../data';
import MetaTags from 'react-meta-tags';

export const SinglePage = ({ match }) => {
  
    var data = content_data;
    var pageId = data[match.params.id];

    return (
       <div>
        <div className="wrapper">
          <MetaTags>
            <title>{pageId.title}</title>
          </MetaTags>
        </div>
          <div>     
            <h1 className="header">{pageId.title}</h1>    
          </div>
          <div className="content">
            <p dangerouslySetInnerHTML={ { __html: pageId.description} }></p>
          </div>
      </div>
      )
  }