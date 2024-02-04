import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Welcoming from './components/welcoming';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/welcoming' element={<Welcoming/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
