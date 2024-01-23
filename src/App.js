import { BrowserRouter,Routes, Route } from 'react-router-dom';
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

function App() {

  return (
    <div className="App">
      <a className='button contact-us text-center' href="tel:+1(514)605-3560">+1(514)605-3560</a>
      <a href="https://api.whatsapp.com/send?phone=+1(514)605-3560&amp;text=Bienvenue chez Mbombo entreprise" 
        class="button button-whatsapp">Ecrivez nous sur WhatsApp</a>
      <BrowserRouter>
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
