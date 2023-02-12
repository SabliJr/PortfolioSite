import "./Contact.css";

import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  let today = new Date();
  let currentDate = today.getFullYear();

  return (
    <section className='contact_section' id='contact'>
      <main className='contact_main'>
        <h2>Get in touch..</h2>
        <button
          onClick={() => (window.location.href = "mailto:sablijr@yahoo.com")}
          className='email_btn'>
          Email Me
        </button>
        <div className='footer'>
          <div className='social_div'>
            <a target='#blank' href='https://twitter.com/SabLiJr'>
              <BsTwitter className='i' />
            </a>
            <a
              target='#blank'
              href='https://www.linkedin.com/in/sabli-junior-1861b71b5/'>
              <BsLinkedin className='i' />
            </a>
            <a target='#blank' href='https://github.com/SabliJr'>
              <BsGithub className='i' />
            </a>
          </div>
          <p className='copyRight'>&copy; Made by: Sabli Jr. {currentDate} </p>
        </div>
      </main>
    </section>
  );
};

export default Contact;
