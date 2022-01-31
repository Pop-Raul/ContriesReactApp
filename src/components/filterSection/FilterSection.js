import React from "react";
import "./FilterSection.css"


function FilterSection({ filterChange }) {


  return (

    <div>
      <select onChange={filterChange} >
        <option value="all">All</option>
        <option value="region">Region</option>
        <option value="population">Population</option>
        <option value="languages">Languages</option>
        <option value="timezone">Time-zone</option>
        <option value="currencies">Currencies</option>
      </select>
    </div>


  );
}


export default FilterSection;
