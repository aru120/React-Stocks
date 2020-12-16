import React from 'react'

class Stock extends React.Component {

  localHandlePortfolio = () =>{
    this.props.handlePortfolio(this.props.stockObj)
  }

  render(){

    return(
      <div>
          <div className="card">
            <div className="card-body" onClick={this.localHandlePortfolio}>
              <h5 className="card-title">{
                  this.props.stockObj.name
                }</h5>
              <p className="card-text">{
                  this.props.stockObj.price
                }</p>
            </div>
          </div>
        </div>
      )
  }
        };

export default Stock
