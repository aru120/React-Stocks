import React from 'react';

class SearchBar extends React.Component{
  
  

  localHandler = (e)=>{
    this.props.searchHandler(e.target.value)
  }
 
  localSortHandler = e =>{
    this.props.handleSort(e.target.value)
  }


  render(){

    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically"  onChange={this.localSortHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.sort === "Price" } onChange={this.localSortHandler}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.localHandler}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}

// checked={this.props.sort === "Alphabetically" }
export default SearchBar;
