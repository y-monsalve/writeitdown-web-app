import React, { useEffect, useState } from "react";
import CreateListForm from "./CreateListForm";
const BASE_URL = "http://localhost:3000";

function ListView(props) {
  const [lists, setLists] = useState([
    {},
    // {
    //   name: "Journal",
    //   description: "here is where I will write what happens to me day to day",
    // },
    // {
    //   name: "Random ideas",
    //   description: "here is where I will write whatever comes to mind",
    // },
    // {
    //   name: "Recipes",
    //   description: "here is where I will write down any good recipe",
    // },
  ]);
  const [list, setList] = useState({
    name: "",
    description: "",
  });
  const [listsLength, setListsLength] = useState(lists.length);
  const [isListView, setListView] = useState(true);
  const [isPostView, setIsPostView] = useState(false);

  const handleChangeToListView = (isListView) => {
    setListView(isListView);
  };

  const handleChangeToPostView = (isPostView) => {
    setIsPostView(isPostView);
    console.log({ lists: list }); //not working
  };

  //OR
  const getPosts = async (posts) => {}; // both ideas to change from listview to postview

  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch(`${BASE_URL}/lists`);
      const data = await response.json();
      const lists = data.lists;
      setLists(lists);
    };
    fetchLists();
  }, []);

  return (
    <>
      {isListView ? (
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid card bg-base-300 rounded-box place-items-center  shadow-xl ">
            {listsLength !== null ? (
              <div className="list-view">
                <h2>Here are your lists:</h2>
                <ul>
                  {lists.map((list) => (
                    <li
                      key={list.id}
                      onSubmit={props.addList}
                      onClick={() => handleChangeToPostView(true)}
                    >
                      {list.name}: {list.description}
                    </li>
                  ))}
                </ul>{" "}
              </div>
            ) : (
              <h2>You have no lists yet, create one</h2>
            )}

            <button
              className="btn btn-sm bg-accent-focus marg"
              onClick={() => handleChangeToListView(false)}
            >
              Create a list
            </button>
          </div>
        </div>
      ) : (
        <CreateListForm />
      )}
    </>
  );
}

export default ListView;
