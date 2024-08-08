import '../../Page.scss';
import imgBevers from '../../../assets/asg_speltakken/bevers.jpg';
import imgPhylax from '../../../assets/asg_speltakken/phylax.jpg';

function Bevers() {
    return (
        <>
            <div className='container page-content'>
                <div className='content-header'>
                    <h1> Bevers</h1>
                </div>
                
                <p>
                    Dit is het jongste onderdeel van onze groep. Bevers zijn kinderen van 5 tot 7 jaar. 
                    Spelenderwijs maken zij kennis met scouting. Net als de oudere scouts hebben Bevers hun eigen gebruiken, 
                    die Bevermanieren worden genoemd. Deze gebruiken zijn speels en bevorderen vooral het groepsgevoel. 
                    Op deze manier leren de Bevers spelenderwijs samen te werken. De opkomsten van de bevers zijn elke zaterdagochtend
                    van 10.15 tot 12.15 uur.
                </p>
                
                <div className='content-image'>
                    <img src={imgBevers}/>
                </div>

                <hr/>

                <p>
                    Onze beverkolonie is genoemd naar de waakhond van Albert Schweitzer: Phylax. Phylax was niet zomaar een hond; 
                    hij was een trouwe metgezel en symbool van toewijding en waakzaamheid. Net zoals Phylax voor Albert Schweitzer 
                    zorgde en hem beschermde, streven wij ernaar om in onze beverkolonie een veilige en zorgzame omgeving te bieden 
                    voor onze jongste leden.
                </p>

                <div className='content-image'>
                    <img src={imgPhylax}/>
                </div>
                
            </div>  
        </>
    )
}

export default Bevers;
