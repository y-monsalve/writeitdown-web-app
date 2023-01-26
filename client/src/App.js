import "./App.css";

import CreateListForm from "./components/CreateListForm";
import ListView from "./components/ListView";
import CreatePostForm from "./components/CreatePostForm";
import PostView from "./components/PostView";

function App() {
  return (
    <div className="App">
      <h1> write it down</h1>
      {/* if there are no list */}
      <p>You have no lists yet, create one</p>

      <CreateListForm />
      <ListView />
      <CreatePostForm />
      <PostView />
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
