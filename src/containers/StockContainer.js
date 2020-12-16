import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = ()=>{
    let filteredArray =  this.props.api.filter(stock => stock.type.includes(this.props.searchTerm))

    if(this.props.sort === "Alphabetically"){
      filteredArray.sort((a,b) => a.name > b.name ? 1 : -1)
    }
    else if (this.props.sort === "Price"){
      filteredArray.sort((a,b) => a.price > b.price ? 1 : -1)

    }
    return filteredArray.map(stock => <Stock key={stock.id} stockObj={stock} handlePortfolio={this.props.handlePortfolio}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
