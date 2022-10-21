import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import FilterSection from "./FilterSection";

import hogs from "../porkers_data";

function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [greasedFilter, setGreasedFilter] = useState("all");

  const handleFilter = (greasedStatus) => {
    setGreasedFilter(greasedStatus);
  };

  const hogsAfterGreaseFilter = hogsList.filter((hog) => {
    if (greasedFilter === "all") return hog;
    if (greasedFilter === "greased" && hog.greased === true) {
      return hog;
    } else if (greasedFilter === "dry" && hog.greased === false) {
      return hog;
    }
  });

  return (
    <div className="App">
      <Nav />
      <FilterSection handleFilter={handleFilter} />
      <HogContainer hogsList={hogsAfterGreaseFilter} />
    </div>
  );
}

export default App;
