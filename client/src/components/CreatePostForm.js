import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CreatePostForm({ onSubmit }) {
  const [post, setPost] = useState({
    title: "",
    //timestamp:"", is this something that i get from the onSubmit?
    text: "",
  });
  const { id } = useParams();

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
    <div className="flex flex-col w-full border-opacity-50 justify-center items-center">
      <Link to="/">
        <button className="btn btn-sm bg-accent-focus marg mt-10 text-center">
          Back to Lists
        </button>
      </Link>
      <Link to="/lists/:id/posts">
        <button className="btn btn-sm bg-accent-focus marg mt-3 text-center">
          Back to Posts
        </button>
      </Link>
      <div className="grid card bg-yellow-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
        <div className="btnform-control w-full max-w-xs">
          <h2 className="btncard-title tracking-wider font-semibold pb-5">
            Write something down in {id}...
          </h2>
          <div className="btncard-body">
            <form onSubmit={handleSubmit}>
              <label className="btnlabel">
                Title
                <input
                  type="text"
                  name="title"
                  className="btninput btninput-bordered max-w-xs form-control block w-full mb-5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={post.title}
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="btnlabel">
                <textarea
                  type="text"
                  className="btninput btninput-bordered max-w-xs form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="write something here"
                  name="text"
                  value={post.text}
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <div className="btncard-actions justify-end">
                {" "}
                <Link to="/lists/:id/posts">
                  <button
                    type="submit"
                    className="btn btn-sm bg-accent-focus marg mt-10"
                  >
                    Post
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreatePostForm;
