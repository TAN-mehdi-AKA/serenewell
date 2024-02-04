import '../App.css'
import AOS from'aos'
import'aos/dist/aos.css'
import { useEffect } from 'react';
export default function Promos(){

    useEffect (()=>{
        AOS.init({duration: 300});
    },[])

    return(
        <>
            <div className='promo_container'>
                <h1 className='promos' data-aos="fade-up">
                    Promos and offers
                </h1>
                <div className='promo_SubContainer'>
                    <div className='promo_offers' data-aos="fade-in">
                        <img className='promo_img' src={require("./brown_room.jpg")} alt="" />
                        <h3 className='promo_titles' >Book 3 Nights, Get 1 Night Free</h3>
                        <p className='promo_P' >Unlock extra value with our special offer: Book 3 nights and enjoy a 
                            complimentary 4th night on us! Extend your stay and make the most of 
                            your experience. It's our way of saying thank you for choosing us.</p>
                    </div>
                    <div className='promo_offers' data-aos="fade-in">
                        <img className='promo_img' src={require("./smoke_room.jpg")} alt="" />
                        <h3 className='promo_titles' >Spa And Wellness Packages</h3>
                        <p className='promo_P' >Escape the ordinary and elevate your senses 
                        with our Spa and Wellness Packages, crafted to provide a luxurious 
                        journey of rejuvenation, tailored to your preferences for a truly bespoke and 
                        revitalizing experience.</p>
                    </div>
                    <div className='promo_offers' data-aos="fade-in">
                        <img className='promo_img' src={require("./gym.jpg")} alt="" />
                        <h3 className='promo_titles' >SereneWell Members Club</h3>
                        <p className='promo_P' >Elevate your experience with exclusive benefits, 
                        personalized services, and special perks. Unlock a world of luxury and 
                        well-being. Stay tuned for details on how to become a member and enjoy a 
                        heightened level of hospitality.</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}