import React, { useState } from "react";

function ListView() {
  const [lists, setLists] = useState([
    {
      name: "Journal",
      description: "here is where I will write what happens to me day to day",
    },
    {
      name: "Random ideas",
      description: "here is where I will write whatever comes to mind",
    },
    {
      name: "Recipes",
      description: "here is where I will write down any good recipe",
    },
  ]);
  const [listsLength, setListLength] = useState(lists.length);

  return (
    <div className="list-view">
      {listsLength !== null ? (
        <h2>Here are your lists:</h2>
    <ul>
            {lists.map((list) => (
            <li key={list.id}>
              {list.name}: {list.description}
            </li>
          ))}
        </ul>
      ) : (
      
        <h2>You have no lists yet, create one</h2>
      )}
    </div>
  );
}

export default ListView;
