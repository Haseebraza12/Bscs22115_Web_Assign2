import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <section id="menu" className="menu section">
     
      <div className="container section-title" data-aos="fade-up">
        <h2>Menu</h2>
        <p>Check Our Tasty Menu</p>
      </div>
      
      <div className="container isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="menu-filters isotope-filters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>
       
        <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-6 menu-item isotope-item filter-starters">
            <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
         

          <div className="col-lg-6 menu-item isotope-item filter-specialty">
            <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Bread Barrel</a><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
         

          <div className="col-lg-6 menu-item isotope-item filter-starters">
            <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Crab Cake</a><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>
         
          <div className="col-lg-6 menu-item isotope-item filter-salads">
            <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Caesar Selections</a><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
         

          <div className="col-lg-6 menu-item isotope-item filter-specialty">
            <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Tuscan Grilled</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>
        
          <div className="col-lg-6 menu-item isotope-item filter-starters">
            <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
          {/* Menu Item */}

          <div className="col-lg-6 menu-item isotope-item filter-salads">
            <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Greek Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>
          {/* Menu Item */}

          <div className="col-lg-6 menu-item isotope-item filter-salads">
            <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Spinach Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>
          {/* Menu Item */}

          <div className="col-lg-6 menu-item isotope-item filter-specialty">
            <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
            <div className="menu-content">
              <a href="#">Lobster Roll</a><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>
          {/* Menu Item */}
        </div>
        {/* Menu Container */}
      </div>
    </section>
  );
};

export default Menu;
