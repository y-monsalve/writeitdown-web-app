import React from "react";
import ListView from "./components/ListView";
import PostView from "./components/PostView";
import CreateListForm from "./components/CreateListForm";
import CreatePostForm from "./components/CreatePostForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-normal tracking-widest text-center mt-5">
        {" "}
        write it down
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/create-list" element={<CreateListForm />} />
          <Route path="/lists/:id/posts" element={<PostView />} />
          <Route path="/create-post" element={<CreatePostForm />} />
        </Routes>
      </BrowserRouter>

      {/* <CreatePostForm />
      onSubmit={(newPost) => handleCreatePost(newPost)} */}
      {/* <CreateListForm /> */}
      {/* onSubmit={(newList) => handleCreateList(newList)} */}
    </div>
  );
}

export default App;
