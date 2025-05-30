
import './App.css'
import Button from './components/button/Button'
import Curser from './components/curser/Curser'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);
  return (
    <>
<Button/>
<Curser/>
    <Header/>
    <HeroSection/>
    <ProductsSection/>
    <Footer/>
    </>
  )
}

export default App
