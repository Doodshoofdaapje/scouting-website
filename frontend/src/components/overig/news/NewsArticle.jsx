import '../../Page.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ZoomableImage from '../../zoomable_image/ZoomableImage';

function NewsArticle() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`./nieuws.json`);

      if (response.ok) {
          let content = await response.json();
          setArticle(content[id]);
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
                {article.title}
              </h1>
          </div>
          <div className='page-content'>
            <p>
              {article.text}
            </p>
            <div>
              {
                article.links?.map((link)=> (
                  <><a href={link.link}> {link.text} </a> <br/></>
                )) 
              }
            </div>
            
          </div>
          <div className='image-gallery'>
            {article.gallery?.map((image)=> (
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

export default NewsArticle;
