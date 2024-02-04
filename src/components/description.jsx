import '../App.css';
import AOS from'aos'
import'aos/dist/aos.css'
export default function Description(){

        AOS.init({duration: 300});

    return(
        <>
        <div className='description_container'>
           <div className='down'>
            <h1>Great Expirience</h1>
            <img className='mini' src={require('./room2.jpg')} alt="!!" />
           </div>
           <img className="big" src={require('./room1.png')} alt="!!" />
           <div className='up'>
            <img className='mini' src={require('./room3.jpg')} alt="!!" />
            <h2><b>Mason Reed</b><br />photographer</h2>
           </div>
        </div>
        </>
    )
}