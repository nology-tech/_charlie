import React from 'react'
import Filter from "../../../../assets/images/filter.png";
import GridView from "../../../../assets/images/grid-view.png";
import HamburgerMenu from "../../../../assets/images/hamburger-menu.png";
import Sort from "../../../../assets/images/sort.png";
import "./student-searchbar.scss"; 


const StudentSearchBar = (props) => {

  
  const {generateSearchResults, changeToGridView, changeToBurgerView, sortStudents, 
    sortOption, filterStudentsByCourse, filterOption} = props;
  return (
    <div className="search-bar d-flex align-items-center justify-content-between text-start ms-0 me-0 w-100">

      <h2 className="search-bar__heading p-0 m-0">Student List</h2>
      
      <div className="search-bar__view-buttons d-flex"> 
        <button className="search-bar__view-buttons-btn p-0" onClick={changeToBurgerView}> 
          <img src={HamburgerMenu} alt="hamburger"></img>
        </button>
        <button className="search-bar__view-buttons-btn p-0" onClick={changeToGridView}> 
          <img src={GridView} alt="grid view"></img></button>
      </div>

      <div className="search-bar__right-side-container d-flex justify-content-between h-100 align-items-center">

        <input className="search-bar__input" onInput={generateSearchResults} placeholder="Course, Name..."></input>

        <div className = "d-flex align-items-center">
          <img className = "search-bar__sort-filter-buttons-img p-0" src={Sort} alt="sort"></img>
          <select name="rows" value={sortOption} className="sort-menu" onChange={sortStudents}>
            <optgroup label="Sort">
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
            </optgroup>
          </select>
        </div>
          
        <div className="d-flex align-items-center">
          <img src={Filter} alt="filter" className = "search-bar__sort-filter-buttons-img p-0"></img>
          <select name="rows" value={filterOption} className="sort-menu" onChange={filterStudentsByCourse} data-testid="course-selector">
            <optgroup label="Filter">
              <option value="1">All Courses</option>  
              <option value="2">Mariana</option>
              <option value="3">Ibiza</option>
              <option value="4">Jersey</option>
              <option value="5">Hawaii</option>
            </optgroup>
          </select>
          </div>
        </div>

    </div>
  )
}
export default StudentSearchBar
