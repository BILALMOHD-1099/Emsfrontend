import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="hero-title">Empowering Your Business Growth</h1>
              <p className="hero-subtitle">Unlock your potential with our innovative solutions.</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">
                  <i className="fas fa-play"></i> Watch Video
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img-container" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/hero-img.png" className="img-fluid hero-img" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
