import React from "react";

function FilterSection({ handleFilter }) {
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };
  return (
    <div>
      <label for="greased-filter">Greased Filter</label>
      <select name="greased-filter" id="greased-filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="dry">Dry</option>
      </select>
      <select name="name-weight">
        <option type="radio" value="name">
          Name
        </option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default FilterSection;
