import '../Page.scss';
import imgLogo from '../../assets/logo_stichting_asg.jpg';

function Stichting() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Scouting Albert Schweitzer kent een stichtingsbestuur en een groepsbestuur (vereniging). Samen werken deze 2 besturen samen om alles soepel 
                        te laten verlopen op de scouting. Ze zijn verantwoordelijk voor alle scoutingactiviteiten die binnen de groep georganiseerd worden.
                    </p>    
                    <img src={imgLogo}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Stichting
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                    De stichting heeft als hoofddoel de behartiging van de financiële en materiële belangen van de stichting.
                    Het bestuur van de stichting bestaat uit tenminste 5 leden, waarvan de meerderheid uit de groepsraad wordt gekozen. 
                    De overige leden hoeven niet uit de groepsraad te komen, maar worden wel benoemd door het groepsbestuur.
                </p>

                <p>
                    Het dagelijks bestuur van de stichting (voorzitter, secretaris, penningmeester) beheert de bezittingen en de financiële middelen van de stichting.
                    Alle gedragsregels binnen de stichting zijn vastgelegd in het huishoudelijk reglement en in de statuten zoals die gedeponeerd zijn bij de Kamer van Koophandel in Breda.

                    Het stichtingsbestuur is verantwoordelijk voor de instandhouding van het gebouw en de accommodatie, die ten dienst staat van de groep (vereniging)
                </p>

            </div>
        </div>
        </>
    )
}

export default Stichting