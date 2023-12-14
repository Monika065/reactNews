import React from "react";

const CreateNewPost = (props) => {
  
  return (
    <>
      <form onSubmit={props.savePost}>
        <h2>Create New Post</h2>
        <label className="col-sm-12 col-form-label" style={{ color: "white" }}>
          <b>Title</b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="post title"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
        <br />
        <label className="col-sm-12 col-form-label" style={{ color: "white" }}>
          <b>Content</b>
          <textarea
            className="form-control form-control-sm"
            placeholder="description"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <button title="save post" className="btn btn-success ml-3">
          save
        </button>
      </form>
    </>
  );
};

export default CreateNewPost;
// import React, { useState } from "react";
// import axios from "axios";

// const AddArticle = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post("http://localhost:3001/posts", { title, content })
//       .then((response) => {
//         console.log("Article added:", response.data);
//         // Optionally display success message or perform other actions
//         setTitle("");
//         setContent("");
//       })
//       .catch((error) => {
//         console.error("Error adding article:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>Add New Article</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={handleTitleChange} />
//         </label>
//         <br />
//         <label>
//           Content:
//           <textarea value={content} onChange={handleContentChange} />
//         </label>
//         <br />
//         <button type="submit">Add Article</button>
//       </form>
//     </div>
//   );
// };

// export default AddArticle;
