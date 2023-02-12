import "./Work.css";

import P1Img from "../../Assetes/p1.jpeg";
import P2Img from "../../Assetes/p2.jpeg";
import P3Img from "../../Assetes/p3.jpeg";

const Work = () => {
  return (
    <article className='work_article' id='myWork'>
      <h2>
        My Work <span className='line'>____________</span>
      </h2>
      <div className='main_div'>
        <img src={P1Img} alt='P1Img' />
        <div className='text_div'>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            doloremque! Eum voluptatum a, quisquam non facere quod voluptas quae
            quasi laborum ab quos aspernatur odit inventore est sed neque
            dignissimos?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            deserunt totam veritatis aspernatur voluptatibus cumque commodi
            harum mollitia similique exercitationem!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            repellat corporis dolor itaque vitae cumque ab, rem quas saepe
            possimus assumenda porro aliquam, eaque velit minus aspernatur.
            Officia, omnis sint?
          </p>
          <div className='Stack_div'>
            <h6>Techs I used:</h6>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
          <div className='buttons_div'>
            <a
              target='#blank'
              href='https://sablijr.github.io/SBcollege/index.html'>
              <button>View Live</button>
            </a>
            <a target='#blank' href='https://github.com/SabliJr'>
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className='main_div'>
        <img src={P2Img} alt='P2Img' />
        <div className='text_div'>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            recusandae fugiat temporibus quae provident consequatur eum ullam
            libero aperiam eveniet maxime quas, similique suscipit architecto.
            Mollitia laborum eveniet voluptate ullam.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sit
            blanditiis voluptas esse non vitae alias provident possimus!
            Veritatis, aliquid!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae
            harum eveniet commodi neque eligendi, odit aliquid qui ipsum?
            Consequatur aliquid illum voluptas beatae voluptatem? Id modi a quam
            quod.
          </p>

          <div className='Stack_div'>
            <h6>Techs I used:</h6>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
          <div className='buttons_div'>
            <a
              target='#blank'
              href='https://sablijr.github.io/SBcollege/index.html'>
              <button>View Live</button>
            </a>
            <a target='#blank' href='https://github.com/SabliJr'>
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className='main_div'>
        <img src={P3Img} alt='P3Img' />
        <div className='text_div'>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            recusandae fugiat temporibus quae provident consequatur eum ullam
            libero aperiam eveniet maxime quas, similique suscipit architecto.
            Mollitia laborum eveniet voluptate ullam.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            voluptate atque omnis quisquam at dicta quae fuga dolor corrupti a.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea ipsa
            eum necessitatibus, porro vero facere, reiciendis animi odit quasi
            similique. Similique recusandae, ipsum blanditiis quia quod laborum
            repellendus facere.
          </p>
          <div className='Stack_div'>
            <h6>Techs I used:</h6>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className='buttons_div'>
            <a
              target='#blank'
              href='https://sablijr.github.io/SBcollege/index.html'>
              <button>View Live</button>
            </a>
            <a
              target='#blank'
              href='https://www.linkedin.com/in/sabli-junior-1861b71b5/'>
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Work;
