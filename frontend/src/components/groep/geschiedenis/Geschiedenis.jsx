import '../../Page.scss';
import React, { useEffect, useState } from 'react';

function Geschiedenis() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const response = await fetch(`./geschiedenis.json`);

        if (response.ok) {
            let content = await response.json();
            setPosts(content);
        } else {
            console.error("File not found")
        }
        }
        fetchPosts(); 
    }, [])

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        
                    </p>
                    {/* <img src={imgStatue}/> */}
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Geschiedenis
                </h1>
            </div>
            
            <div className='page-content'>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}><a href={`#/geschiedenis/${post.id}`}>{post.title}</a></li>
                    ))
                }
            </ul>
            </div>

        </div>
        </>
    )
}

export default Geschiedenis