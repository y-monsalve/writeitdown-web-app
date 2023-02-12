import React, { useState, useEffect } from "react";
import CreatePostForm from "./CreatePostForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000";

function PostView(props) {
  const [posts, setPosts] = useState([
    // {
    //   title: "ayer hizo frío",
    //   text: "a pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sol",
    // },
    // {
    //   title: "Brenda y Australia",
    //   text: "mañana se va Brenda para Australia, acuerdate de escribirle",
    // },
  ]);
  const [postsLength, setPostsLength] = useState(posts.length === null);
  const [isPostView, setIsPostView] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json();
      const posts = data.posts;
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      {isPostView ? (
        <div className="flex flex-col border-opacity-50 justify-center items-center">
          <Link to="/">
            <button className="btn btn-sm bg-accent-focus marg mt-10 text-center">
              Back to Lists
            </button>
          </Link>
          <div className="grid card bg-yellow-200 m-10 p-10 rounded-box place-items-center shadow-xl w-3/5">
            {postsLength !== null ? (
              <div>
                <div className="flex-none justify-center items-center">
                  <h2 className="pb-5 text-lg tracking-wider font-semibold">
                    Here are your posts:
                  </h2>
                  <Link to="/create-post">
                    <button className="btn btn-sm bg-accent-focus marg ">
                      Create a post
                    </button>
                  </Link>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} onSubmit={props.addList}>
                        <div>
                          <h3>{post.title}</h3>
                          <div>{post.text}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                No posts yet in LIST NAME
              </h2>
            )}
          </div>
        </div>
      ) : (
        <CreatePostForm />
      )}
    </>
  );
}

export default PostView;
