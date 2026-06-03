import '../Page.scss';
import imgBrand from '../../assets/geschiedenis/brand.jpg';
import imgSketch from '../../assets/gebouw_informatie/sketch.webp';
import imgPlattegrond from '../../assets/gebouw_informatie/plattegrond.webp';

import imgOverzicht from '../../assets/gebouw_informatie/oud/overzicht.jpeg';
import imgGrasveld from '../../assets/gebouw_informatie/oud/grasveld.jpeg';
import imgGrasveld2 from '../../assets/gebouw_informatie/oud/grasveld2.jpeg';
import imgPad from '../../assets/gebouw_informatie/oud/pad.jpeg';
import imgKuil from '../../assets/gebouw_informatie/oud/theaterkuil.jpeg';
import imgGebouw from '../../assets/gebouw_informatie/oud/gebouw.jpeg';

import imgBeverhok1 from '../../assets/gebouw_informatie/beverhok (1).webp';
import imgBeverhok2 from '../../assets/gebouw_informatie/beverhok (2).webp';
import imgBeverhok3 from '../../assets/gebouw_informatie/beverhok (3).webp';
import imgBuiten1 from '../../assets/gebouw_informatie/buiten (1).webp';
import imgBuiten2 from '../../assets/gebouw_informatie/buiten (2).webp';
import imgBuiten3 from '../../assets/gebouw_informatie/buiten (3).webp';
import imgBuiten4 from '../../assets/gebouw_informatie/buiten (4).webp';
import imgBuiten5 from '../../assets/gebouw_informatie/buiten (5).webp';
import imgDouches1 from '../../assets/gebouw_informatie/douches (1).webp';
import imgDouches2 from '../../assets/gebouw_informatie/douches (2).webp';
import imgDouches3 from '../../assets/gebouw_informatie/douches (3).webp';
import imgHal1 from '../../assets/gebouw_informatie/hal (1).webp';
import imgHal2 from '../../assets/gebouw_informatie/hal (2).webp';
import imgInvalidentoilet1 from '../../assets/gebouw_informatie/invalidentoilet (1).webp';
import imgInvalidentoilet2 from '../../assets/gebouw_informatie/invalidentoilet (2).webp';
import imgKeuken1 from '../../assets/gebouw_informatie/keuken (1).webp';
import imgKeuken2 from '../../assets/gebouw_informatie/keuken (2).webp';
import imgKeuken3 from '../../assets/gebouw_informatie/keuken (3).webp';
import imgWc1 from '../../assets/gebouw_informatie/wc (1).webp';
import imgWc2 from '../../assets/gebouw_informatie/wc (2).webp';
import imgWc3 from '../../assets/gebouw_informatie/wc (3).webp';
import imgWelpenzaal1 from '../../assets/gebouw_informatie/welpenzaal (1).webp';
import imgWelpenzaal2 from '../../assets/gebouw_informatie/welpenzaal (2).webp';
import imgVerkennerzaal1 from '../../assets/gebouw_informatie/verkennerzaal (1).webp';
import imgVerkennerzaal2 from '../../assets/gebouw_informatie/verkennerzaal (2).webp';
import imgVerkennerzaal3 from '../../assets/gebouw_informatie/verkennerzaal (3).webp';


import ZoomableImage from '../zoomable_image/ZoomableImage';

