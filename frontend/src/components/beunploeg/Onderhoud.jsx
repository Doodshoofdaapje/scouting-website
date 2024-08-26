import '../Page.scss';
import imgLogo from '../../assets/beunploeg/beungploeg-logo.png';
import imgOnderhoud1 from '../../assets/onderhoud/onderhoud1.jpg';
import imgOnderhoud2 from '../../assets/onderhoud/onderhoud2.jpg';
import imgOnderhoud3 from '../../assets/onderhoud/onderhoud3.jpg';
import imgOnderhoud4 from '../../assets/onderhoud/onderhoud4.jpg';
import imgOnderhoud5 from '../../assets/onderhoud/onderhoud5.jpg';
import imgOnderhoud6 from '../../assets/onderhoud/onderhoud6.jpg';
import imgOnderhoud7 from '../../assets/onderhoud/onderhoud7.jpg';
import imgOnderhoud8 from '../../assets/onderhoud/onderhoud8.jpg';
import imgOnderhoud9 from '../../assets/onderhoud/onderhoud9.jpg';
import imgOnderhoud10 from '../../assets/onderhoud/onderhoud10.jpg';
import imgOnderhoud11 from '../../assets/onderhoud/onderhoud11.jpg';
import imgOnderhoud12 from '../../assets/onderhoud/onderhoud12.jfif';
import imgOnderhoud13 from '../../assets/onderhoud/onderhoud13.jfif';
import imgOnderhoud14 from '../../assets/onderhoud/onderhoud14.jfif';
import imgOnderhoud15 from '../../assets/onderhoud/onderhoud15.jfif';
import imgOnderhoud16 from '../../assets/onderhoud/onderhoud16.jpg';
import imgOnderhoud17 from '../../assets/onderhoud/onderhoud17.jpg';
import imgOnderhoud18 from '../../assets/onderhoud/onderhoud18.jfif';
import imgOnderhoud19 from '../../assets/onderhoud/onderhoud19.jpg';
import imgOnderhoud20 from '../../assets/onderhoud/onderhoud20.jpg';
import imgOnderhoud21 from '../../assets/onderhoud/onderhoud21.jpg';
import imgOnderhoud22 from '../../assets/onderhoud/onderhoud22.png';
import imgOnderhoud23 from '../../assets/onderhoud/onderhoud23.jfif';
import imgOnderhoud24 from '../../assets/onderhoud/onderhoud24.jpg';
import imgOnderhoud25 from '../../assets/onderhoud/onderhoud25.jfif';
import imgOnderhoud26 from '../../assets/onderhoud/onderhoud26.jpg';
import imgOnderhoud27 from '../../assets/onderhoud/onderhoud27.jpg';
import imgOnderhoud28 from '../../assets/onderhoud/onderhoud28.jpg';
import imgOnderhoud29 from '../../assets/onderhoud/onderhoud29.jpg';
import imgOnderhoud30 from '../../assets/onderhoud/onderhoud30.jpg';
import ZoomableImage from '../zoomable_image/ZoomableImage';


function Onderhoud() {

    const imgOnderhoudArray = [
        imgOnderhoud1, imgOnderhoud2, imgOnderhoud3, imgOnderhoud4, imgOnderhoud5,
        imgOnderhoud6, imgOnderhoud7, imgOnderhoud8, imgOnderhoud9, imgOnderhoud10,
        imgOnderhoud11, imgOnderhoud12, imgOnderhoud13, imgOnderhoud14, imgOnderhoud15,
        imgOnderhoud16, imgOnderhoud17, imgOnderhoud18, imgOnderhoud19, imgOnderhoud20,
        imgOnderhoud21, imgOnderhoud22, imgOnderhoud23, imgOnderhoud24, imgOnderhoud25,
        imgOnderhoud26, imgOnderhoud27, imgOnderhoud28, imgOnderhoud29, imgOnderhoud30
    ];

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Klussen... de beunploeg voert ze uit voor stichting en scoutinggroep.
                    Het deels houten gebouw, ooit bedacht als tijdelijke bouw, vraagt veel aandacht.
                    </p>
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Onderhoud
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Door plaatsen van nieuwe wanden, herstellen van rotte plekken, schuren en verven kan de buitenkant er weer een aantal jaren mee door.
                    Onlangs zijn de toiletgroepen gerenoveerd en kregen alle dakgoten een nieuwe laag EPDM. Daarnaast kreeg het dak een nieuwe koepel en is de buitenverlichting nu LED.
                    Maar daarmee is het werk nog niet gedaan, is er altijd iets te doen op de ASG. De beunploeg vervangt van alles, van ruitje, tot slot, kraan, ramen en ook de deuren.
                    Bij de onderhoud valt ook controlles op Legionella, noodverlichting en de brandalarmen. Er is altijd volop te doen, buiten of binnen
                </p>

            </div>

            <div className='image-gallery'>

                {imgOnderhoudArray.map((source)=> (
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

export default Onderhoud