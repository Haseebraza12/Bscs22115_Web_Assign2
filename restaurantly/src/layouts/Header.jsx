import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      document.body.classList.toggle('scrolled', window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <header id="header" className={`header fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      {/* Reference to HTML template for header content */}
      {/* Lines from index.html: 41-95 */}
    </header>
  );
};

export default Header;