import React from "react";
import "./About.css";
import authorImage from "../../assets/images/avatar.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        {/* Imaginea în container rotund */}
        <div className="about__image-container">
          <img
            src={authorImage}
            alt="Bianca Nechita"
            className="about__image"
          />
        </div>

        {/* Textul */}
        <div className="about__text-container">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            I’m a software engineer passionate about building modern,
            responsive web applications. I’m currently completing the TripleTen
            Software Engineering program, where I’ve gained strong skills in
            React, JavaScript, and working with APIs.
          </p>
          <p className="about__text">
            My focus is on writing clean, maintainable code and creating
            user-friendly experiences. I enjoy working with modern tools like
            React, Vite, and React Router to build responsive web applications.
            This project was developed as part of my software engineering
            studies, where I practice API integration, state management, and
            component-based architecture. I am passionate about continuous
            learning and always strive to improve both the quality of my code
            and the usability of my apps.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;