import React from "react";

function FilterSection({ handleFilter, sortBy, setSortBy }) {
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <label>Greased Filter</label>
      <select name="greased-filter" id="greased-filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="dry">Dry</option>
      </select>
      <select name="sort" onChange={handleChangeSort} value={sortBy}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default FilterSection;
