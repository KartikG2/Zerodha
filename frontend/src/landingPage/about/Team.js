import React from "react";
function Team() {
  return (
    <div className="container p-5">
      <h2 className="text-center mb-5">People</h2>
      <div className="row mt-5">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/profile-pic.png" alt="profilepic"
            style={{ width: "70%" }}
          ></img>
          <h4 className="mt-3">Kartik Gangavati</h4>
          <p>Founder, Web Developer</p>
        </div>
        <div className="col-6 p-5">
          <p>
            This is Kartik Gangavati, 3rd year student at Dr SMCE
            Bengaluru,Karnataka pursuing my BE in Computer Science and
            Engineering.
          </p>
          <p>
            Always open to learn about development and try my best to
            efficiently use it to explore innovative technology.
          </p>
          <p>
            I enjoy building awesome software websites that solves pratical
            problems. I work with HTML5, CSS3, JavaScript, Bootstrap, React.js,
            Node.js, Express.js, Mongo DB, Git, Git-hub.
          </p>
          <p>Connect on <a href="https://www.linkedin.com/in/kartikgangavati/">Linked in</a> / <a href="https://github.com/KartikG2">Github</a> / <a href="https://www.instagram.com/_kartik._g">Instagram</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
