import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { backgroundColor: "", width: "", height: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox({...formData, id: uuid()});
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add new box</button>
    </form>
  )


}


export default NewBoxForm;