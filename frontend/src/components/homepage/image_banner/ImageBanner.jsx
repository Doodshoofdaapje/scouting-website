import homeImage from '../../../assets/banner-placeholder.jpg';
//import homeImage from '../../../assets/home_image_sharp.jpeg';
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