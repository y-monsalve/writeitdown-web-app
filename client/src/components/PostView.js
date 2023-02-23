import React, { useState, useEffect } from "react";
import CreatePostForm from "./CreatePostForm";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function PostView(props) {
  const [posts, setPosts] = useState([
    {
      title: "ayer hizo frío",
      id: 1,
      text: "a pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sol",
      
    },
    // {
    //   title: "Brenda y Australia",
    //   id: 2,
    //   text: "mañana se va Brenda para Australia, acuerdate de escribirle",
    // },
    // {
    //   title: "Brenda y Australia",
    //   id: 3,
    //   text: "mañana se va Brenda para Australia, acuerdate de escribirle",
    // },
    // {
    //   title: "Brenda y Australia",
    //   id: 4,
    //   text: "mañana se va Brenda para Australia, acuerdate de escribirle",
    // },
    // {
    //   title: "Brenda y Australia",
    //   id: 5,
    //   text: "mañana se va Brenda para Australia, acuerdate de escribirle",

    // },
  ]);
  const [postsLength, setPostsLength] = useState(posts.length === null);
  const [isPostView, setIsPostView] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(`${BASE_URL}/posts`);
  //     const data = await response.json();
  //     const posts = data.posts;
  //     setPosts(posts);
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <>
      {/* {isPostView ? ( */}
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        {/* <Link to="/"> */}
        <button className="btn btn-sm bg-accent-focus marg mt-10 text-center">
          Back to Lists
        </button>
        {/* </Link> */}

        <div class=" mt-5 ">
          <ul className="stack ">
            {posts.map((post, { id }) => (
              <div className="grid w-32 h-20  bg-red-200 rounded-box place-content-center ">
                <li key={id} onSubmit={props.addPost}>
                  <h3 className="font-bold ">{post.title}</h3>
                  <h5 className=" font-extralight tracking-wide mb-5">
                    {post.created_at}
                    {/* 01.01.01 */}
                  </h5>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="grid card bg-yellow-200 m-10 p-10 rounded-box place-items-center shadow-xl w-3/5">
          {/* {postsLength !== null ? ( */}
          <div className="">
            <div className=" bg-red-500 justify-center content-center">
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                Here are your posts:
              </h2>
              {/* <Link to="/create-post"> */}
              <button className="btn btn-sm bg-accent-focus marg ">
                Create a post
              </button>
              {/* </Link> */}
            </div>
            <div className=" p-0 sm:p-2 m-0 bg-amber-300">
              <div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
                  {posts.map((post, { index, post.id }) => (
                    <div className="card shadow">
                      <div className="card-body mt-4 object-scale-down sm:object-contain bg-red-200 rounded-box ">
                        <li key={post.id} onSubmit={props.addPost}>
                          <h3 className="card-title ">{post.title}</h3>
                          <h5 className=" font-extralight tracking-wide mb-5">
                            {post.created_at}
                            {/* 01.01.01 */}
                          </h5>
                          <p className="hidden sm:block truncate ">
                            {post.text}
                          </p>
                        </li>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* ) : (
            <h2 className="pb-5 text-lg tracking-wider font-semibold">
              No posts yet in LIST NAME
            </h2>
          )} */}
        </div>
      </div>
      {/* // ) : (
      //   <CreatePostForm />
      // )} */}
    </>
  );
}

export default PostView;
