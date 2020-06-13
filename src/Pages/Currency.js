import React from "react";
import "./App.css";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";

class Converter extends React.Component {
  constructor() {
    super();
    this.currency_details = [
      { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
      { currency: "EUR", name: "European euro", symbol: "€" },
      { currency: "GEL", name: "Georgian lari", symbol: "₾" },
      { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
      { currency: "HTG", name: "Haitian gourde", symbol: "G" },
      { currency: "INR", name: "Indian rupee", symbol: "₹" },
      { currency: "ILS", name: "Israeli new sheqel", symbol: "₪" },
      { currency: "KZT", name: "Kazakhstani tenge", symbol: "лв" },
      { currency: "KWD", name: "Kuwaiti dinar", symbol: "د.ك" },
      { currency: "LSL", name: "Lesotho loti", symbol: "L" },
      { currency: "INR", name: "Indian rupee", symbol: "₹" },
      { currency: "USD", name: "U.S. Dollar", symbol: "$" },
    ];
    extendObservable(this, {
      from: "USD",
      to: "INR",
      currency_value: "",
    });
  }

  handleFromChange(e) {
    this.from = e.target.value;
  }

  handleToChange(e) {
    this.to = e.target.value;
  }

  handleCurrencyValueChange(e) {
    this.currency_value = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.currency_value == "") 
		return;
    fetch(`https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`)
      .then((response) => response.json())
      .then((response) => {
        let currency_val = response[Object.keys(response)[0]];
        let final = this.currency_value * currency_val;
        alert(`Converted Value : ${this.to} ${final}`);
        this.currency_value = "";
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>
              <select value={this.from}
                onChange={this.handleFromChange.bind(this)}>
                {this.currency_details.map((currency) => (
                  <option value={currency.currency}>{currency.currency}({currency.symbol})</option>
                ))}
              </select>
			  From Currency
            </label>
          </div>
		  
		  <div>
		   <label>
            <input
              type="number"
              value={this.currency_value}
              onChange={this.handleCurrencyValueChange.bind(this)}
            />
			Value
			</label>
          </div>

          <div>
            <label>
              <select
                value={this.to}
                onChange={this.handleToChange.bind(this)}>
                {this.currency_details.map((currency) => (
                  <option value={currency.currency}>{currency.currency}({currency.symbol})</option>
                ))}
              </select>
			  To Currency
            </label>
          </div>
          <div>
            <input type="submit"/>
          </div>
		  <div>
			<button>
				<NavLink className={'bx--btn bx--btn--primary'} to={'/data'}>
				Previous Page
				</NavLink>
			</button>
			<button>
				<NavLink className={'bx--btn bx--btn--primary'} to={'/'}>
				Next Page
				</NavLink>
			</button>
		</div>
        </form>
      </div>
    );
  }
}
export default observer(Converter);