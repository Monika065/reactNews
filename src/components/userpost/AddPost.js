import React, { useState } from "react";
import { addPost } from "../service/api";
// import './styles.css';

import { useNavigate } from "react-router-dom";

const initialValue = {
  title: "",
  content: "",
  imageUrl: "",
};

const AddPost = () => {
  const [posts, setPosts] = useState(initialValue);
  const { title, content, imageUrl } = posts;
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  const addPostDetails = async () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content fields before submitting.");
    } else {
      // Proceed with adding the post
      console.log(posts);
      await addPost(posts);
      setPosts(initialValue);
      navigate("/myblog");
    }
  };

  const handleImageError = () => {
    // Handle error if the image fails to load
    alert("Failed to load the image. Please check the URL.");
  };

  return (
    <div>
      <h3>Add Post Details</h3>
      <div>
        <label>Title</label>
        <input
          className="form-control form-control-sm"
          autoFocus={true}
          type="text"
          onChange={(e) => onValueChange(e)}
          name="title"
          value={title}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          className="form-control form-control-sm"
          placeholder="description"
          onChange={(e) => onValueChange(e)}
          name="content"
          value={content}
          rows="10"
          cols="41"
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          className="form-control form-control-sm"
          type="text"
          onChange={(e) => onValueChange(e)}
          name="imageUrl"
          value={imageUrl}
          maxHeight="100pxs"
        />
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt="Preview"
              onError={handleImageError}
              style={{ maxWidth: "50%", maxHeight: "100px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>
      <div>
        <button onClick={() => addPostDetails()}>Add Post</button>
      </div>
    </div>
  );
};

export default AddPost;
