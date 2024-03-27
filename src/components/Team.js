import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/wipro.jpg"
                  className="img-fluid"
                  alt="Mohammed Waseem"
                />
                <div className="overlay">
                  <div className="social">
                    <a href="https://twitter.com/mwaseem">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.facebook.com/mwaseem">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/waseem_mohd2831">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-waseem">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h4>Mohammed Waseem</h4>
                <span>Frontend Developer</span>
                <p>Passionate about creating beautiful and functional user interfaces.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={200}>
            <div className="member">
              <div className="pic">
                <img
                  src="assets/img/team/bilal.jpg"
                  className="img-fluid"
                  alt="Mohd Bilal Ahmed"
                />
                <div className="overlay">
                  <div className="social">
                    <a href="https://twitter.com/mbilal">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.facebook.com/mbilal">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/bilalahmed">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-bilal-ahmed">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h4>Mohd Bilal Ahmed</h4>
                <span>Frontend Developer</span>
                <p>Committed to delivering high-quality, user-friendly web experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
