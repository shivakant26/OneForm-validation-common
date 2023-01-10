import React, { useState } from "react";
import "./Details.scss";
import profileImage from "../assets/profile.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "../common/experience";
import InputRange from "../common/range";


const Details = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="pr-top-section">
            <h3>Emma Roberts</h3>
            <p>Web Developer</p>
            <div className="profile-image">
              <img src={profileImage} alt="profile image" />
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <div className="column-left">
              <div className="exp-heading">
                <h2>experience</h2>
                <p>2015-present</p>
              </div>
              <div className="exp">
                <Experience />
              </div>
              <div className="exp">
                <Experience />
              </div>
              <div className="exp">
                <Experience />
              </div>
              <div className="exp">
                <Experience />
              </div>
              <div className="exp">
                <Experience />
              </div>
            </div>
          </Col>
          <Col>
            <div className="column-right">
              <div className="education-heading">
                <h2>Education</h2>
                <p>2011-2013</p>
              </div>
              <div className="exp">
                <h6>MCA(master of Computer Application)</h6>
                <p>DAVV University Indore (M.P.)</p>
                <p>2007-2011</p>
              </div>
              <div className="exp">
                <h6>BCA (Bachlor of Computer Application)</h6>
                <p>2015-present</p>
              </div>
              <div className="exp">
                <h3>Skill</h3>
                <Row>
                  <Col md={2}>
                    <p>html</p>
                    <p>css</p>
                    <p>javascript</p>
                    <p>react</p>
                    <p>nodejs</p>
                    <p>bootstrap</p>
                    <p>Python</p>
                    <p>mpngodb</p>
                    <p>Expressjs</p>
                  </Col>
                  <Col>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                    <p>
                      <InputRange />
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="contact">
                <h3>Contact</h3>
                <p>emma@524gmail.com</p>
                <p>8852658971</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
