import React from "react";

function Team() {
  return (
    <div className="container py-5 fade-in-up">
      <h2 className="text-center mb-5 display-5 opacity-75">People</h2>
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0">
          <img
            src="media/images/profile-pic.png" // Ensure this path is correct in your public folder
            alt="Kartik Gangavati"
            className="team-avatar img-fluid"
            style={{ maxWidth: "300px" }}
          />
          <h4 className="mt-4 mb-1">Kartik Gangavati</h4>
          <p className="text-muted fst-italic">Founder, Web Developer</p>
        </div>

        {/* Text Section */}
        <div className="col-12 col-lg-7 px-4 px-lg-5">
          <p className="lead fs-6 lh-lg text-secondary">
            This is Kartik Gangavati, a 4th year student at Dr SMCE Bengaluru,
            Karnataka pursuing my BE in Computer Science and Engineering.
          </p>
          <p className="lh-lg text-secondary">
            Always open to learn about development and try my best to
            efficiently use it to explore innovative technology.
          </p>
          <p className="lh-lg text-secondary">
            I enjoy building awesome software websites that solve practical
            problems. I work with HTML5, CSS3, JavaScript, Bootstrap, React.js,
            Node.js, Express.js, MongoDB, Git, and GitHub.
          </p>
          
          <div className="mt-4 social-links">
            <span className="text-muted me-2">Connect on: </span>
            <a href="https://www.linkedin.com/in/kartikgangavati/" target="_blank" rel="noreferrer">
              LinkedIn
            </a> 
            / 
            <a href="https://github.com/KartikG2" target="_blank" rel="noreferrer">
              Github
            </a> 
            / 
            <a href="https://www.instagram.com/_kartik._g" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;