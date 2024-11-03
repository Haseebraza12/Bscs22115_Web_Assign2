
import React from 'react';

import '../styles/Chefs.css';
import '../App.css';
import '../index.css';
const chefsData = [
  {
    name: 'Walter White',
    title: 'Master Chef',
    image: 'assets/img/chefs/chefs-1.jpg',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Jhonson',
    title: 'Patissier',
    image: 'assets/img/chefs/chefs-2.jpg',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'William Anderson',
    title: 'Cook',
    image: 'assets/img/chefs/chefs-3.jpg',
    socialLinks: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {chefsData.map((chef, index) => (
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`} key={index}>
              <div className="member">
                <img src={chef.image} className="img-fluid" alt={chef.name} />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>{chef.name}</h4>
                    <span>{chef.title}</span>
                  </div>
                  <div className="social">
                    <a href={chef.socialLinks.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={chef.socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={chef.socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={chef.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;