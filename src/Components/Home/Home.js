import React from "react";
import "./Home.css";
import martins from "../../assets/images/martins.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, I'm</strong>
        <h1>Martins Ejiofor</h1>
        <p>
          I am a Software Engineer, innovator, and leader with a passion for
          turning ideas into impactful digital experiences. With over four years
          of experience in Full-Stack Development, Frontend &
          Backend Development, and WordPress, I build solutions that are not
          only functional but also intuitive and user-centered. As a leader and
          mentor, I inspire teams to reach their full potential, fostering
          creativity, collaboration, and growth. My journey—from humble
          beginnings to building my own tech company—drives me to empower others
          to pursue their passions and achieve their dreams through technology.
          I am committed to creating meaningful, scalable solutions that make a
          difference, while inspiring and guiding the next generation of tech
          innovators.
        </p>

        <a href="#summery" className="btn-link">
          Scroll Down
        </a>
      </div>
      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={martins} alt="martins" />
          <h2>
            Martins Ejiofor <br /> <br />
            <span> FullStack Developer </span>
          </h2>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100086715874671">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/martins-ejiofor-a9b32b26a/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/martins091">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="mailto:agbomartinsejifor@gmail.com" className="hire-me">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
