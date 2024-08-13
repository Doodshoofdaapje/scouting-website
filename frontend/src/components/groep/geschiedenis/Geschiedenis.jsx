import '../../Page.scss';
import GeschiedenisPost from './GeschiedenisPost';
import React, { useEffect, useState } from 'react';
import listReactFiles from 'list-react-files'

function Geschiedenis() {
    const [files, setFiles] = useState([])

    useEffect(()=> {
        listReactFiles('src/components/groep/geschiedenis/posts').then(files => console.log(files))
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
                {files.map(file => (
                <li key={file}>{file}</li>
                ))}
            </ul>
            </div>

        </div>
        </>
    )
}

export default Geschiedenis