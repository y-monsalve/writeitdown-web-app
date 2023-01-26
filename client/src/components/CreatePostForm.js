import React, { useState } from "react";
function CreatePostForm({ onSubmit }) {
  const [post, setPost] = useState({
    title: "",
    //timestamp:"", is this something that i get from the onSubmit?
    text: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setPost((post) => {
      return {
        ...post,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit(post);
    setPost({
      title: "",
      //timestamp:"",
      text: "",
    });
    console.log({ post });
  };
  return (
    <div className="submit-form">
      <h2>Write something down in LIST NAME...</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          <textarea
            type="text"
            placeholder="write something here"
            name="text"
            value={post.text}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button>Post</button>
      </form>
    </div>
  );
}
export default CreatePostForm;
