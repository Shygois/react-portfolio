import React from 'react';
import headshotImg from '../../assets/images/Shayana_Gois_web.jpg'

function About() {
    return (
      <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={headshotImg} className="my-2" style={{ width: "10%" }} alt="headshot" />
        <div>My name is Shayana Gois, I'm mostly known as Shy. I'm 27 years old and currently working in Digital Marketing for a financial services company. I joined this bootcamp to enhance my skills and learn more about website building, coding, and the many different softwares tech companies are using. Outside of work and school I love hanging out with my family and friends, traveling, eating, exercising, and photography.</div>
      </section>
    );
  }
  
  export default About;