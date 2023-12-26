import axios from 'axios';


const url = "http://localhost:40001/user";

export const getallPosts= async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addPost = async (post) => {
    return await axios.post(url,post);
}

export const editPost = async (id,post) => {
    return await axios.put(`${url}/${id}`,post);
}


export const deletePost = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const getPostById = async (postId) => {
    try {
      const response = await axios.get(`/posts/${postId}`);
      return response.data; // Returning the fetched post data
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      throw error; // Propagate the error to handle it in the component
    }
  };
  

// export const currentUser = async (userId) => {
//   try {
  
//     const response = await axios.get(`${url}/${userId}`);
//     return response.data; // Returning the fetched current user's data
//   } catch (error) {
//     console.error('Error fetching current user:', error);
//     throw error; // Propagate the error to handle it in the component
//   }
// };
