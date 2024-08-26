import React, { useState, useEffect } from 'react';
import './ZoomableImage.scss'

function ZoomableImage({src}) {
    const [selected, setSelected] = useState(false);

    const onClickHandler = ()=> {
        setSelected(!selected);
    }

    return (
        <div className={`zoom-container ${selected ? "selected" : "hidden"}`  }>
            <div className='source-image'>
                <img onClick={onClickHandler} src={src} />
            </div>

            <div className='scaled-image'>
                <img src={src} />
            </div>

            <div className="close-button" onClick={onClickHandler}>
                &times;
            </div>
        </div>
        
    )
}

export default ZoomableImage;