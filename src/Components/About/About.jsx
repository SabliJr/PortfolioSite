import "./About.css";

import AboutImg from "../../Assetes/IMG_0840 copy.jpg";

import css from "../../Assetes/CSS.png";
import Js from "../../Assetes/JS.png";
import React from "../../Assetes/React.png";
import Git from "../../Assetes/Git.png";
import TypeScript from "../../Assetes/Typescrip.png";

const About = () => {
  return (
    <section className='aboutSection' id='about'>
      <img className='aboutImg' src={AboutImg} alt='AboutImg' />
      <div className='textDiv'>
        <h3>
          About Me <span className='line'>____________</span>{" "}
        </h3>
        <p>
          My name is Sabli Junior, I’m a frontend software engineer. I’m highly
          self-motivated and passionate about coding and start-ups as I dream to
          found one myself one day!
          <br />
          <br />
          I love exploring and learning, I’m a lifelong learner, and my talent
          is the ability to learn expeditiously. I’m from Sudan but I live in
          France, I speak 3 languages “English, Arabic, and French(B1)”, I love
          languages, both humans and computers.. I’m also a big fan of Tech and
          Crypto.
          <br />
          <br />
          I know how to use a couple of Adobe suite software. My creative skills
          have been either proudly taught by fellow mentors or self-taught. I am
          always excitedly in search of new challenges, which can lead to higher
          growth.
          <br />
          <br />
          My goal is to work in a company where I can deliver business values,
          while also levelling up my skills as a developer, I like to seek out
          learning opportunities and not being afraid to fail and struggle as a
          part of learning.
        </p>

        <div className='skillsDiv'>
          <h5>Skills:</h5>
          <div className='iconsDiv'>
            <div className='iconImgDiv'>
              <img src={css} alt='' />
              <p>CSS</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Js} alt='' />
              <p>JavaScript</p>
            </div>
            <div className='iconImgDiv'>
              <img src={React} alt='' />
              <p>React</p>
            </div>
            <div className='iconImgDiv'>
              <img src={Git} alt='' />
              <p>Git</p>
            </div>
            <div className='iconImgDiv'>
              <img src={TypeScript} alt='' />
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
