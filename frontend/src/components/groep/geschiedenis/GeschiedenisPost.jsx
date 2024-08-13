// src/components/Post.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function GeschiedenisPost({ postPath }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMd = async () => {
      const response = await fetch(`./geschiedenis/${postPath}.md`);

      if (!response.ok) {
        console.log("eeeeeeeeeee")
        setContent("Bestand niet gevonden")
      } else {
        let mdContent = await response.text();
        setContent(mdContent);
      }
      
    }
    fetchMd(); 
	}, [])

  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};

export default GeschiedenisPost;
