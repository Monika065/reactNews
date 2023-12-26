// import React, { useEffect, useState } from "react";
// import { getallPosts } from "../service/api";
// import { deletePost } from "../service/api";
// import { editPost } from "../service/api";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import EditPost from "./EditPost";

// const AllPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();
//   const [editingPost, setEditingPost] = useState(null);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await getallPosts();
//       const postsWithImages = response.data.map(post => ({
//         id: post.id,
//         title: post.title,
//         content: post.content,
//         imageUrl: post.imageUrl || 'url_of_default_image_if_image_not_found' // Replace with default image URL
//       }));
//       setPosts(postsWithImages);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const navigateToAddPost = () => {
//     navigate("/addblog");
//   };

//   const updatePost = async (updatedPost) => {
//     await editPost(updatedPost.id, updatedPost);
//     fetchPosts();
//     setEditingPost(null); // Reset the editing state after updating
//   };

//   const deleteData = async (id) => {
//     await deletePost(id);
//     fetchPosts();
//   };

//   const cardStyle = {
//     width: "18rem",
//     margin: "10px",
//   };

//   return (
//     <div>
//       <Button
//         onClick={navigateToAddPost}
//         style={{ marginTop: "80px", marginBottom: "20px", color: "black" }}
//       >
//         Add Post
//       </Button>

//       <div className="card-deck">
//         {posts.map((data) => (
//           <div key={data.id} style={cardStyle}>
//             <div className="card">
//               <img
//                 src={data.imageUrl}
//                 className="card-img-top"
//                 alt="Blog Post"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{data.title}</h5>
//                 <p className="card-text">{data.content}</p>
//                 <Button
//                   variant="danger"
//                   onClick={() => deleteData(data.id)}
//                   style={{ marginRight: '5px' }}
//                 >
//                   Delete
//                 </Button>
//                 <button onClick={() => setEditingPost(data)}>Edit Post</button>
//                 {editingPost && editingPost.id === data.id && (
//                   <EditPost
//                     postId={data.id}
//                     post={editingPost}
//                     updatePost={updatePost}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllPosts;
import React, { useEffect, useState } from "react";
import { getallPosts } from "../service/api";
import { deletePost } from "../service/api";
import { editPost } from "../service/api";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import EditPost from "./EditPost";
import "./styles.css";

const AllPosts = () => {
  
 

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [editingPost, setEditingPost] = useState(null);

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
        imageUrl: post.imageUrl || 'url_of_default_image_if_image_not_found' // Replace with default image URL
      }));
      setPosts(postsWithImages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const navigateToAddPost = () => {
    navigate("/addblog");
  };

  const updatePost = async (updatedPost) => {
    await editPost(updatedPost.id, updatedPost);
    fetchPosts();
    setEditingPost(null); // Reset the editing state after updating
  };

  const deleteData = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

//  const currentUser= async (id) => {
//   try {
//     await currentUser(id);
//     fetchPosts();
//   } catch (error) {
//     console.error("Error current user:", error);
//   }
// };



  return (
    <div className="container">
      <Button
        onClick={navigateToAddPost} className="add-btn"
        // style={{ marginTop: "100px", marginBottom: "20px", color: "black" }}
      >
        Add Post
      </Button>

      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((data) => (
          <Col key={data.id}>
            <Card style={{ margin: "10px" }}>
              <Card.Img src={data.imageUrl} alt="Blog Post" />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.content}</Card.Text>
                
                <Button
                  variant="danger"
                  onClick={() => deleteData(data.id)}
                  style={{ marginRight: "5px" }}
                >
                  Delete
                </Button>
                <Button onClick={() => setEditingPost(data)}>Edit Post</Button>
                {editingPost && editingPost.id === data.id && (
                  <EditPost
                    postId={data.id}
                    post={editingPost}
                    updatePost={updatePost}
                    // deletePost={deletePost}
                  //  currentUser={currentUser} 
  
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllPosts;



