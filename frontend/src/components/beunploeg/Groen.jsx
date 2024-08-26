import '../Page.scss';
import imgLogo from '../../assets/beunploeg/beungploeg-logo.png';
import imgGroen1 from '../../assets/groen/groen1.jpg';
import imgGroen2 from '../../assets/groen/groen2.jpg';
import imgGroen3 from '../../assets/groen/groen3.jpg';
import imgGroen4 from '../../assets/groen/groen4.jpg';
import imgGroen5 from '../../assets/groen/groen5.jpg';
import imgGroen7 from '../../assets/groen/groen7.jpg';
import imgGroen8 from '../../assets/groen/groen8.jpg';
import imgGroen9 from '../../assets/groen/groen9.jpg';
import imgGroen10 from '../../assets/groen/groen10.jpg';
import imgGroen11 from '../../assets/groen/groen11.jpg';
import imgGroen12 from '../../assets/groen/groen12.jpg';
import imgGroen13 from '../../assets/groen/groen13.jpg';
import imgGroen14 from '../../assets/groen/groen14.jpg';
import imgGroen15 from '../../assets/groen/groen15.jfif';
import imgGroen16 from '../../assets/groen/groen16.jfif';
import ZoomableImage from '../zoomable_image/ZoomableImage';


function Groen() {

    const imgGroenArray = [
        imgGroen1, imgGroen2, imgGroen3, imgGroen4, imgGroen5, imgGroen7, imgGroen8, imgGroen9, imgGroen10,
        imgGroen11, imgGroen12, imgGroen13, imgGroen14, imgGroen15,
        imgGroen16,
    ];
    
    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Eeuwigdurend snoeien en weghalen van onkruid, het maaien van het gras, en het uitbaggeren van de sloot. Onze beunploeg is van alle afdelingen thuis.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Groen
                </h1>
            </div>


            <div className='image-gallery'>

                {imgGroenArray.map((source)=> (
                    <div>
                        <ZoomableImage src={source}/>
                    <hr/>
                </div> 
                ))}
                    
            </div>
        </div>
        </>
    )
}

export default Groen