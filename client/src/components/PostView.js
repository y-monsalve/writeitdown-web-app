import { useState } from "react";
import CreatePostForm from "./CreatePostForm";

function PostView() {
  const [posts, setPosts] = useState([
    {
      title: "ayer hizo frío",
      text: "a pesar de comprar la calefacción hizo mucho frío en la casa por eso salimos a pasear y tomar sol",
    },
    {
      title: "Brenda y Australia",
      text: "mañana se va Brenda para Australia, acuerdate de escribirle",
    },
  ]);
  const [postsLength, setPostsLength] = useState(posts.length);
  const [isPostView, setIsPostView] = useState(true);

  const handleChangeToPostView = (isPostView) => {
    setIsPostView(isPostView);
  };
  return (
    <>
      {isPostView ? (
        <div className="post-view-container">
          {postsLength !== null ? (
            <div className="post-view">
              <h2>Here are your posts:</h2>
            </div>
          ) : (
            <h2>No posts yet in LIST NAME</h2>
          )}

          <button
            className="create-new-post"
            onClick={() => handleChangeToPostView(false)}
          >
            Create a list
          </button>
        </div>
      ) : (
        <CreatePostForm />
      )}
    </>
  );
}

export default PostView;
