import React, { useState } from "react";

function NewHogForm({ handleAddNewHog, showForm, setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: 0,
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddNewHog(formData);
    setShowForm((showForm) => !showForm);
  };

  return (
    <div>
      NewHogForm
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          name="name"
          id="name"
          placeholder="Enter name"
        ></input>
        <label htmlFor="specialty">Specialty</label>
        <input
          onChange={handleChange}
          name="specialty"
          id="specialty"
          placeholder="Enter specialty"
        ></input>
        <label htmlFor="greased">Greased</label>
        <input
          onChange={handleChange}
          name="greased"
          id="greased"
          type="radio"
        ></input>
        <label htmlFor="weight">Weight</label>
        <input
          onChange={handleChange}
          name="weight"
          id="weight"
          placeholder="Enter weight"
          type="number"
        ></input>
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          name="image"
          id="image"
          placeholder="Enter image"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewHogForm;
