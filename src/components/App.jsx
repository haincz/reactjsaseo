import React from 'react';
import {HomeButton, HomeListMedia, HomeHeader, HomeListDetail} from './Home'
import {home_data} from '../homedata';

  export	const HomeList = (list) => {

    var list = home_data;

  		return (
  		
  		<div>		  	
 		  	<div>			
 		  		<HomeHeader />		
  			</div>
  			<div className="container">

  				{list.map((data) => <HomeListDetail data={data} key={data.id} />)}
  			</div>
  		</div>
  		)

  	}


 // export class App extends React.Component {

 //      render() {

 //        return (
 //        <div>
 //          <div>
 //            <HomeList list={this.props.list} />
 //          </div>

 //          <footer className="footer">

 //          </footer>
 //        </div>

 //        )

 //      }

 //    }


