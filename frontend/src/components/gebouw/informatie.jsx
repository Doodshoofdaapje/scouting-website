import '../Page.scss';
import imgBrand from '../../assets/geschiedenis/brand.jpg';
import imgOverzicht from '../../assets/gebouw_informatie/overzicht.jpeg';
import imgGrasveld from '../../assets/gebouw_informatie/grasveld.jpeg';
import imgGrasveld2 from '../../assets/gebouw_informatie/grasveld2.jpeg';
import imgPlattegrond from '../../assets/gebouw_informatie/plattegrond.jpg';
import imgPad from '../../assets/gebouw_informatie/pad.jpeg';
import imgKuil from '../../assets/gebouw_informatie/theaterkuil.jpeg';
import imgSketch from '../../assets/gebouw_informatie/sketch.jpg';
import imgGebouw from '../../assets/gebouw_informatie/gebouw.jpeg';

function GebouwInformatie() {

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
                    Voor het gebouw is een grasveld met vlaggenmast. Naast het gebouw een kleine speelplek (zandbak en glijbaan) voor de allerkleinsten. 
                    Over de hele lengte van het terrein is een bestraat gedeelte, bruikbaar als fietsenstalling en parkeerplaats, maar ook speelplek als er geen auto's worden 
                    geparkeerd. Tevens is er een theaterkuil met een stookton voor BBQ of een klein vuurtje, met plaats voor ongeveer 20-25 volwassenen.
                </p>

                <div className='content-image'>
                    <img src={imgPlattegrond}/>
                </div>

                <ul>
                    <li>ingang en hal</li>
                    <li>verkenner-zaal 11 x 7 m</li>
                    <li>gidsen-zaal 11 x 7 m</li>
                    <li>beverruimte 7 x 4 m</li>
                    <li>keuken</li>
                    <li>wastrog en 3 douches</li>
                    <li>3 toiletten, 2 urinoirs</li>
                    <li>1 invalidentoilet / douche</li>
                </ul>

                <p> De overige ruimtes zijn in gebruik o.a. als magazijn en worden niet verhuurd. Het gebouw is telefonisch bereikbaar onder nummer: 076-5711983</p>

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
                <div>
                    <img src={imgGebouw}/>
                    <hr/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default GebouwInformatie