import React from "react";
import "./Carrer.css";

const Carrer = () => {
  const carrers = [
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2020-2022",
    },
    {
      title: "Backend Developer",
      name: "Software",
      year: "2021-2023",
    },
    {
      title: "Wordpress Developer",
      name: "Software",
      year: "2022-2024",
    },
  ];
  const educations = [
    {
      title: "National Open University of Nigeria",
      name: "Computer Science",
      year: "2021-2025",
    },
    {
      title: "All-Tech Academy Surulere Lagos Nigeria",
      name: "Computer Programing",
      year: "2020-2021",
    },
    {
      title: "alx software engineer ",
      name: "Computer Programing",
      year: "2023-2025",
    },
  ];
  return (
    <section id="carrer">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Carrer</h3>
          <div className="c-b-container">
            {carrers.map((carrer, index) => (
              <div className="c-box" key={index}>
                <h4>{carrer.title}</h4>
                <strong>{carrer.name}</strong>
                <span>{carrer.year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="carrer edu" data-aos="fade-left">
          <h3>Education</h3>
          <div className="c-b-container">
            {educations.map((carrer, index) => (
              <div className="c-box" key={index}>
                <h4>{carrer.title}</h4>
                <strong>{carrer.name}</strong>
                <span>{carrer.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn-c">
        <a
          href="https://drive.google.com/file/d/1JUp-jKaMLyLkPqNLpQ2Ik_Ccp2eg80Xf/view?usp=sharing"
          download
          className="btn-link"
          target="blank"
        >
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  );
};
export default Carrer;
