import '../../Page.scss';
import React, { useEffect, useState } from 'react';
import imgLogo from '../../../assets/lidmaatschap/logo.jpg';

function Groepsdag() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`./groepsdag.json`);

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
                    De groepsdag is voor alle leden van Scouting Albert Schweitzer het begin van een nieuw scoutingjaar.
                    Leden die naar een nieuw onderdeel gaan "vliegen over"
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Groepsdag
                </h1>
            </div>
            
            <div className='image-gallery'>
                {posts.map((post) => (
                    <a href={`#/groepsdag/${post.id}`}>
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
        </>
    )
}

export default Groepsdag