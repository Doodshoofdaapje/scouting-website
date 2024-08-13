// src/components/Post.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GeschiedenisPost({ data }) {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./geschiedenis.json`);

      if (response.ok) {
          let content = await response.json();
          setPost(content[id]);
      } else {
          console.error("File not found")
      }
    }
    fetchPosts(); 
}, [])

  return (
    <>
    <p>{post.title}</p>
    <p>{post.text}</p>
    <img src={post.image}/>
    </>
  );
};

export default GeschiedenisPost;
