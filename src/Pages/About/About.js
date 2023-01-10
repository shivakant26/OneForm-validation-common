import React from "react";
import "./About.css"

const About = () => {
  return (
    <>
      <div className="about-page-wr">
        <section>
          <div className="image">
            <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" />
          </div>

          <div className="content">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              aspernatur voluptas inventore ab voluptates nostrum minus illo
              laborum harum laudantium earum ut, temporibus fugiat sequi
              explicabo facilis unde quos corporis!
            </p>
            <ul className="links">
              <li>
                <a href="#">work</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">service</a>
              </li>
              <div className="vertical-line"></div>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <i className="fa fa-twitter"></i>
              </li>
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-github"></i>
              </li>
              <li>
                <i className="fa fa-pinterest"></i>
              </li>
            </ul>
          </div>
        </section>
        <br />
        <br />
        <div className="credit">
          Made with
          <span style={{color:"tomato"}}>❤</span>
          by <a href="https://www.learningrobo.com/">Learning Robo</a>
        </div>
      </div>
    </>
  );
};

export default About;
