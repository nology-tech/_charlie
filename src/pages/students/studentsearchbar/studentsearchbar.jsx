import React from 'react'
import Filter from "../../../assets/images/filter.png";
import GridView from "../../../assets/images/grid-view.png";
import HamburgerMenu from "../../../assets/images/hamburger-menu.png";
import Sort from "../../../assets/images/sort.png";
import "./studentsearchbar.scss"; 


const StudentSearchBar = () => {
  return (
    <div className="search-bar row d-flex align-items-center justify-content-start">
      <p className="col-2 search-bar__heading">Student List</p>
      <div className="offset-1 col-2"> 
        <button> <img src={HamburgerMenu} alt="hamburger"></img></button>
        <button> <img src={GridView} alt="grid view"></img></button>
      </div>
      <input className="search-bar__input col-2 offset-2"></input>
      <div className="col"> 
        <button> <img src={Sort} alt="sort"></img> Sort</button>
        <button> <img src={Filter} alt="filter"></img> Filter</button>
      </div>
    </div>
  )
}

export default StudentSearchBar
