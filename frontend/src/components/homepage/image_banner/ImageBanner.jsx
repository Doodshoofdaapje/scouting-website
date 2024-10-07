//import homeImage from '../../../assets/banner-placeholder.jpg';
import homeImage from '../../../assets/groepsfoto.jpg';
import './ImageBanner.scss';

function ImageBanner() {
    return (
        <div className='image-container'>
            <img src={homeImage} className='cropped-image '>
            </img>
        </div>
    )
}

export default ImageBanner