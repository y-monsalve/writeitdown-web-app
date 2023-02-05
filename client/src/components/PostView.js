import { useState } from "react";
import CreatePostForm from "./CreatePostForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function PostView() {
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
  const [postsLength, setPostsLength] = useState(posts.length);
  const [isPostView, setIsPostView] = useState(true);

  const handleChangeToPostView = (isPostView) => {
    setIsPostView(isPostView);
  };
  //  useEffect(() => {
  //    const fetchLists = async () => {
  //      const response = await fetch(`${BASE_URL}/lists`);
  //      const data = await response.json();
  //      const lists = data.lists;
  //      setLists(lists);
  //    };
  //    fetchLists();
  //  }, []);
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
                <h2 className="pb-5 text-lg tracking-wider font-semibold">
                  Here are your posts:
                </h2>
              </div>
            ) : (
              <h2 className="pb-5 text-lg tracking-wider font-semibold">
                No posts yet in LIST NAME
              </h2>
            )}
            <Link to="/create-post">
              <button className="btn btn-sm bg-accent-focus marg mt-10">
                Create a post
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <CreatePostForm />
      )}
    </>
  );
}

export default PostView;