function GebouwInformatie() {

    const imagesBuiten = [imgBuiten1, imgBuiten2, imgBuiten3, imgBuiten4, imgBuiten5];
    const imagesHal = [imgHal1, imgHal2];
    const imagesWelpenzaal = [imgWelpenzaal1, imgWelpenzaal2];
    const imagesBeverhok = [imgBeverhok1, imgBeverhok2, imgBeverhok3];
    const imagesVerkennerzaal = [imgVerkennerzaal1, imgVerkennerzaal2, imgVerkennerzaal3];
    const imagesKeuken = [imgKeuken1, imgKeuken2, imgKeuken3];
    const imagesSanitair = [imgWc1, imgWc2, imgWc3, imgDouches1, imgDouches2, imgDouches3, imgInvalidentoilet1, imgInvalidentoilet2];

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Het clubgebouw is in 1994 opnieuw opgebouwd nadat het vorige clubhuis door een brand was vernield. Het huidige gebouw is sindsdien het 
                        hart van onze scoutingactiviteiten, waar we met trots samenkomen voor vergaderingen, activiteiten en speciale evenementen.
                    </p>
                    <img src={imgBrand}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Gebouw Informatie
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Het middengedeelte van het gebouw is in steen opgetrokken, daar bevinden zich sanitaire ruimtes, de keuken, de hal en de basis. 
                    Aan weerszijde van het midden is het gebouw in hout opgetrokken. Het houten gedeelte bepaalt voor een groot deel de sfeer van het gebouw. 
                    Er zijn twee grote zalen, een kleinere beverruimte en twee magazijnen.
                </p>
            
                <div className='content-image'>
                    <img src={imgSketch}/>
                </div>

                <p>
                    Voor het gebouw is een grasveld met vlaggenmast. Naast het gebouw is een kleine speelplek (zandbak en glijbaan) voor de allerkleinsten. 
                    Over de hele lengte van het terrein is een bestraat gedeelte, bruikbaar als fietsenstalling en parkeerplaats, maar ook speelplek als er geen auto's worden 
                    geparkeerd. Tevens is er een theaterkuil met een stookton voor BBQ of een klein vuurtje, met plaats voor ongeveer 20-25 volwassenen. 
                    De grote zalen zijn 11m x 7m, de beverruimte is 7m x 4m.
                    De overige ruimtes zijn in gebruik o.a. als magazijn en worden niet verhuurd. Het gebouw is telefonisch bereikbaar onder nummer: 076-5711983
                </p>

                <div className='content-image'>
                    <ZoomableImage src={imgPlattegrond}/>
                </div>
            </div>

            <div className='content-header'>
                <h2>
                    Terrein
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    Het terrein is afgeschermd door een hek en poort. 
                    Achter het gebouw loopt een klein pad, waar ook pionierpalen te vinden zijn. Deze kunnen in bespreking met verhuur ook gebruikt worden.
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesBuiten.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Hal
                </h2>
            </div>

            <div className='image-gallery'>
                
                {imagesHal.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Welpenzaal
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    De welpenzaal is een van de twee grote zalen in het gebouw. Deze kan als slaap- en/of speelzaal gebruikt worden. 
                    Er is een klein doorgeefluik tussen de welpenzaal en de keuken. Aan de achterkant van de zaal vind je een doorgang naar het beverhok.
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesWelpenzaal.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Beverhok
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    Het beverhok is een kleine zaal die bijvoorbeeld gebruikt kan worden als leidingruimte.
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesBeverhok.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Verkennerszaal
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    De verkennerszaal is de tweede grote zaal van het gebouw. Er zit een klein keukenblok in met wasbak.
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesVerkennerzaal.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Keuken
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    De keuken bevat twee gasfornuizen met oven en afzuiging. Er zijn een koel-vriescombinatie, een wasmachine en een koffiezetapparaat aanwezig.
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesKeuken.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
            
            <div className='content-header'>
                <h2>
                    Sanitair
                </h2>
            </div>

            <div className= 'page-content'>
                <p> 
                    Het herentoilet bevat twee wc's en twee urinoirs. 
                    Er is één vrouwentoilet en een invalidentoilet en -douche. Daarnaast zijn er drie douches aanwezig. 
                </p>
            </div>

            <div className='image-gallery'>
                
                {imagesSanitair.map((source)=> (
                    <div key={source}>
                        <ZoomableImage src={source}/>
                        <hr/>
                    </div> 
                ))}
                
            </div>
        </div>
        </>
    )
}

export default GebouwInformatie