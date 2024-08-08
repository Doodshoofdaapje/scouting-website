import '../Page.scss';
import imgScoutingNL from '../../assets/scoutingnl.jpg';
import imgBadenPowel from '../../assets/badenpowel.jpg';

function OntdekScouting() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Ruim 100.000 jongens en meisjes in ons land zijn lid van Scouting. Samen met zo'n 25.000 kaderleden vormen zij de grootste jeugd- en jongerenvereniging 
                        van Nederland. Wereldwijd zijn er 32 miljoen Scouts in meer dan 160 landen. 
                    </p>
                    <img src={imgScoutingNL}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Ontdek Scouting
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    Een afwisselende en plezierige vrijetijdsbesteding, dat is wat Scouting te bieden heeft.
                    Maar Scouting is meer: naarmate je als jeugdlid ouder wordt en je langer bij Scouting bent, neemt je zelfstandigheid toe; 
                    de begeleiding kan daardoor dus afnemen. Iedereen kan meedoen met Scouting. Geloof, ras, huidskleur, handicap, vluchteling of seksuele voorkeur, 
                    het maakt niet uit, Scouting staat open voor iedereen.
                </p>

                <div className='content-image-small'>
                    <img src={imgBadenPowel}/>
                </div>

                <p>
                    Een Scoutinggroep organiseert activiteiten voor haar leden. Deze activiteiten zijn vaak gericht op de samenleving en de natuur.
                    Het buitenleven hoort bij Scouting, kamperen is dan ook zeer populair binnen Scouting. Het programma dat Scouting biedt, is gebaseerd op de ideeën van de 
                    Engelsman Baden-Powell. Hij bedacht het Scoutingspel aan het begin van de 20e eeuw. Door er voortdurend een eigentijdse draai aan te geven, blijft Scouting 
                    aantrekkelijk. Steeds meer jongens en meisjes in Nederland worden lid van een Scoutinggroep. De bovengenoemde ideeën van Lord Baden-Powell omvatten:
                </p>

                <ul>
                    <li>Ontplooiing en ontwikkeling van het individu</li>
                    <li>Groeiende zelfstandigheid</li>
                    <li>Wet en belofte</li>
                    <li>Veelzijdige activiteiten</li>
                    <li>Hulpbereidheid en hulpvaardigheid</li>
                    <li>Buitenleven</li>
                    <li>Internationale verbondenheid</li>
                </ul>
            </div>
        </div>

        </>
    )
}

export default OntdekScouting