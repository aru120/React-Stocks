import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
      stocks: [],
      portfolio: [],
      searchTerm: "",
      sort: "none"
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r=>r.json())
    .then(data=>this.setState({stocks: data}))
  }

  handlePortfolioClick = (stockObj) =>{

    if(this.state.portfolio.includes(stockObj)){
      return
    }else{
      this.setState({portfolio: [...this.state.portfolio, stockObj]})
    }
  }

  removePortfolioClick = (stockObj) =>{
    
    let newPortArray = [...this.state.portfolio]
    let index = newPortArray.findIndex(stock => stock.id === stockObj.id)
    newPortArray.splice(index,1)
    this.setState({portfolio: newPortArray})
  }
  
  handleSearch = (term) =>{
    this.setState({searchTerm: term})
  }

  handleSort = (term) =>{
    this.setState({sort: term})
  }

  render() {
    
    return (
      <div>
        <SearchBar searchHandler={this.handleSearch} handleSort={this.handleSort} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer sort={this.state.sort}searchTerm={this.state.searchTerm} api={this.state.stocks} handlePortfolio={this.handlePortfolioClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handlePortfolio={this.removePortfolioClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
