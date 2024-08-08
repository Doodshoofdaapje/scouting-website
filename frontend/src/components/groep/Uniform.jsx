import '../Page.scss';
import imgDas from '../../assets/uniform/dasASG.jpg';
import imgBanner from '../../assets/uniform/uniform_banner.jpg';

function Uniform() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                    Elke speltak draagt een kenmerkend uniform dat specifiek is voor die speltak. Hoewel deze uniformen overal dezelfde basisonderdelen hebben, 
                    zijn ze allemaal op hun eigen manier uniek. Dit helpt men om scouts te herkennen door heel europa.
                    </p>
                    <img src={imgDas}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                    Uniform
                </h1>
            </div>
            
            <div className='page-content'>
                <p>
                Alle onderdelen dragen een blauwe broek, groepsdas en bijpassende blouse. Een scoutinggroep is altijd te herkennen aan hun unieke groepsdas; 
                zo is die van de ASG groen en blauw met gele en rode strepen. Elke speltak heeft een eigen kleur blouse, zodat de verschillende leeftijdsgroepen 
                makkelijk te herkennen zijn. Bij de Bevers dragen de leden een rode sweater, de Welpen dragen een groene blouse, de scouts een beige, en de explorers een oranje.
                Op de uniformen moet verder nog een aantal dingen aanwezig zijn: het unieke teken van de speltak, het scouting nederland insigne, en de groeps- en onderdeelnaam bandjes
                </p>

                <p>
                Deze kleuren en uniformen zorgen niet alleen voor eenheid en herkenbaarheid binnen de groep, maar dragen ook bij aan het gevoel 
                van trots en verbondenheid onder de leden. Het uniform is een belangrijk onderdeel van de scoutingtraditie en helpt bij het bevorderen van 
                gelijkheid, discipline en teamgeest. Informeer voor aanschaf van de kleding bij de leiding van het onderdeel. De kleding is ook te koop bij de 
                <a href='https://www.scoutshop.nl/'> Scout Shop </a>
                </p>

            </div>

            <div className='image-gallery'>
                <div>
                    <img src={imgBanner}/>
                    <hr/>
                </div>
            </div>
        </div>

        </>
    )
}

export default Uniform