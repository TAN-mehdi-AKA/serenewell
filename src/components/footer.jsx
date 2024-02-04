import '../App.css';
import AOS from'aos'
import'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    AOS.init({duration: 1000});
    return(
        <>
        <div className='footer_container'>
            <img className='hotel' src={require("./hotel.jpg")} data-aos='fade-in' />
            <div className='footer_subContainer' data-aos='fade-in' >
                <h2 className='contactUs'>Contact Us</h2>
                <p> 456 Imaginary Ave Dreamtown, DT 56789</p>
                <p>(+1) 555-123-4567</p>
                <p>serenewell@gmail.com</p>
                <div className='footer_subContainer2'>
                    <div>
                        <h3>Active Hours</h3>
                        <span className='active_hours'>
                            <p>Monday to Friday: 10:00 AM - 8:00 PM</p>
                            <p>Saturday: 11:00 AM - 7:00 PM</p>
                            <p>Sunday: 12:00 PM - 6:00 PM</p>
                        </span>
                    </div>
                    <div>
                        <h3>Get Social</h3>
                        <div className='icons'>
                        <p><FontAwesomeIcon icon={faFacebook} />SerenityWellBook</p>
                        <p><FontAwesomeIcon icon={faTwitter} />WellSerenity</p>
                        <p><FontAwesomeIcon icon={faInstagram} />SereneWelliverse</p>
                        </div>
                    </div>
                </div>
                <h1 className='SERENEWELL'>SERENEWELL</h1>
            </div>
        </div>
        </>
    )
}