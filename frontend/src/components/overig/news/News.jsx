import './News.scss';
import '../../Page.scss';
import React, { useEffect, useState } from 'react';

function News({displayLimit}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`./nieuws avg.json`);

            if (response.ok) {
                let content = await response.json();
                setPosts(content);
            } else {
                console.error("File not found")
            }
        }
        fetchPosts(); 
    }, [])

    return (
        <div className=''>
            <div className='content-header'>
                <h1> Nieuws </h1>
            </div>

            <div className='news-container'>
                <div className='image-gallery'>
                    {posts.slice(0, displayLimit).map((post) => (
                        <a href={`#/nieuws/${post.id}`}>
                            <div>
                                <img src={post.image}/>
                                <hr/>
                                <h2>
                                    {post.title} 
                                </h2>
                            </div>
                        </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News