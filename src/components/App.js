import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import FilterSection from "./FilterSection";
import NewHogForm from "./NewHogForm";

import hogs from "../porkers_data";

function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [greasedFilter, setGreasedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showForm, setShowForm] = useState(false);

  const handleFilter = (greasedStatus) => {
    setGreasedFilter(greasedStatus);
  };

  const handleAddNewHog = (newHog) => {
    console.log(newHog);
    console.log(hogsList);
    setHogsList([...hogsList, newHog]);
    console.log(hogsList);
  };

  const hogsAfterGreaseFilter = hogsList
    .filter((hog) => {
      if (greasedFilter === "all") return hog;
      if (greasedFilter === "greased" && hog.greased === true) {
        return hog;
      } else if (greasedFilter === "dry" && hog.greased === false) {
        return hog;
      }
    })
    .sort((hogA, hogB) => {
      if (sortBy === "weight") {
        return hogA.weight - hogB.weight;
      } else {
        return hogA.name.localeCompare(hogB.name);
      }
    });

  return (
    <div className="App">
      <Nav setShowForm={setShowForm} showForm={showForm} />
      {showForm ? (
        <NewHogForm
          handleAddNewHog={handleAddNewHog}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <FilterSection
            handleFilter={handleFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <HogContainer hogsList={hogsAfterGreaseFilter} />
        </>
      )}
    </div>
  );
}

export default App;
