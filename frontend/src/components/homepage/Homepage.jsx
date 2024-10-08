import ImageBanner from './image_banner/ImageBanner';
import Description from './description/Description';
import Information from './information/Information';
import News from '../overig/news/News';
import '../Page.scss';

function HomePage() {
    return (
        <div className='homepage'>
            <ImageBanner/>
            <div className="container">
                <Information/>
                <Description/>
                <hr></hr>
                <News displayLimit={3}/>
                <div className='page-content' style={{ textAlign: 'center' }}>
                    <a href="#/nieuws"> Bekijk meer </a>
                </div>
                
            </div>
            
        </div>
    )
}

export default HomePage;