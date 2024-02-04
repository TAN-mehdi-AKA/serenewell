import '../App.css';
import AOS from'aos'
import'aos/dist/aos.css'
export default function Press(){

        AOS.init({duration: 300});

    return(
        <>
        <div className=' press_container'>
            <h1 className='press_title' data-aos="fade-up">In The Press</h1>
            <div className='press_subContainer'>
                <div className='press_review'>
                    <p className='press_p' data-aos="fade-in">"Our stay at SereneWell Hotel was 
                    nothing short of spectacular! The luxurious rooms, impeccable service, and breathtaking 
                    views made our getaway truly unforgettable. We can't wait to return!"</p>
                    <h3 className='press_h3' data-aos="fade-in">Olivia Thompson</h3>
                </div>
                <div className='press_review'>
                    <p className='press_p' data-aos="fade-in">"A hidden gem! SereneWell Hotel provided 
                    the perfect blend of elegance and comfort. The spa and wellness offerings added a touch 
                    of relaxation to our stay. We left feeling rejuvenated and already planning our next visit."</p>
                    <h3 className='press_h3' data-aos="fade-in">Alex Rodriguez</h3>
                </div>
                <div className='press_review'>
                    <p className='press_p' data-aos="fade-in">"An oasis of tranquility! SereneWell Hotel 
                    is a must-visit. The lush surroundings, stylish decor, and top-notch amenities created 
                    an atmosphere of pure relaxation. We couldn't have asked for a better escape."</p>
                    <h3 className='press_h3' data-aos="fade-in"> Olivia Mercer</h3>
                </div>
            </div>
        </div>
        </>
    )
}