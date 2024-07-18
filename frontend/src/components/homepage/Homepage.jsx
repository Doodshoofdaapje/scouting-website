import ImageBanner from './image_banner/ImageBanner';
import Description from './description/Description';
import Information from './information/Information';
import News from '../news/News';

function HomePage() {
    return (
        <>
            <ImageBanner/>
            <Information/>
            <div className="container">
                <Description/>
                <hr></hr>
                <News/>
            </div>
            
        </>
    )
}

export default HomePage;