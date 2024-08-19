import '../Page.scss';
import './Contact.scss'
import iconMail from '../../assets/mail_icon.svg';
import iconPhone from '../../assets/phone_icon.svg';
import imgContact from '../../assets/contact.png';

function Contact() {

    return(
        <>
        <div className="container">
            
            <div className='page-header'>
                <div>
                    <p>
                        Contact opnemen met de groep, onderdelen of de stichting van ASG? Zie onderstaande contact gegevens
                        per onderdeel van de scouting.
                    </p>
                    <img src={imgContact}/>
                </div>
            </div>  
            
            <div className='content-header'>
                <h1>
                Contact Groep
                </h1>
            </div>

            <div className='image-gallery'>

                <div className='contact-block'>
                    <h3>Voorzitter Groep</h3>
                    <p><img src={iconMail}/> voorzitter@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Secretaris Groep</h3>
                    <p><img src={iconMail}/> secretaris@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Penningmeester Groep</h3>
                    <p><img src={iconPhone}/> 06 531 20 689</p>
                    <p><img src={iconMail}/> penningmeester@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Praktijk begeleiding</h3>
                    <p><img src={iconPhone}/> 	06 539 64 550</p>
                    <p><img src={iconMail}/> voorzitter@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Magazijn</h3>
                    <p><img src={iconPhone}/> 	06 504 01 997</p>
                    <p><img src={iconPhone}/> 	06 145 61 524</p>
                    <p><img src={iconMail}/> magazijn@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Onderhoud</h3>
                    <p><img src={iconMail}/> onderhoud@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Website</h3>
                    <p><img src={iconMail}/> webmaster@asgbreda.nl</p>
                </div>
            </div>

            <div className='content-header'>
                <h1>
                Contact Onderdelen
                </h1>
            </div>

            <div className='image-gallery'>

                <div className='contact-block'>
                    <h3>Bevers</h3>
                    <p><img src={iconPhone}/> 06 539 64 550</p>
                    <p><img src={iconMail}/> bevers@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Welpen</h3>
                    <p><img src={iconMail}/> welpen@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Scouts</h3>
                    <p><img src={iconMail}/> scouts@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>RSA</h3>
                    <p><img src={iconMail}/> rsa@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Pivo</h3>
                    <p><img src={iconMail}/> pivo@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Senioren</h3>
                    <p><img src={iconPhone}/> 06 308 47 879</p>
                    <p><img src={iconMail}/> senioren@asgbreda.nl</p>
                </div>
            </div>

            <div className='content-header'>
                <h1>
                Contact Stichting
                </h1>
            </div>
            

            <div className='image-gallery'>

                <div className='contact-block'>	
                    <h3>Voorzitter Stichting</h3>
                    <p><img src={iconPhone}/> 06 147 76 156</p>
                    <p><img src={iconMail}/> 	stichtingsvoorzitter@asgbreda.nl  </p>
                </div>

                <div className='contact-block'>
                    <h3>Secretaris Stichting</h3>
                    <p><img src={iconMail}/> 	stichtingssecretaris@asgbreda.nl</p>
                </div>

                <div className='contact-block'>
                    <h3>Penningmeester Stichting</h3>
                    <p><img src={iconMail}/> 	stichtingspenningmeester@asgbreda.nl
                    </p>
                </div>

                <div className='contact-block'>
                    <h3>Verhuur</h3>
                    <p><img src={iconPhone}/> 	06 147 76 156</p>
                    <p><img src={iconMail}/> verhuur@asgbreda.nl</p>
                </div>
        </div>
            
        </div>
        </>
    )
}

export default Contact