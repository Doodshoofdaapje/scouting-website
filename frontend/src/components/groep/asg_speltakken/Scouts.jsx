import '../../Page.scss';
import imgScouts from '../../../assets/asg_speltakken/scouts.png';
import imgHelena from '../../../assets/asg_speltakken/helena.jpg';

function Scouts() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Scouts </h1>
                </div>
                
                <p>
                    Scouts zijn leden, jongen of meisje, van 11 tot en met 15 jaar. Vroeger was deze speltak onderverdeelt in Verkenners (jongens) en Gidsen (meisjes)
                    Een Scout ontwikkelt z'n eigen talenten. Er is ruimte voor iedereen.
                    Pannenkoeken bakken, speurtochten lopen op kaart en kompas, bruggen bouwen van touw en hout, zingen, omgaan met kooktoestellen, 
                    kamperen onder een zeiltje, schminken, boogschieten, theater, koken op een houtvuurtje, vliegers maken... je kunt het zo gek niet bedenken.
                    Geen beter leven dan buitenleven. Een Scout kan niet zonder de natuur. En dus ben je daar zuinig op. Dat is ook iets wat je belooft als je bij de Scouting komt.
                </p>

                <p>
                    Twee keer per jaar gaan de verkenners en gidsen een weekend kamperen.
                    In de zomer gaan ze een hele week met de tent op pad. In een eigen tent, zelf je keuken pionieren, zelf koken... het hoogtepunt van het jaar !
                    Dit onderdeel heeft bijeenkomsten op vrijdagavond van 19.15 tot 21.15 uur.
                </p>
                
                <div className='content-image'>
                    <img src={imgScouts}/>
                </div>

                <hr/>

                <p>
                    Onze scoutstak is vernoemd naar zowel de vrouw van Albert, Helena Bresslau, als de Lambaréné-troep. Helena Bresslau, later bekend als Helena Schweitzer, 
                    was een toegewijde verpleegster en de steunpilaar van Albert Schweitzer's werk in Afrika. De Lambaréné-troep verwijst naar de plek in Gabon waar Albert 
                    en Helena Schweitzer hun levenswerk hebben verricht. 
                </p>

                <div className='content-image'>
                    <img src={imgHelena}/>
                </div>
                
            </div>  
        </>
    )
}

export default Scouts;
