import React, { useState, useEffect } from "react";
import CreatePostForm from "./CreatePostForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function PostView(props) {
  const [posts, setPosts] = useState([
    // {
    //   title: "ayer hizo frío",
    //   id: 1,
    //   text: "a pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sol,a pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sola pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sola pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sola pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sola pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sol",
    // },
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
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts?id=${id}`);
      const data = await response.json();
      const posts = data.posts;
      setPosts(posts);
    };
    fetchPosts(); //refresh posts after posting?
  }, []);
  return (
    <>
      {/* {isPostView ? ( */}
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <Link to="/">
          <button className="btn btn-sm bg-accent-focus marg mt-10 text-center">
            Back to Lists
          </button>
        </Link>

        <div className="grid card bg-yellow-200 m-10 p-10 rounded-box place-items-center shadow-xl w-3/5">
          {/* {postsLength !== null ? ( */}
          <div className="justify-center content-center mb-6">
            <Link to={`/lists/${id}/create-post`}>
              <button className="btn btn-sm bg-accent-focus marg ">
                Create a new post
              </button>
            </Link>
          </div>
          <div className="justify-center content-center">
            <h2 className="pb-5 text-lg tracking-wider font-semibold">
              Here are your posts in
              <div
                className="tooltip tooltip-bottom"
                data-tip="list description"
              >
                &nbsp;<span className="italic"> LIST NAME</span>
              </div>
              :
            </h2>
          </div>
          <div className=" p-1  m-1">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
              {posts.map((post, { id }) => (
                <div className="card shadow">
                  <div className="card-body  object-scale-down sm:object-contain bg-red-200 rounded-box ">
                    <li key={post.id} onSubmit={props.addPost}>
                      <h3 className="card-title ">{post.title}</h3>
                      <h5 className=" font-extralight tracking-wide mb-5">
                        {post.created_at}
                        {/* 01.01.01 */}
                      </h5>
                      <p className="hidden sm:block  ">{post.text}</p>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
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
