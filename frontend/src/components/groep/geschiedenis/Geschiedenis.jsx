import '../../Page.scss';
import './Geschiedenis.scss'
import React, { useEffect, useState } from 'react';
import imgLogo from '../../../assets/lidmaatschap/logo.jpg';

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
                    ASG kent een geschiedenis vol met mooie momenten en herinneringen. Door de jaren heen hebben we tal van avonturen beleefd, 
                    vriendschappen gesloten en tradities opgebouwd die onze scoutinggroep vormen tot wat het vandaag de dag is.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Geschiedenis
                </h1>
            </div>
            
            <div className='geschiedenis-gallery'>
                <div className='image-gallery'>
                    {posts.map((post) => (
                        <a href={`#/geschiedenis/${post.id}`}>
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
        </>
    )
}

export default Geschiedenis