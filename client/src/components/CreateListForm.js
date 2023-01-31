import React, { useState } from "react";
import ListView from "./ListView";

const BASE_URL = "http://localhost:3000";
function CreateListForm({ onSubmit }) {
  const [list, setList] = useState({
    name: "",
    description: "",
  });
  const [isListView, setListView] = useState(false);

  const handleChangeView = (isListView) => {
    setListView(isListView);
  };

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
    setList({ name: "", description: "" });
    addList(list);
  };

  const addList = async (list) => {
    try {
      await fetch(`${BASE_URL}/lists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      });
      window.location.reload();
    } catch (err) {
      console.log("Opps, something went wrong");
    }
  };

  return (
    <>
      {isListView === false ? (
        <div className="submit-form">
          <h2>Create a list:</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <button onClick={() => handleChangeView(true)}>Create</button>
          </form>
        </div>
      ) : (
        <ListView />
      )}
    </>
  );
}

export default CreateListForm;
