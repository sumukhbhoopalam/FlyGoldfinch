import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Card } from 'react-bootstrap';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      load:false
    };
  }
	
  componentDidMount(){
	fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
	.then((response)=>response.json())
	.then((response)=>{
		this.setState({
			items:response,
			load:true
		});
	})
  }

  render() {
	  var {items,load}=this.state
	  if(!load){
		  return(
			<div>Loading...</div>
			)
	  }
	  else{
		return(
			<div className="container">
			{items.map(item=>(
				
				<div>
					<card>
						<card-body>
							<card-title>Name :</card-title>
							<card-text>{item.first} {item.last}</card-text>
						</card-body>
					</card>
				</div>
				
			))}
				<button>
					<NavLink className={'bx--btn bx--btn--primary'} to={'/time'}>
					Previous Page
					</NavLink>
					</button>
					<button>
					<NavLink className={'bx--btn bx--btn--primary'} to={'/currency'}>
					Next Page
					</NavLink>
				</button>
			</div>
			)
	  }
	  
	  return (
      <div>
			
      </div>
    );
  }
}

export default API;