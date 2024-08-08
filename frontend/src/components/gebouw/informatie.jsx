import '../Page.scss';
import imgBrand from '../../assets/geschiedenis/brand.jpg';
import imgOverzicht from '../../assets/gebouw/overzicht.jpeg';
import imgGrasveld from '../../assets/gebouw/grasveld.jpeg';
import imgGrasveld2 from '../../assets/gebouw/grasveld2.jpeg';
import imgPlattegrond from '../../assets/gebouw/plattegrond.jpg';
import imgPad from '../../assets/gebouw/pad.jpeg';
import imgKuil from '../../assets/gebouw/theaterkuil.jpeg';
import imgSketch from '../../assets/gebouw/sketch.jpg';

function GebouwInformatie() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Het clubgebouw is in 1994 opnieuw opgebouwd nadat het vorige clubhuis door brand was vernield. 
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
                    Het middengedeelte van het gebouw is in steen opgetrokken, daar bevinden zich sanitaire ruimtes, keuken, hal en de basis. 
                    Aan weerszijde van het midden is in hout gebouwd. Het houten gedeelte bepaalt voor een groot deel de sfeer van het gebouw. 
                    Er zijn twee grote zalen, een kleinere beverruimte en twee magazijnen.
                </p>
            
                <div className='content-image'>
                    <img src={imgSketch}/>
                </div>

                <p>
                    Voor het gebouw is een grasveld met vlaggenmast. Naast het gebouw een kleine speelplek (zandbak en glijbaan) voor de allerkleinsten. 
                    Over de hele lengte van het terrein is een bestraat gedeelte, bruikbaar als fietsenstalling, parkeerplaats, maar als er geen auto's worden 
                    geparkeerd ook als speelplek. Tevens een theaterkuil met een stookton voor BBQ of een klein vuurtje, plaats voor ongeveer 20-25 volwassenen.
                </p>

            </div>

            <div className='image-gallery'>
                <div>
                    <img src={imgPad}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgOverzicht}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgGrasveld}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgGrasveld2}/>
                    <hr/>
                </div>
                <div>
                    <img src={imgKuil}/>
                    <hr/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default GebouwInformatie