// import React, { useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:5000";

// function CreatePostForm({ onSubmit }) {
//   const navigate = useNavigate();
//   const [post, setPost] = useState({
//     title: "",
//     //timestamp:"", is this something that i get from the onSubmit?
//     text: "",
//   });
//   const { id } = useParams();

//   const handleChange = (e) => {
//     const target = e.target;
//     const name = target.name;
//     const value = target.value;

//     setPost((post) => {
//       return {
//         ...post,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPost({
//       title: "",
//       //timestamp:"", prob. not necessary here
//       text: "",
//     });
//     addPost(post);
//     console.log({ post });
//   };

//   const addPost = async (post) => {
//     try {
//       await fetch(`${BASE_URL}/posts`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(post),
//       });
//       navigate("/posts");
//     } catch (err) {
//       console.log("Oops, something went wrong");
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col w-full border-opacity-50 justify-center items-center">
//         <div className="flex-none rounded-md items-center " role="group">
//           <Link to="/">
//             <button className="btn btn-sm bg-accent-focus marg mr-5 mt-10 text-center">
//               Back to Lists
//             </button>
//           </Link>
//           <Link to="/lists/:id/posts">
//             <button className="btn btn-sm bg-accent-focus marg mt-3 text-center">
//               Back to Posts
//             </button>
//           </Link>
//         </div>
//         <div className="grid card bg-yellow-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
//           <div className="btnform-control w-full max-w-xs">
//             <h2 className="btncard-title tracking-wider font-semibold pb-5">
//               Write something down in {id}...
//             </h2>
//             <div className="btncard-body">
//               <form onSubmit={handleSubmit}>
//                 <label className="btnlabel">
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     className=" btninput-bordered btninput border border-solid rounded border-gray-300  px-1  font-light w-full max-w-xs"
//                     value={post.title}
//                     onChange={(e) => handleChange(e)}
//                   />
//                 </label>
//                 <label className="btnlabel">
//                   <textarea
//                     type="text"
//                     className="btninput btninput-bordered max-w-xs form-control block w-full px-1 py-1.5 text-base font-light text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black mt-5"
//                     placeholder="Write it down..."
//                     name="text"
//                     value={post.text}
//                     onChange={(e) => handleChange(e)}
//                   />
//                 </label>
//                 <div className="btncard-actions justify-end">
//                   {" "}
//                   <Link to="/lists/:id/posts">
//                     <button
//                       type="submit"
//                       className="btn btn-sm bg-accent-focus marg mt-10"
//                     >
//                       Post
//                     </button>
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CreatePostForm;
