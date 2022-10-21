import React, { useState } from "react";

function HogCard({ hog }) {
  const [detailsShown, setDetailsShown] = useState(false);
  const [hogShown, setHogShown] = useState(true);

  const imageAndName = (
    <div onClick={() => setDetailsShown(!detailsShown)}>
      <img src={hog.image} alt={hog.name}></img>
      <p>{hog.name}</p>
      <button onClick={() => setHogShown(!hogShown)}>Hide Hog</button>
    </div>
  );

  const detailsView = (
    <>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "Buttered up!" : "Dry as a bone"}</p>
    </>
  );

  const reShowHogButton = (
    <button onClick={() => setHogShown(!hogShown)}>Show Hog</button>
  );

  const displayHogCard = (
    <div>
      {imageAndName}
      {detailsShown ? detailsView : null}
    </div>
  );

  return hogShown ? displayHogCard : reShowHogButton;
}

export default HogCard;
