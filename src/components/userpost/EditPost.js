


// import React, { useState } from "react";

// const EditPost = ({ postId, post, updatePost }) => {
//   const [updatedPost, setUpdatedPost] = useState(post);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedPost({ ...updatedPost, [name]: value });
//   };

//   const handleUpdate = () => {
//     const updatedPostWithId = { ...updatedPost, id: postId };
//     updatePost(updatedPostWithId);
//   };

//   return (
//     <div>
//       <h3>Edit Post</h3>
//       <label>
//         Title:
//         <br />
//         <input
//           type="text"
//           name="title"
//           value={updatedPost.title}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Content:
//         <br />
//         <textarea
//           name="content"
//           value={updatedPost.content}
//           onChange={handleChange}
//           rows="5"
//           cols="25"
//         ></textarea>
//       </label>
//       <br />
//       <label>
//         Image URL:
//         <br />
//         <input
//           type="text"
//           name="imageUrl"
//           value={updatedPost.imageUrl}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button onClick={handleUpdate}>Update Post</button>
//     </div>
//   );
// };

// export default EditPost;













import React, { useState } from "react";

const EditPost = ({ postId, post, updatePost, loggedInUserId }) => {
  const [updatedPost, setUpdatedPost] = useState(post);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  const handleUpdate = () => {
    const updatedPostWithId = { ...updatedPost, id: postId };
    updatePost(updatedPostWithId);
  };

  // Check if the logged-in user is the creator of the post
  const canEdit = loggedInUserId === post.userId;

  return (
    <div>
      <h3>Edit Post</h3>
      {canEdit ? (
        <>
          <label>
            Title:
            <br />
            <input
              type="text"
              name="title"
              value={updatedPost.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Content:
            <br />
            <textarea
              name="content"
              value={updatedPost.content}
              onChange={handleChange}
              rows="5"
              cols="25"
            ></textarea>
          </label>
          <br />
          <label>
            Image URL:
            <br />
            <input
              type="text"
              name="imageUrl"
              value={updatedPost.imageUrl}
              onChange={handleChange}
            />
          </label>
          <br />
          <button onClick={handleUpdate}>Update Post</button>
        </>
      ) : (
        <p>You are not authorized to edit this post.</p>
      )}
    </div>
  );
};

export default EditPost;
