import '../Page.scss';
import imgWelpen from '../../assets/asg_speltakken/welpengroep.png';
import imgOeghana from '../../assets/asg_speltakken/oeghanga.jpg';

function Welpen() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Welpen </h1>
                </div>
                
                <p>
                    Welpen zijn leden, jongen of meisje, van 7 tot en met 11 jaar. Vroeger was deze speltak onderverdeelt in Welpen (jongens) en Kabouters (meisjes)
                    Veel namen van de welpen stammen voort uit Jungleboek, geschreven door Rudyard Kipling. Het is een boek over de rimboe die verteld over het verhaal van Mowgli, 
                    een jongetje. Hij is verdwaald in de rimboe, maar gelukkig neemt Raksha de wolf hem op in haar nest. Mowgli groeit op bij de welpen.

                    Welpen zijn jonge wolven. Akela, de oude grijze wolf, roept de Welpen: "Verzamelen bij de grote raadsrots!". 
                    Welpen gaan dan samen op jacht in de rimboe. Ze beleven er allerlei avonturen, net zoals bij ons op scouting. 
                    Soms steken ze zelfs de Waingoenga-rivier over, en soms leren ze over de rimboe van Baloe, de bruine beer. 
                    Bagheera, de zwarte panter, is de beste jager van de rimboe, hij kent alle sporen en sluipt als de beste. 
                    De oude olifant Hathi kan mooi vertellen. Hij is wel honderd jaar en heeft veel meegemaakt. 
                    En er zijn nog veel meer dieren waar de Welpen graag iets van leren.
                </p>

                <p>
                    Een keer per jaar gaan alle welpen op kamp. Dan slaap met je z'n allen in een clubhuis of het gebouw van een andere Scoutinggroep. 
                    Je leert elkaar goed kennen en beleeft extra-speciale avonturen. Misschien is er wel een groot kampvuur...
                    Bijeenkomsten zijn elke zaterdagochtend van 10.15 tot 12.15 uur.
                </p>
                
                <div className='content-image'>
                    <img src={imgWelpen}/>
                </div>

                <hr/>

                <p>
                    Onze welpentak is vernoemd naar de Oeghangahorde. Oeghanga is in veel Afrikaanse talen een woord voor de man in het dorp die 
                    alles weet van geesten en hoe je weer beter moet worden, oftewel: de medicijnman. Voor de inwoners van Gabon was Albert 
                    hun "witte dokter", de Oeghanga.
                </p>

                <div className='content-image'>
                    <img src={imgOeghana}/>
                </div>
                
            </div>  
        </>
    )
}

export default Welpen;
