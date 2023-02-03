import React from "react";
import ListView from "./components/ListView";

function App() {
  return (
    <div className="App">
      <h1 class="text-4xl font-normal text-center"> write it down</h1>
      <ListView />

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
