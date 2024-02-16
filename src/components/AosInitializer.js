import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'

function AosInitializer() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: 'mobile',
    });
  }, [location.pathname]);

  return null;
}

export default AosInitializer