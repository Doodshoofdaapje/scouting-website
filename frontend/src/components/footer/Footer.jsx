import './Footer.scss';
import iconFacebook from '../../assets/icons-facebook.svg';
import iconInstagram from '../../assets/icons-instagram.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <h2> Social media </h2>
                <a href="https://www.facebook.com/AsgBreda"><img src={iconFacebook}></img></a>
                <a href="https://www.instagram.com/asgbreda/"><img src={iconInstagram}></img></a>
            </div>
        </div>
    )
}

export default Footer