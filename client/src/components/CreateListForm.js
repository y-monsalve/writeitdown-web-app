import React, { useState } from "react";
function CreateListForm({ onSubmit }) {
  const [list, setList] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    // why can´t i use input instead of target for the variable?
    setList((list) => {
      return {
        ...list,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //onSubmit(list);
    setList({ name: "", description: "" });
    //console.log(`you created a list:"${list} `); //logs object object and list.value logs undefined
    console.log({ list });
  };

  return (
    <div className="submit-form">
      <h2>Create a list:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={list.name}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            value={list.description}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreateListForm;
