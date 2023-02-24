import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function ListView(props) {
  const params = useParams();

  const [lists, setLists] = useState([{}]);
  const [listsLength, setListsLength] = useState(lists.length);
  const [isListView, setListView] = useState(true);

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
      {" "}
      {/* {isListView ? ( */}
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-yellow-200 m-10 p-10 rounded-box place-items-center shadow-xl w-3/5">
          {listsLength !== null ? (
            <div>
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                Here are your lists:
              </h2>
              <ul>
                {lists.map((list) => (
                  <Link to={`/lists/${list.id}/posts`}>
                    <li
                      className="hover:italic "
                      key={list.id}
                      onSubmit={props.addList}
                    >
                      <p className="hover:font-bold not-italic cursor-pointer">
                        {" "}
                        - {list.name}:
                      </p>{" "}
                      <span>{list.description}</span>
                    </li>
                  </Link>
                ))}
              </ul>{" "}
            </div>
          ) : (
            <div>
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                You have no lists yet, create one
              </h2>
            </div>
          )}
          <Link to="/create-list">
            <button className="btn btn-sm bg-accent-focus marg mt-10">
              Create a list
            </button>
          </Link>
        </div>
      </div>
      {/* ) : (
        <CreateListForm />
      )} */}
    </>
  );
}

export default ListView;
