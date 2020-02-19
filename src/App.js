import React from "react";
import "./scss/App.scss";
import { Row, Col, Container, setConfiguration } from "react-grid-system";
import QA from "./components/QA";

setConfiguration({ gutterWidth: 40 });
function App() {
  return (
    <div>
      <Container className="splash">
        <Row className="firstSplash">
          <Col sm={6}>
            <img src={require("./images/splash.png")} alt="Frontiers" />
          </Col>
          <Col sm={6}>
            <h1>Design Frontiers</h1>
            <h2>sponsored by Intuit</h2>
            <p>
              A day long design jam hosted <br />
              in collaboration with Intuit
            </p>
            <p>Feb. 23, 2020 @ Multipurpose Room SSC</p>
            <button type="button">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSccaWzOpcud2x52teR8D5ZPDhVVOjHlBQSNTCvr5msQ8q9SmA/viewform"
                target="_blank"
              >
                SIGN UP
              </a>
            </button>
          </Col>
        </Row>

        <Row className="QAarea">
          <h2 className="">Frequently Asked Questions</h2>
          <QA
            question="What is Design Frontiers?"
            answer="Design Frontiers is a day-long design jam that allows students to tackle design challenges with the mentorship of product designers from Intuit. This quarter’s design jam with focus on personal finance."
          />
          <QA
            question="What is a design jam?
"
            answer="A design jam is an interactive process where participants have the opportunity to collaborate and use design thinking principles to rapidly innovate solutions to a given task under a time constraint.
"
          />
          <QA
            question="What is design thinking?
"
            answer="Design thinking is an ideology that advocates for a people-centered approach to innovative problem solving.  The design-thinking process comprises the key stages of empathizing, defining, ideating, prototyping, testing, and implementing.  
"
          />
          <QA
            question="Will there be prizes?
"
            answer="Yes! Winning teams will receive cool prizes :)
"
          />
          <QA
            question="Will there be food?
"
            answer="We will be providing light refreshments for breakfast, lunch, and snacks throughout the day.
"
          />
          <QA
            question="What should I bring?
"
            answer="We recommend bringing your laptop, charger, and water bottle. We’ll provide all the post-its and paper!
"
          />
        </Row>
      </Container>
      <div style={{ width: "100%", background: "white" }}>
        <Row justify="center" className="footer">
          <Col sm={2} xs={6}>
            <img src={require("./images/intuit.png")} />
          </Col>
          <Col sm={2} xs={6}>
            <img src={require("./images/ucsdlogo.png")} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
