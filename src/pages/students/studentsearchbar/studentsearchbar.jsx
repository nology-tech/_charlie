import React, {useState} from 'react'
import Filter from "../../../assets/images/filter.png";
import GridView from "../../../assets/images/grid-view.png";
import HamburgerMenu from "../../../assets/images/hamburger-menu.png";
import Sort from "../../../assets/images/sort.png";
import "./studentsearchbar.scss"; 


const StudentSearchBar = (props) => {
  
  const {generateSearchResults, changeView} = props;

  return (
    <div className="search-bar row d-flex align-items-center text-start ms-0 me-0">
  
      <h2 className="search-bar__heading col-2 p-0 m-0">Student List</h2>

      <div className="search-bar__view-buttons offset-1 col-1  d-flex"> 
        <button className="search-bar__view-buttons-btn p-0" onClick={changeView}> <img src={HamburgerMenu} alt="hamburger"></img></button>
        <button className="search-bar__view-buttons-btn p-0" onClick={changeView}> <img src={GridView} alt="grid view"></img></button>
      </div>

      <input className="search-bar__input col-2 offset-3" onInput={generateSearchResults}></input>

      <div className="search-bar__sort-filter-buttons col-3 d-flex align-items-center justify-content-end"> 
        <img className = "search-bar__sort-filter-buttons-btn p-0" src={Sort} alt="sort"></img>
        <select name="rows" defaultValue="1" className="sort-menu">
          <option value="1" className="bs"> Name (A-Z) </option>
          <option value="2"> Name (Z-A)</option>
          <option value="3"> Course (A-Z) </option>
          <option value="4"> Course (Z-A)</option>
        </select>

        <img src={Filter} alt="filter" className = "search-bar__sort-filter-buttons-btn p-0"></img>
        <p className="search-bar__sort-filter-buttons-label">Filter</p>
      </div>

    </div>
  
  )
}

export default StudentSearchBar
