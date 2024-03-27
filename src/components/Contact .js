import React from 'react';
import './Header.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Whether you have an idea or just want to talk, feel free to contact us.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <div className="info-box">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Our Address</h3>
                <p>123 Street Name, City, State, Postal Code, Country</p>
              </div>
              <div className="info-box">
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
              <div className="info-box">
                <i className="fas fa-phone-alt"></i>
                <h3>Call Us</h3>
                <p>+1 234 567 890</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
