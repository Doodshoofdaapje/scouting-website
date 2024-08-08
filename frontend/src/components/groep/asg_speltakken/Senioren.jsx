import '../../Page.scss';
import imgSenioren from '../../../assets/asg_speltakken/senioren.png';
import imgSpeltak from '../../../assets/asg_speltakken/tamtam.jpg';

function Senioren() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Plusscouts (Senioren) </h1>
                </div>
                
                <p>
                    Senioren zijn leden ouder dan 21 jaar. 
                    Plusscouts zijn de 'blijvers' binnen de Albert Schweitzer Groep. 
                    Ze waren (of zijn dat nog) leider of leidster, beheren het magazijn, 
                    zijn bestuurslid of hebben gewoon geen zin om afscheid te nemen.
                </p>

                <p>
                    Senioren komen om de twee weken op dinsdagavond van 20 tot 22 uur bij elkaar. Twee van hen organiseren dan een programma.
                    De senioren gaan eens per jaar een lang weekend op expeditie.
                </p>
                
                <div className='content-image'>
                    <img src={imgSenioren}/>
                </div>

                <hr/>

                <p>
                    De naam van onze plusscouts is Tam Tam Stam, genoemd naar het Afrikaanse muziekinstrument.
                </p>

                <div className='content-image'>
                    <img src={imgSpeltak}/>
                </div>
                
            </div>  
        </>
    )
}

export default Senioren;
