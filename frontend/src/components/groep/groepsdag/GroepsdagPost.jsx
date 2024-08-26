import '../../Page.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ZoomableImage from '../../zoomable_image/ZoomableImage';

function GroepsdagPost({ data }) {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./groepsdag.json`);

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
      <div className="container">      
          <div className='content-header'>
              <h1>
                {post.title}
              </h1>
          </div>
          <div className='page-content'>
            <p>
              {post.text}
            </p>
          </div>
          <div className='image-gallery'>
            {post.gallery?.map((image)=> (
              <div> 
                <ZoomableImage src={image}/>
                <hr/>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default GroepsdagPost;
