import React from 'react';
// import './Skills.css';
import './Header.css'
// Assuming you have a separate CSS file for Skills component

function Skills() {
  return (
    <section id="technologies" className="section-bg">
      <div className="container">
        <h2>Technologies Used</h2>
        <div className="row">
          {/* HTML */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/html.png"
              className="img-fluid"
              alt="HTML"
            />
          </div>
          {/* CSS */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/css.png"
              className="img-fluid"
              alt="CSS"
            />
          </div>
          {/* JavaScript */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/javascript.png"
              className="img-fluid"
              alt="JavaScript"
            />
          </div>
          {/* React */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/react.png"
              className="img-fluid"
              alt="React"
            />
          </div>
          {/* Express.js */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/express-js.png"
              className="img-fluid"
              alt="Express.js"
            />
          </div>
          {/* MongoDB */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/mongodb.png"
              className="img-fluid"
              alt="MongoDB"
            />
          </div>
          {/* Node.js */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <img
              src="assets/img/techstack/nodejs.png"
              className="img-fluid"
              alt="Node.js"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
