import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import { Card } from 'react-bootstrap';

class API extends Component {
  constructor() {
    super();
    extendObservable(this, {
      load: false,
      items: [],
      get randpeople() {
        if(!this.load)
		{
			return "Loading...";
		}
		else{
			return this.items.map((name) => <p key={name}>{name}</p>)
		}
      },
    });
  }

  componentDidMount() {
    fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
      .then((response) => response.json())
      .then((response) => {
        response.map((info) => {
          this.items.push("Name :" + " " + info.first + " " + info.last);
          this.load = true;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
		return(
			<div className="container">
				<div>
					<card>
						<card-body>
							<card-text>{this.randpeople}</card-text>
						</card-body>
					</card>
				</div>

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
}

export default observer(API);