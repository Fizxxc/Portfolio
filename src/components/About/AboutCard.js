import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hafiz Al Fariz </span>
            from <span className="purple"> West Java, Indonesia.</span>
            <br />
            Currently I am studying at SMK Metland School Cibitung.
            <br />
            I took a major that suits me, namely Dkv major, and I really like eating food out because it is very delicious.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Typograph Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Food Snacks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">FizzxDEV</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
