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
                <div><img src={iconMail}/><p>voorzitter@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Secretaris Groep</h3>
                <div><img src={iconMail}/><p>secretaris@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Penningmeester Groep</h3>
                <div><img src={iconPhone}/><p>06 531 20 689</p></div>
                <div><img src={iconMail}/><p>penningmeester@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Praktijk begeleiding</h3>
                <div><img src={iconPhone}/><p>06 539 64 550</p></div>
                <div><img src={iconMail}/><p>voorzitter@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Magazijn</h3>
                <div><img src={iconPhone}/><p>06 504 01 997</p></div>
                <div><img src={iconPhone}/><p>06 145 61 524</p></div>
                <div><img src={iconMail}/><p>magazijn@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Onderhoud</h3>
                <div><img src={iconMail}/><p>onderhoud@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Website</h3>
                <div><img src={iconMail}/><p>webmaster@asgbreda.nl</p></div>
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
                <div><img src={iconPhone}/><p>06 539 64 550</p></div>
                <div><img src={iconMail}/><p>bevers@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Welpen</h3>
                <div><img src={iconMail}/><p>welpen@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Scouts</h3>
                <div><img src={iconMail}/><p>scouts@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>RSA</h3>
                <div><img src={iconMail}/><p>rsa@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Pivo</h3>
                <div><img src={iconMail}/><p>pivo@asgbreda.nl</p></div>
            </div>

            <div className='contact-block'>
                <h3>Senioren</h3>
                <div><img src={iconPhone}/><p>06 308 47 879</p></div>
                <div><img src={iconMail}/><p>senioren@asgbreda.nl</p></div>
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
                    <div><img src={iconPhone}/><p>06 147 76 156</p></div>
                    <div><img src={iconMail}/><p>stichtingsvoorzitter@asgbreda.nl</p></div>
                </div>

                <div className='contact-block'>
                    <h3>Secretaris Stichting</h3>
                    <div><img src={iconMail}/><p>stichtingssecretaris@asgbreda.nl</p></div>
                </div>

                <div className='contact-block'>
                    <h3>Penningmeester Stichting</h3>
                    <div><img src={iconMail}/><p>stichtingspenningmeester@asgbreda.nl</p></div>
                </div>

                <div className='contact-block'>
                    <h3>Verhuur</h3>
                    <div><img src={iconPhone}/><p> 06 147 76 156</p></div>
                    <div><img src={iconMail}/><p> verhuur@asgbreda.nl</p></div>
                </div>
        </div>
            
        </div>
        </>
    )
}

export default Contact