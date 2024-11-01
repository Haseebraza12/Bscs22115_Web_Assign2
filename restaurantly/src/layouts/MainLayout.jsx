import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Preloader from '../components/Preloader';

// Import required CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../assets/css/main.css';

const MainLayout = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </div>
  );
};

export default MainLayout;