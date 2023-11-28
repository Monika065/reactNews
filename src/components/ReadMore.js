import React from 'react';
// import './ReadMore.css';/
import { useLocation } from 'react-router-dom';

export default function ReadMore() {
    
  const location = useLocation();
  const { state } = location;
console.log(state)
  if (!state) {
    return <div>No data available</div>;
  }

  const { title, description, imageUrl } = state;

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      {/* Display additional content based on the passed data */}
    </div>
  );
}
