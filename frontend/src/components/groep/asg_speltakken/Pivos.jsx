import '../../Page.scss';
import imgPivos from '../../../assets/asg_speltakken/pivos.jpg';
import imgSpeltak from '../../../assets/asg_speltakken/roverscouts.jpg';

function Pivos() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Roverscouts (Pivos) </h1>
                </div>
                
                <p>
                    Pivos zijn leden van 18 tot en met 21 jaar. Pionier (jongen) en Voortrekker (meisje) zijn de 'oude' namen voor dit onderdeel.
                    Roverscouts maken zelf hun programma's. Ze doen dat ieder een keer. Op deze manier leren ze nieuwe dingen van elkaar. 
                    Als ze dat willen kunnen ze een beroep doen op een 'adviseur' uit de groep.
                    Ze gaan in de zomer op expeditie. Iedere week komen ze samen op zondag van 20:00 tot 22:00 uur
                </p>
                
                <div className='content-image'>
                    <img src={imgPivos}/>
                </div>

                <hr/>

                <p>
                    De naam van onze roverscouts is de A Stam. De A van Albert en zijn het geliefde Afrika! (en een beetje omdat ten tijde van de oprichting van de stam de tv-serie het A-team erg populair was...)
                </p>

                <div className='content-image'>
                    <img src={imgSpeltak}/>
                </div>
                
            </div>  
        </>
    )
}

export default Pivos;
