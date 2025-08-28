//import homeImage from '../../../assets/banner-placeholder.jpg';
import homeImage from '../../../assets/groepsfoto.jpg';
import homeImage2025 from '../../../assets/groepsfoto_2025.jpeg';
import iscoutImage from "../../../assets/homepage/iscout4.jpg"
import groepsdagImage from "../../../assets/homepage/202414.jpeg"
import './ImageBanner.scss';

function ImageBanner() {
    return (
        <div className='image-container'>
            <img src={homeImage2025} className='cropped-image '>
            </img>
        </div>
    )
}

export default ImageBanner