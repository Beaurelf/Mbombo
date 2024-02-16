import { BrowserRouter,Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './components/Header'
import Home from './pages/Home';
import Partner from './pages/Partner';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Header from './components/Header';
import Offers from './pages/Offers';
import ScrollToTop from './components/ScrollToTop';
import AosInitializer from './components/AosInitializer';

function App() {

  return (
      <div className="App">
        <a className='button contact-us text-center' href="tel:+1(514)605-3560"><i className="fa-solid fa-phone"></i></a>
        <a className='button button-whatsapp' href="https://api.whatsapp.com/send?phone=+1(514)605-3560&amp;text=Bienvenue chez Mbombo entreprise">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <BrowserRouter>
          <AosInitializer/>
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/why-us' element={<Partner/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/services' element={<Offers/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
}

export default App;
