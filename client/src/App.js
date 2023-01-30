import "./App.css";
import React, { useState } from "react";
import ListView from "./components/ListView";
// import PostView from "./components/PostView";
// import CreateListForm from "./components/CreateListForm";

function App() {
  const [isListView, setListView] = useState(true);

  return (
    <div className="App">
      <h1> write it down</h1>
      <ListView />
      {/* {isListView ? <ListView /> : <CreateListForm />}
      <button
        className="create-new-list"
        onClick={() => handleChangeView(false)}
      >
        Create a list
      </button> */}
      {/* <CreatePostForm />
      onSubmit={(newPost) => handleCreatePost(newPost)} */}
      {/* <CreateListForm /> */}
      {/* onSubmit={(newList) => handleCreateList(newList)} */}
    </div>
  );
}

export default App;

//i need a sentence like
//if no lists
//return create list form
//else listview && smaller create list

//if list GET && no posts in list
//return create post form
//else postview && smaller create post

//do i set those conditionals in App.js?
