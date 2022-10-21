import React from "react";
import HogCard from "./HogCard";

function HogContainer({ hogsList }) {
  const renderHogs = hogsList.map((hog) => {
    return <HogCard key={hog.name} hog={hog} />;
  });

  return (
    <div>
      HogContainer
      {renderHogs}
    </div>
  );
}

export default HogContainer;
