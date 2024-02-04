import '../App.css';
import Description from './description';
import Footer from './footer';
import Press from './press';
import Promos from './promos';
export default function Welcoming(){

    return(
        <>
        <div className='welcoming_forFlex'>
        <div className='welcoming_container' >
            <div className='welcoming_text'>
                <h2 className='welcoming_title'> Welcome to your luxurious home away from home </h2>
            </div>
        </div>
        </div>
        <Promos/>
        <Description/>
        <Press/>
        <Footer/>
        </>
    )
}