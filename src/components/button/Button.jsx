import { useEffect, useState } from 'react'
import './Button.css'
import { ArrowUp } from 'lucide-react';
const Button = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    < >
     <div className={`scrolltotop-btn ${isVisible ? 'active' : ''}`} onClick={scrollToTop}>
      <a href="#">
      <ArrowUp />
      </a>
    </div>
     </ >
  )
}

export default Button