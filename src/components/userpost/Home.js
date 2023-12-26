import React, { useEffect, useState } from "react";
import { getallPosts } from "../service/api";
import "./styles.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getallPosts();
      const postsWithImages = response.data.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl || "url_of_default_image_if_image_not_found", // Replace with default image URL
      }));
      setPosts(postsWithImages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const cardStyle = {
    width: "20rem",
    margin: "10px",
    marginBottom: "16px",
  };

  return (
    <div>
      <h2 style={{ paddingTop: "10px ", marginBottom: "20px" }}>All Blogs</h2>
      <div className="card-deck">
        {posts.map((data) => (
          <div key={data.id} style={cardStyle}>
            <div className="card">
              <img
                src={data.imageUrl}
                className="card-img-top"
                alt="Blog Post"
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
