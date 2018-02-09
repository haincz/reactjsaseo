import React from 'react';
import {content_data} from '../data';
import MetaTags from 'react-meta-tags';
import {Sidebar} from './Sidebar';

export const SinglePage = ({ match }) => {
  
    var data = content_data;
    var pageId = data[match.params.id];

    return (
       <div className ="row">
        
          <MetaTags>
            <title>{pageId.title}</title>
          </MetaTags>
        
          <article className="col-8 col-m-12">     
              <h1 className="header">{pageId.title}</h1>    
            <div className="content">
              <p dangerouslySetInnerHTML={ { __html: pageId.description} }></p>
            </div>
          </article>
          <Sidebar />
        </div>
      )
  }