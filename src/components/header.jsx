import { Link, Outlet } from 'react-router-dom'
import '../App.css'
export default function Header(){
    return(
        <>
        <div>
            <video autoPlay muted loop className="myVideo" >
                <source src={require("./video3.mp4")} type="video/mp4"/>
            </video>
            <header className='header'>
                <h3 className='welcome'>WELCOME TO</h3>
                <h1 className='title'>The SereneWell</h1>
                <h2 className='discription'>RESORT & SPA HOTEL</h2>
                <Link to='welcoming'><button type='button' className='learn_more' >LEARN MORE</button></Link>
                <Outlet/>
            </header>
        </div>
        </>
    )
}